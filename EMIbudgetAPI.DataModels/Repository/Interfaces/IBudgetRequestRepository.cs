using EMIbudgetAPI.DataModels.DTO;
using EMIbudgetAPI.DataModels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMIbudgetAPI.DataModels.Repository.Interfaces
{
    public interface IBudgetRequestRepository
    {
        List<BudgetRequestDTO> GetManagerBudgetRequests(int id);
        List<BudgetRequest> GetUserBudgetRequests(int id);
        BudgetRequest PostBudgetRequests(BudgetRequest budgetRequest);
        BudgetRequest PutBudgetRequests(BudgetRequest budgetRequest);
        BudgetRequest DeleteBudgetRequest(BudgetRequest budgetRequest);
    }
}
