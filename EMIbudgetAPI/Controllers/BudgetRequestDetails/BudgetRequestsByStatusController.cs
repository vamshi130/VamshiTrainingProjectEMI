using AutoMapper;
using EMIbudgetAPI.DataModels.Repository.Interfaces;
using EMIbudgetAPI.ServiceModels.DTO.Requests;
using EMIbudgetAPI.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace EMIbudgetAPI.Controllers.BudgetRequestDetails
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BudgetRequestsByStatusController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IBudgetRequestByStatusService _budgetRequestByStatusService;
        //public mappingResponse = _mapper.Map<List<RequestDTO>>(response);

        public BudgetRequestsByStatusController(IBudgetRequestByStatusService budgetRequestByStatusService,IMapper mapper)
        {
            _budgetRequestByStatusService = budgetRequestByStatusService;
            _mapper = mapper;   
        }
        [HttpGet("{id}")]
        public ActionResult GetApprovedBudgetRequests(int id)
        {
            var response=_budgetRequestByStatusService.GetApprovedBudgetRequests(id);
            var mappingResponse = _mapper.Map<List<RequestDTO>>(response);

            return Ok(mappingResponse);
        }
        [HttpGet("{id}")]
        public ActionResult GetRejectedBudgetRequests(int id)
        {
            var response = _budgetRequestByStatusService.GetRejectedBudgetRequests(id);
            var mappingResponse = _mapper.Map<List<RequestDTO>>(response);

            return Ok(mappingResponse);
        }
        [HttpGet("{id}")]
        public ActionResult GetCompletedBudgetRequests(int id)
        {
            var response = _budgetRequestByStatusService.GetCompletedBudgetRequests(id);
            var mappingResponse = _mapper.Map<List<RequestDTO>>(response);

            return Ok(mappingResponse);
        }
        [HttpGet("{id}")]
        public ActionResult GetInitiatedBudgetRequests(int id)
        {
            var response = _budgetRequestByStatusService.GetInitiatedBudgetRequests(id);
            var mappingResponse = _mapper.Map<List<RequestDTO>>(response);
            return Ok(mappingResponse);
        }

    }
}
