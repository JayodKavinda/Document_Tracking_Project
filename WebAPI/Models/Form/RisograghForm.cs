using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Form
{
    public class RisograghForm : FormModel
    {

        public int RisograghFormId { get; set; }
        public string DocTitle { get; set; }
        public string TeacherName { get; set; }
        public int PageCount { get; set; }
        public int CopyCount { get; set; }
        public string Purpose { get; set; }

        public bool isProvided { get; set; }
        public string CopyTo { get; set; }
        public DateTime DueDateTime { get; set; }
    }
}
