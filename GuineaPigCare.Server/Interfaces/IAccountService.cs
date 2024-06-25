using GuineaPigCare.Server.Models;

namespace GuineaPigCare.Server.Interfaces
{
    public interface IAccountService
    {
        void RegisterUser(RegisterUserDto registerUserDto);
    }
}
