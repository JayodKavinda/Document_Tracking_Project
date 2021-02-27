using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.Form
{
    public class RisograghForm : FormModel
    {
        //level one properitis
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

        //level 2 properties (final level)

        public string FinalLevelUser { get; set; }  //userId
        public string FormStatus { get; set; }
        public DateTime FinalUserDateTime { get; set; }  //final approve OR rejected date time


    } 
}
