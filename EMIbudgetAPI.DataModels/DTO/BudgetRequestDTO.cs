using EMIbudgetAPI.DataModels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMIbudgetAPI.DataModels.DTO
{
    public class BudgetRequestDTO
    {
        public BudgetRequest budgetRequest { get; set; }
        public string FirstName { get; set; }
        public long PhoneNumber { get; set; }

    }
}
