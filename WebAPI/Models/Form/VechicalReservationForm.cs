using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Form
{
    public class VehicleReservationForm : FormModel
    {
        public int VehicleReservationFormId { get; set; }
        public string FromRoute { get; set; }
        public string ToRoute { get; set; }

        public string EstimateTime { get; set; }

        public double EstimateDistance { get; set; }
    }
}
