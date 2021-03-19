using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Form
{
    public class RisograghForm : FormModel
    {

        public int RisograghFormId { get; set; }
        public string DocumentTitle { get; set; }
        public string TeacherName { get; set; }
        public int NumberOfPage { get; set; }
        public int NumberOfCopies { get; set; }

        public string SizeOfCopies { get; set; }
        public string Purpose { get; set; }

        public string PaperProvided { get; set; }
        public string CopyTo { get; set; }
        public DateTime DueDateTime { get; set; }

        //Next level uuser
        public string FinalLevelUser { get; set; }
        public string FormStatus { get; set; }
        public DateTime FinalUserDateTime { get; set; }

    }
}
