using AutoMapper;
using EMIbudgetAPI.DataModels.Models;
using EMIbudgetAPI.ServiceModels.DTO.Requests;
using EMIbudgetAPI.ServiceModels.DTO.Response;

namespace EMIbudgetAPI.AutoMapper
{
    public class ProfileMapper:Profile
    {
        public ProfileMapper()
        {
            CreateMap<RequestDTO, BudgetRequest>().ReverseMap();
            //CreateMap<BudgetRequestsDTO,>
        }

    }
}
