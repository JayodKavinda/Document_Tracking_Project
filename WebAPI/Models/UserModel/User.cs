using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.UserModel
{
    public class User: IdentityUser
    {

        public string FirstName { get; set; } 
        public string LastName { get; set; }
        public string NameTitle { get; set; }
        public int UserTypeNum { get; set; }

        public string Department { get; set; }
    }
}
