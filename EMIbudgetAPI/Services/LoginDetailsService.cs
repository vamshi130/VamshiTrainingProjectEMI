using EMIbudgetAPI.DataModels.DTO;
using EMIbudgetAPI.DataModels.Repository.Interfaces;
using EMIbudgetAPI.Services.Interfaces;

namespace EMIbudgetAPI.Services
{
    public class LoginDetailsService : ILoginDetailsService
    {
        private readonly ILoginRepository _loginRepository;
        public LoginDetailsService(ILoginRepository loginRepository)
        {
            _loginRepository = loginRepository;
        }
        public UserDTO PostLoginDetails(LoginDetailsDTO data)
        {
            return _loginRepository.PostLoginDetails(data);
        }
    }
}
