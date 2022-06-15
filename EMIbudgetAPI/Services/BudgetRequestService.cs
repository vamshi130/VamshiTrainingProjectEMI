using EMIbudgetAPI.DataModels.DTO;
using EMIbudgetAPI.DataModels.Models;
using EMIbudgetAPI.DataModels.Repository.Interfaces;
using EMIbudgetAPI.Services.Interfaces;
using System.Collections.Generic;

namespace EMIbudgetAPI.Services
{
    public class BudgetRequestService : IBudgetRequestService
    {
        private readonly IBudgetRequestRepository _budgetRequestRepository;
        public BudgetRequestService(IBudgetRequestRepository budgetRequestRepository)
        {
            _budgetRequestRepository = budgetRequestRepository;
        }

        public BudgetRequest DeleteBudgetRequest(BudgetRequest budgetRequest)
        {
           return _budgetRequestRepository.DeleteBudgetRequest(budgetRequest);
        }

        public List<BudgetRequestDTO> GetManagerBudgetRequests(int id)
        {
            var requests=_budgetRequestRepository.GetManagerBudgetRequests(id);
            return requests; 
        }

        public List<BudgetRequest> GetUserBudgetRequests(int id)
        {
            return _budgetRequestRepository.GetUserBudgetRequests(id);
        }

        public BudgetRequest PostBudgetRequests(BudgetRequest budgetRequest)
        {
            return _budgetRequestRepository.PostBudgetRequests(budgetRequest);
        }

        public BudgetRequest PutBudgetRequests(BudgetRequest budgetRequest)
        {
           return _budgetRequestRepository.PutBudgetRequests(budgetRequest);
        }
    }
}
