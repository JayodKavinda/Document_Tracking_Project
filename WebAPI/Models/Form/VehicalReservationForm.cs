using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Form
{
    public class VehicalReservationForm:Form
    {
        public int Id { get; set; }
        public string VehicalType { get; set; }
        public string VehicalName { get; set; }
        public string StartAt { get; set; }
        public string Destination { get; set; }
        public int EstimatedDistance { get; set; }
    }
}
