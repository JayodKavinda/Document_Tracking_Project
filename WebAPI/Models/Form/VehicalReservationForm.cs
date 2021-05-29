using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Form
{
    public class VehicalReservationForm : FormModel
    {
        public string Applicant { get; set; }
        public int VehicalReservationFormId { get; set; }
        public DateTime DueDateTime { get; set; }
        public string Department { get; set; }
        public string Purpose { get; set; }
        public string RouteFrom { get; set; }
        public string RouteTo { get; set; }
        public string ReturnFrom { get; set; }
        public string ReturnTo { get; set; }
        public string EstimateTime { get; set; }
        public string EstimateDistance { get; set; }
        public string Vote { get; set; }
        public string ProjectNo { get; set; }
        public string Officers { get; set; }
        public string FormStatus { get; set; }
        public int FormCurrentLevel { get; set; }

        //level2 HoD
    
        public string Level2UserId { get; set; }
        public string isLevel2Approved { get; set; }
        public DateTime Level2UserDateTime { get; set; }

        //level3 AR

        public string Level3UserId { get; set; }
        public string IsVehicalOK { get; set; }
        public string isLevel3Approved { get; set; }
        public DateTime Level3UserDateTime { get; set; }

        //level4 Dean

        public string Level4UserId { get; set; }
        public string isLevel4Approved { get; set; }
        public DateTime Level4UserDateTime { get; set; }
    }
}
