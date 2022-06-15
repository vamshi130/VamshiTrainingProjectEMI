using EMIbudgetAPI.DataModels.DTO;
using EMIbudgetAPI.ServiceModels.DTO.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMIbudgetAPI.DataModels.Repository.Interfaces
{
    public interface IBudgetRequestByStatusForSeperiorRepo
    {
        List<BudgetRequestDTO> GetApprovedBudgetRequestsSuperior(int id);
        List<BudgetRequestDTO> GetInitiatedBudgetRequestsSuperior(int id);
        List<BudgetRequestDTO> GetCompletedBudgetRequestsSuperior(int id);
        List<BudgetRequestDTO> GetRejectedBudgetRequestsSuperior(int id);
    }
}
