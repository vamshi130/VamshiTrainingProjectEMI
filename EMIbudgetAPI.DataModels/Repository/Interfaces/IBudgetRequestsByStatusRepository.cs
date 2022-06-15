using EMIbudgetAPI.DataModels.Models;
using EMIbudgetAPI.ServiceModels.DTO.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMIbudgetAPI.DataModels.Repository.Interfaces
{
    public interface IBudgetRequestsByStatusRepository
    {
        List<BudgetRequest> GetApprovedBudgetRequests(int id);
        List<BudgetRequest> GetInitiatedBudgetRequests(int id);
        List<BudgetRequest> GetCompletedBudgetRequests(int id);
        List<BudgetRequest> GetRejectedBudgetRequests(int id);    



    }
}
