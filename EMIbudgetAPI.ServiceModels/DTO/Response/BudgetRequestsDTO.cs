using EMIbudgetAPI.ServiceModels.DTO.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMIbudgetAPI.ServiceModels.DTO.Response
{
    public class BudgetRequestsDTO
    {
        public RequestDTO budgetRequest { get; set; }
        public string FirstName { get; set; }
        public long PhoneNumber { get; set; }
    }
}
