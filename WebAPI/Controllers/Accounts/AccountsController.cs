using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using WebAPI.Models.UserModel;

namespace WebAPI.Controllers.Accounts
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController: ControllerBase
    {

        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        private readonly IConfigurationSection _jwtSettings;
        public AccountsController(IMapper mapper, UserManager<User> userManager, IConfiguration configuration)
        {
            _mapper = mapper;
            _userManager = userManager;
            _jwtSettings = configuration.GetSection("JwtSettings");
        }

        [Authorize(Roles = "Visitor")]
        [HttpGet("Test")]  //api/Accounts/Test
        public Object Test()
        {
            //return "accounts controller";
            return new User();
        }

       
        [HttpGet("Home")]
        public String Home()   //api/Accounts/Home
        {
            return "Document Tracking System";
        }
        class SystemUser
        {
            public string Email { get; set; }
            public string FirstName { get; set; }
            public string Token { get; set; }
            public string UserId { get; set; }
        }

        [HttpPost("Register")]  // api/Accounts/Register
        public async Task<ActionResult> Register(UserRegistrationModel userModel)
        {
            var user = _mapper.Map<User>(userModel);
            var result = await _userManager.CreateAsync(user, userModel.Password);
            if (!result.Succeeded)
            {
                return Ok(result.Errors);
            }
            await _userManager.AddToRoleAsync(user, "Visitor");
            return StatusCode(201);
        }

        [HttpPost("Login")]  // api/Accounts/Login
        public async Task<IActionResult> Login(UserLoginModel userModel)
        {
            var user = await _userManager.FindByEmailAsync(userModel.Email);

            SystemUser systemUser = new SystemUser();

            systemUser.Email = user.Email;
            systemUser.FirstName = user.FirstName;
            systemUser.UserId = user.Id;

            if (user != null && await _userManager.CheckPasswordAsync(user, userModel.Password))
            {
                //JWT Athentication
                var signingCredentials = GetSigningCredentials();
                var claims = GetClaims(user);
                var tokenOptions = GenerateTokenOptions(signingCredentials, await claims);
                var token = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

                systemUser.Token = token;
                return Ok(systemUser);
            }
            return Unauthorized("Invalid Authentication");
        }

        class CurrentUser 
        {
            public string Email { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }

            public string Department { get; set; }

            public string Designation { get; set; }

        }

        [HttpGet("Current")]  // api/Accounts/Current
        public async Task<IActionResult> Current(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user != null)
            {
                CurrentUser currentUser = new CurrentUser();
                currentUser.Email = user.Email;
                currentUser.Department = user.Department;
                currentUser.FirstName = user.FirstName;
                currentUser.LastName = user.LastName;

                return Ok(currentUser);
            }
            else
            {
                return NotFound();
            }
        }

        //JWT functions
        private SigningCredentials GetSigningCredentials()
        {
            var key = Encoding.UTF8.GetBytes(_jwtSettings.GetSection("securityKey").Value);
            var secret = new SymmetricSecurityKey(key);

            return new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);
        }

        private JwtSecurityToken GenerateTokenOptions(SigningCredentials signingCredentials, List<Claim> claims)
        {
            var tokenOptions = new JwtSecurityToken(
                issuer: _jwtSettings.GetSection("validIssuer").Value,
                audience: _jwtSettings.GetSection("validAudience").Value,
                claims: claims,
                expires: DateTime.Now.AddMinutes(Convert.ToDouble(_jwtSettings.GetSection("expiryInMinutes").Value)),
                signingCredentials: signingCredentials);

            return tokenOptions;
        }

        private async Task<List<Claim>> GetClaims(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Email)
            };
            var roles = await _userManager.GetRolesAsync(user);
            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }
            return claims;
        }
    }



    
}
