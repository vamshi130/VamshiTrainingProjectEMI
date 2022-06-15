using EMIbudgetAPI.DataModels.DTO;
using EMIbudgetAPI.DataModels.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMIbudgetAPI.DataModels.Repository.Interfaces
{
    public class LoginDetailsRepository : ILoginRepository
    {
        private readonly DatabaseContext _db;
        public LoginDetailsRepository(DatabaseContext db)
        {
            _db = db;
        }

        public UserDTO PostLoginDetails(LoginDetailsDTO data)
        {
            var Employee = _db.Employees.Include(c => c.Employees).Include(a => a.Employees.Employees)
                            .Where(m => m.UserName == data.UserName && m.Password == data.Password).FirstOrDefault();
            if (Employee == null)
            {
                return null;
            }
            if (Employee.Role == "User" || Employee.Role == "Manager" || Employee.Role == "SuperManager")
            {
                var user = new UserDTO
                {
                    Role = Employee.Role,
                    RoleId = Employee.RoleId,
                    Manager = Employee.Employees.FirstName,
                    UserId = Employee.Id,
                    UserName = Employee.FirstName,
                    ManagerReportingTo = Employee.Employees.RoleId,
                    ManagerReportingName = Employee.Employees.Employees.FirstName

                };

                return user;
            }
            return null;
        }
    }
}
