using EMIbudgetAPI.DataModels.Models;
using EMIbudgetAPI.DataModels.Repository;
using EMIbudgetAPI.DataModels.Repository.Interfaces;
using EMIbudgetAPI.ServiceModels.DTO.Requests;
using EMIbudgetAPI.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EMIbudgetAPI.Services
{
    public class BudgetRequestByStatusService:IBudgetRequestByStatusService
    {
        private readonly IBudgetRequestsByStatusRepository _budgetRequestsByStatusRepository;
        public BudgetRequestByStatusService(IBudgetRequestsByStatusRepository budgetRequestsByStatusRepository)
        {
            _budgetRequestsByStatusRepository = budgetRequestsByStatusRepository;
        }

        public  List<BudgetRequest> GetApprovedBudgetRequests(int id)
        {
            return  _budgetRequestsByStatusRepository.GetApprovedBudgetRequests(id);
        }

        public List<BudgetRequest> GetCompletedBudgetRequests(int id)
        {
            return _budgetRequestsByStatusRepository.GetCompletedBudgetRequests(id);
        }

        public List<BudgetRequest> GetInitiatedBudgetRequests(int id)
        {
            return _budgetRequestsByStatusRepository.GetInitiatedBudgetRequests(id);
        }

        public List<BudgetRequest> GetRejectedBudgetRequests(int id)
        {
            return _budgetRequestsByStatusRepository.GetRejectedBudgetRequests(id);
        }
    }
}
