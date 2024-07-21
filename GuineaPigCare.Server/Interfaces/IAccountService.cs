using GuineaPigCare.Server.Models;

namespace GuineaPigCare.Server.Interfaces
{
    public interface IAccountService
    {
        void ChangePassword(ChangePasswordDto dto);
        string GenerateJWT(LoginUserDto loginUserDto);
        void RegisterUser(RegisterUserDto registerUserDto);
    }
}
