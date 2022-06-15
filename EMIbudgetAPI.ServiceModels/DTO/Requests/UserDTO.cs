using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMIbudgetAPI.ServiceModels.DTO.Requests
{
    public class UserDTO
    {
        public long UserId { get; set; }
        public string Manager { get; set; }
        public long RoleId { get; set; }
        public string Role { get; set; }
        public string UserName { get; set; }
        public long ManagerReportingTo { get; set; }
        public string ManagerReportingName { get; set; }
    }
}
