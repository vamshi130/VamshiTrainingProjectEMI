using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMIbudgetAPI.DataModels.DTO
{
    public class RequestsDTO
    {
        public long Id { get; set; }
        public string Purpose { get; set; }
       

        public string Description { get; set; }
      
        public double CostEstimated { get; set; }
        
        public double AdvanceAmmount { get; set; }
       
        public Nullable<System.DateTime> Date { get; set; }
       

        public string Status { get; set; }

        public long UserId { get; set; }
        public long ManagerId { get; set; }
        
        public Nullable<System.DateTime> CreatedOn { get; set; }

        public string ReportingTo { get; set; }
        public string RejectionReason { get; set; }
    }
}
