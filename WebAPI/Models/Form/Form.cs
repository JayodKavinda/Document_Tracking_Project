using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Form
{
    public class Form
    {
        public int FormId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Date { get; set; }
        public DateTime Time { get; set; }
        public string Department { get; set; }
    }
}
