using EMIbudgetAPI.DataModels.DTO;

namespace EMIbudgetAPI.Services.Interfaces
{
    public interface ILoginDetailsService
    {
        UserDTO PostLoginDetails(LoginDetailsDTO data);
    }
}
