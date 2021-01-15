using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models.User;

namespace WebAPI.Controllers.Accounts
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController: ControllerBase
    {

        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
       // private readonly IConfigurationSection _jwtSettings;
        public AccountsController(IMapper mapper, UserManager<User> userManager, IConfiguration configuration)
        {
            _mapper = mapper;
            _userManager = userManager;
          //  _jwtSettings = configuration.GetSection("JwtSettings");
        }

        [Authorize(Roles = "Visitor")]
        [HttpGet("Test")]  //api/Accounts/Test
        public String Test()
        {
            return "accounts controller";
        }

        //  [EnableCors("*", "*", "*")]
        [HttpGet("Home")]
        public String Home()
        {
            return "Document Tracking System";
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

            if (user != null && await _userManager.CheckPasswordAsync(user, userModel.Password))
            {
              //JWT Athentication
            }
            return Unauthorized("Invalid Authentication");

        }



    }
}
