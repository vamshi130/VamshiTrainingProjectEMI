using EMIbudgetAPI.DataModels.Models;
using EMIbudgetAPI.ServiceModels.DTO.Requests;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EMIbudgetAPI.Services.Interfaces
{
    public interface IBudgetRequestByStatusService
    {
        List<BudgetRequest> GetApprovedBudgetRequests(int id);
        List<BudgetRequest> GetInitiatedBudgetRequests(int id);
        List<BudgetRequest> GetCompletedBudgetRequests(int id);
        List<BudgetRequest> GetRejectedBudgetRequests(int id);
    }
}
