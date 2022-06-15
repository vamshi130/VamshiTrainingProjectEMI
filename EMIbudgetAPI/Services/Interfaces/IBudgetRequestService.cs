using EMIbudgetAPI.DataModels.DTO;
using EMIbudgetAPI.DataModels.Models;
using System.Collections.Generic;

namespace EMIbudgetAPI.Services.Interfaces
{
    public interface IBudgetRequestService
    {
        List<BudgetRequestDTO> GetManagerBudgetRequests(int id);
        List<BudgetRequest> GetUserBudgetRequests(int id);
        BudgetRequest PostBudgetRequests(BudgetRequest budgetRequest);
        BudgetRequest PutBudgetRequests(BudgetRequest budgetRequest);
        BudgetRequest DeleteBudgetRequest(BudgetRequest budgetRequest);
    }
}
