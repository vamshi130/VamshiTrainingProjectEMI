using EMIbudgetAPI.DataModels.DTO;
using EMIbudgetAPI.DataModels.Repository.Interfaces;
using EMIbudgetAPI.ServiceModels.DTO.Response;
using EMIbudgetAPI.Services.Interfaces;
using System.Collections.Generic;

namespace EMIbudgetAPI.Services
{
    public class BudgetRequestByStatusForSeperiorService : IBudgetRequestByStatusForSeperiorService
    {
        private readonly IBudgetRequestByStatusForSeperiorRepo _budgetRequestByStatusForSeperiorRepo;
        public BudgetRequestByStatusForSeperiorService(IBudgetRequestByStatusForSeperiorRepo budgetRequestByStatusForSeperiorRepo)
        {
            _budgetRequestByStatusForSeperiorRepo = budgetRequestByStatusForSeperiorRepo;
        }
        public List<BudgetRequestDTO> GetApprovedBudgetRequestsSuperior(int id)
        {
            return _budgetRequestByStatusForSeperiorRepo.GetApprovedBudgetRequestsSuperior(id);
        }

        public List<BudgetRequestDTO> GetCompletedBudgetRequestsSuperior(int id)
        {
            return _budgetRequestByStatusForSeperiorRepo.GetCompletedBudgetRequestsSuperior(id);
        }

        public List<BudgetRequestDTO> GetInitiatedBudgetRequestsSuperior(int id)
        {
            return _budgetRequestByStatusForSeperiorRepo.GetInitiatedBudgetRequestsSuperior(id);
        }

        public List<BudgetRequestDTO> GetRejectedBudgetRequestsSuperior(int id)
        {
            return _budgetRequestByStatusForSeperiorRepo.GetRejectedBudgetRequestsSuperior(id);
        }
    }
}
