
using AutoMapper;
using EMIbudgetAPI.DataModels.Models;
using EMIbudgetAPI.ServiceModels.DTO.Requests;
using EMIbudgetAPI.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace EMIbudgetAPI.Controllers.BudgetRequestsManage
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BudgetRequestManage : ControllerBase
    {
        private readonly IBudgetRequestService _budgetRequestService;
        private readonly IMapper _mapper;

        public BudgetRequestManage(IBudgetRequestService budgetRequestService, IMapper mapper)
        {
            _budgetRequestService = budgetRequestService;
            _mapper = mapper;
        }
        [HttpGet("{id}")]
        public ActionResult GetManagerBudgetRequests(int id)
        {
            var requests=_budgetRequestService.GetManagerBudgetRequests(id);
            return Ok(requests);
        }
        [HttpGet("{id}")]
        public ActionResult GetUserBudgetRequests(int id)
        {
            var requests=_budgetRequestService.GetUserBudgetRequests(id);
            return Ok(requests);
        }
        [HttpPost]
        public ActionResult PostBudgetRequests([FromBody] RequestDTO budgetRequest)
        {
            var mapperResponse = _mapper.Map<BudgetRequest>(budgetRequest);
            var requests=_budgetRequestService.PostBudgetRequests(mapperResponse);

            return Ok(requests);
        }
        [HttpPut]
        public ActionResult PutBudgetRequests([FromBody] RequestDTO budgetRequest)
        {
            var mapperResponse = _mapper.Map<BudgetRequest>(budgetRequest);
            var requests=_budgetRequestService.PutBudgetRequests(mapperResponse);
            return Ok(requests);
        }
        [HttpDelete]
        public ActionResult DeleteBudgetRequests([FromBody] RequestDTO budgetRequest)
        {
            var mapperResponse = _mapper.Map<BudgetRequest>(budgetRequest);
            var requests=_budgetRequestService.DeleteBudgetRequest(mapperResponse);
            return Ok(requests);
        }
    }
}
