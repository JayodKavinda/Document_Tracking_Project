using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models.UserModel;

namespace WebAPI.Models.Form
{
    public class FormModel
    {

        public int FormModelId { get; set; }

        public string FormModelName { get; set; }

        public string UserId { get; set; }
        public DateTime InitDateTime { get; set; }


    }
}
