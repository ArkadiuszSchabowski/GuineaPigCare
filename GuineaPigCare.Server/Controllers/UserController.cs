using GuineaPigCare.Server.Interfaces;
using GuineaPigCare.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GuineaPigCare.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<UserDto> GetCurrentUserData([FromQuery] string email)
        {
            UserDto userDto = _service.GetCurrentUser(email);
            return Ok(userDto);
        }

        [HttpPatch("update")]
        public ActionResult UpdateUserInformation([FromBody] UpdateUserDto dto)
        {
            _service.UpdateUser(dto);
            return Ok(new { message = "Twoje dane osobiste zostały zmienione!" });
        }
    }
}
