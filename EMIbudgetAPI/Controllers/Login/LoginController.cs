using EMIbudgetAPI.DataModels.DTO;
using EMIbudgetAPI.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EMIbudgetAPI.Controllers.Login
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginDetailsService _loginDetailsService;
        public LoginController(ILoginDetailsService loginDetailsService)
        {
            _loginDetailsService = loginDetailsService;
        }
        [HttpPost]
        public ActionResult PostLoginDetails([FromBody] LoginDetailsDTO data)
        {
            var response=_loginDetailsService.PostLoginDetails(data);
            return Ok(response);

        }
    }
}
