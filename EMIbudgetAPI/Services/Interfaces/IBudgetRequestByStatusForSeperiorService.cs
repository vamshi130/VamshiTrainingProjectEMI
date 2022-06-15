using EMIbudgetAPI.DataModels.DTO;
using EMIbudgetAPI.ServiceModels.DTO.Response;
using System.Collections.Generic;

namespace EMIbudgetAPI.Services.Interfaces
{
    public interface IBudgetRequestByStatusForSeperiorService
    {
        List<BudgetRequestDTO> GetApprovedBudgetRequestsSuperior(int id);
        List<BudgetRequestDTO> GetInitiatedBudgetRequestsSuperior(int id);
        List<BudgetRequestDTO> GetCompletedBudgetRequestsSuperior(int id);
        List<BudgetRequestDTO> GetRejectedBudgetRequestsSuperior(int id);
    }
}
