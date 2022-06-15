using EMIbudgetAPI.DataModels.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMIbudgetAPI.DataModels.Repository.Interfaces
{
    public interface ILoginRepository
    {
        UserDTO PostLoginDetails(LoginDetailsDTO data);
    }
}
