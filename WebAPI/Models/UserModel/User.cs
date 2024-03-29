﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models.Form;

namespace WebAPI.Models.UserModel
{
    public class User: IdentityUser
    {

        public string FirstName { get; set; } 
        public string LastName { get; set; }
        public string NameTitle { get; set; }
        public string Designation { get; set; }

        public string Department { get; set; }

      public ICollection<VehicalReservationForm> VehicleReservationForms { get; set; }

        public ICollection<RisograghForm> RisograghForms  { get; set; }
    }
}
