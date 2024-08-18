using AutoMapper;
using GuineaPigCare.Server.Interfaces;
using GuineaPigCare.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace GuineaPigCare.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService, IMapper mapper)
        {
            _accountService = accountService;
        }
        [HttpGet("check-email")]
        public ActionResult CheckUserInDatabase([FromQuery] string email)
        {
            _accountService.CheckUserInDatabase(email);
            return Ok(new { message = email });
        }
        [HttpPost("register")]
        public ActionResult Register([FromBody] RegisterUserDto registerUserDto)
        {
            _accountService.RegisterUser(registerUserDto);

            return Ok(new { message = "Pomyślnie zarejestrowano użytkownika." });
        }

        [HttpPost("login")]
        public ActionResult Login([FromBody] LoginUserDto loginUserDto)
        {
            string token = _accountService.GenerateJWT(loginUserDto);

            return Ok(new {message = token});
        }
        [HttpPost("change-password")]
        public ActionResult ChangePassword([FromBody] ChangePasswordDto dto)
        {
            _accountService.ChangePassword(dto);
            return Ok(new {message ="Twoje hasło zostało zmienione"});
        }
        [HttpDelete("remove-account")]
        public ActionResult DeleteAccount([FromQuery] string email) {

            _accountService.DeleteAccount(email);
            return Ok();
        }
    }
}
