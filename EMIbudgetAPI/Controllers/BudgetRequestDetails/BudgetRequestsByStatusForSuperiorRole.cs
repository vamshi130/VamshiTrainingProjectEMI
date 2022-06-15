using AutoMapper;
using EMIbudgetAPI.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EMIbudgetAPI.Controllers.BudgetRequestDetails
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BudgetRequestsByStatusForSuperiorRole : ControllerBase
    {
        private readonly IMapper _mapper;

        private readonly IBudgetRequestByStatusForSeperiorService _budgetRequestByStatusForSeperiorService;
        public BudgetRequestsByStatusForSuperiorRole(IBudgetRequestByStatusForSeperiorService budgetRequestByStatusForSeperiorService, IMapper mapper)
        {
            _budgetRequestByStatusForSeperiorService = budgetRequestByStatusForSeperiorService;
            _mapper = mapper;
        }
        [HttpGet("{id}")]
        public ActionResult GetApprovedBudgetRequests(int id)
        {

            var response = _budgetRequestByStatusForSeperiorService.GetApprovedBudgetRequestsSuperior(id);
            
            return Ok(response);
        }
        [HttpGet("{id}")]
        public ActionResult GetRejectedBudgetRequests(int id)
        {
            var response = _budgetRequestByStatusForSeperiorService.GetRejectedBudgetRequestsSuperior(id);
            return Ok(response);
        }
        [HttpGet("{id}")]
        public ActionResult GetCompletedBudgetRequests(int id)
        {
            var response = _budgetRequestByStatusForSeperiorService.GetCompletedBudgetRequestsSuperior(id);
            return Ok(response);
        }
        [HttpGet("{id}")]
        public ActionResult GetInitiatedBudgetRequests(int id)
        {
            var response = _budgetRequestByStatusForSeperiorService.GetInitiatedBudgetRequestsSuperior(id);
            return Ok(response);
        }

    }
}
