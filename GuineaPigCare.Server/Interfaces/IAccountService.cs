using GuineaPigCare.Server.Models;

namespace GuineaPigCare.Server.Interfaces
{
    public interface IAccountService
    {
        string GenerateJWT(LoginUserDto loginUserDto);
        void RegisterUser(RegisterUserDto registerUserDto);
    }
}
