using EMIbudgetAPI.DataModels.DTO;
using EMIbudgetAPI.DataModels.Models;
using EMIbudgetAPI.DataModels.Repository.Interfaces;
using EMIbudgetAPI.ServiceModels.DTO.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMIbudgetAPI.DataModels.Repository
{
    public class BudgetRequestByStatusForSuperiorRepo : IBudgetRequestByStatusForSeperiorRepo
    {
        
        private readonly DatabaseContext _db;
        public BudgetRequestByStatusForSuperiorRepo(DatabaseContext db)
        {
            _db = db;
        }
        public Employee getEmployees(long id)
        {
            return _db.Employees.Find(id);
        }
        public List<BudgetRequestDTO> GetApprovedBudgetRequestsSuperior(int id)
        {
            var requests = GetRequests(id, "Approved");
            return requests;
        }

        public List<BudgetRequestDTO> GetCompletedBudgetRequestsSuperior(int id)
        {
            var requests = GetRequests(id, "Completed");
            return requests;
        }

        public List<BudgetRequestDTO> GetInitiatedBudgetRequestsSuperior(int id)
        {
            var requests = GetRequests(id, "Pending");
            return requests;
        }

        public List<BudgetRequestDTO> GetRejectedBudgetRequestsSuperior(int id)
        {
            var requests = GetRequests(id, "Rejected");
            return requests; 
        }

        public List<BudgetRequestDTO> GetRequests(int id,string status)
        {
            List<BudgetRequestDTO> budgetRequestDto = new List<BudgetRequestDTO>();
            var requests = _db.budgetRequests.Where(m => m.ManagerId == id && m.Status==status).ToList();
            foreach (var request in requests)
            {
                var data = getEmployees(request.UserId);
                request.Employee = null;
                BudgetRequestDTO budgetRequestObj = new BudgetRequestDTO
                {
                    budgetRequest = request,
                    FirstName = data.FirstName,
                    PhoneNumber = data.PhoneNumber,
                };
                budgetRequestDto.Add(budgetRequestObj);
            }
            return budgetRequestDto;
        }
    }
}
