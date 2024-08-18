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

        [HttpPost]
        public ActionResult<UserDto> GetCurrentUserData([FromBody] EmailDto email)
        {
            UserDto userDto = _service.GetCurrentUser(email.Email);
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
