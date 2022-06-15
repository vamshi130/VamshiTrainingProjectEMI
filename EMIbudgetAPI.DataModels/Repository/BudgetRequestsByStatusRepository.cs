using EMIbudgetAPI.DataModels.Models;
using EMIbudgetAPI.DataModels.Repository.Interfaces;
using EMIbudgetAPI.ServiceModels.DTO.Requests;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMIbudgetAPI.DataModels.Repository
{
    public class BudgetRequestsByStatusRepository : IBudgetRequestsByStatusRepository
    {
        private readonly DatabaseContext _db;
        public BudgetRequestsByStatusRepository(DatabaseContext db)
        {
            _db = db;
        }

        public  List<BudgetRequest> GetApprovedBudgetRequests(int id)
        {
            var budgetRequest =  _db.budgetRequests.Where(m => m.UserId == id && m.Status == "Approved").ToList();
            return budgetRequest;
        }

        public List<BudgetRequest> GetCompletedBudgetRequests(int id)
        {
            var budgetRequest = _db.budgetRequests.Where(m => m.UserId == id && m.Status == "Completed").ToList();
            return budgetRequest;
        }

        public List<BudgetRequest> GetInitiatedBudgetRequests(int id)
        {
            var budgetRequest = _db.budgetRequests.Where(m => m.UserId == id && m.Status == "Pending").ToList();
            return budgetRequest;
        }

        public List<BudgetRequest> GetRejectedBudgetRequests(int id)
        {
            var budgetRequest = _db.budgetRequests.Where(m => m.UserId == id && m.Status == "Rejected").ToList();
            return budgetRequest;
        }
    }
}
