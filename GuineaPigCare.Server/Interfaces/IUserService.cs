using GuineaPigCare.Server.Models;

namespace GuineaPigCare.Server.Interfaces
{
    public interface IUserService
    {
        UserDto GetCurrentUser(string email);
        void UpdateUser(UpdateUserDto dto);
    }
}
