using EMIbudgetAPI.DataModels.DTO;
using EMIbudgetAPI.DataModels.Models;
using EMIbudgetAPI.DataModels.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace EMIbudgetAPI.DataModels.Repository
{
    public class BudgetRequestRepository : IBudgetRequestRepository
    {
        private readonly DatabaseContext _db;
        public BudgetRequestRepository(DatabaseContext db)
        {
            _db = db;
        }

        public BudgetRequest DeleteBudgetRequest(BudgetRequest budgetRequest)
        {
            var request = _db.budgetRequests.Find(budgetRequest);
            _db.budgetRequests.Remove(request);
            _db.SaveChanges();
            return request;
        }

        public Employee getEmployees(long id)
        {
            return _db.Employees.Find(id);
        }
        public List<BudgetRequestDTO> GetManagerBudgetRequests(int id)
        {
            List<BudgetRequestDTO> budgetRequestDto = new List<BudgetRequestDTO>();
            var requests=_db.budgetRequests.Where(m=>m.ManagerId==id).ToList();
            foreach(var request in requests)
            {
                var data=getEmployees(request.UserId);
                request.Employee = null;
                BudgetRequestDTO budgetRequestObj = new BudgetRequestDTO
                {
                    budgetRequest=request,
                    FirstName=data.FirstName,
                    PhoneNumber=data.PhoneNumber,
                };
                budgetRequestDto.Add(budgetRequestObj);
            }
            return budgetRequestDto;
        }

        public List<BudgetRequest> GetUserBudgetRequests(int id)
        {
            var requests=_db.budgetRequests.Where(m=>m.UserId==id).ToList();
            return requests;
        }

        public BudgetRequest PostBudgetRequests(BudgetRequest budgetRequest)
        {
           
            _db.budgetRequests.Add(budgetRequest);
            _db.SaveChanges();
            this.getEmailDetails(budgetRequest);
            return budgetRequest;
        }

        public BudgetRequest PutBudgetRequests(BudgetRequest budgetRequest)
        {

            _db.Entry<BudgetRequest>(budgetRequest).State = EntityState.Modified;
            _db.SaveChanges();
           
            return budgetRequest;
        }
        public string getEmailDetails(BudgetRequest budget)
        {
            var FromAddress=_db.Employees.Where(m=>m.Id==budget.UserId).Select(m=>m.Email).ToString();
            var ToAddress=_db.Employees.Where(m=>m.Id==budget.ManagerId).Select(m=>m.Email).ToString();
            
            return EmailNotification(FromAddress,ToAddress);
        }
        public string EmailNotification(string FromAddress, string ToAddress)
        {
            MailMessage message = new MailMessage();
            SmtpClient smtp = new SmtpClient();
            message.From = new MailAddress("vamshichowdary130@gmail.com");
            message.To.Add(new MailAddress("rvamshi.130@gmail.com"));
            message.Subject = "New Request";
            message.IsBodyHtml = false; //to make message body as html
            message.Body = "You got a new request please go and check";
            smtp.Port = 587;
            smtp.UseDefaultCredentials = true;
            smtp.Host = "smtp.gmail.com"; //for gmail host
            smtp.EnableSsl = true;
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new NetworkCredential("vamshichowdary130@gmail.com", "tgulzpuvexjckhrq");
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtp.Send(message);
            return null;
        }



    }
}
