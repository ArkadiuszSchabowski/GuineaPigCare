using AutoMapper;
using GuineaPigCare.Server.Database;
using GuineaPigCare.Server.Database.Entities;
using GuineaPigCare.Server.Exceptions;
using GuineaPigCare.Server.Interfaces;
using GuineaPigCare.Server.Models;
using GuineaPigCare.Server.Reposirories;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace GuineaPigCare.Server.Service
{
    public class AccountService : IAccountService
    {
        private readonly IPasswordHasher<User> _hasher;
        private readonly IMapper _mapper;
        private readonly IUserRepository _repository;
        private readonly AuthenticationSettings _authenticationSettings;

        public AccountService(IPasswordHasher<User> hasher, IMapper mapper, AuthenticationSettings authenticationSettings, IUserRepository repository)
        {
            _hasher = hasher;
            _mapper = mapper;
            _authenticationSettings = authenticationSettings;
            _repository = repository;
        }

        public void ChangePassword(ChangePasswordDto dto)
        {
            var user = _repository.GetUser(dto.Email);

            if (user == null)
            {
                throw new NotFoundException("Taki użytkownik nie istnieje!");
            }

            var result = _hasher.VerifyHashedPassword(user, user.Password, dto.CurrentPassword);

            if (result == PasswordVerificationResult.Failed)
            {
                throw new BadRequestException("Wprowadzono niepoprawne hasło!");
            }

            if (dto.NewPassword != dto.RepeatNewPassword)
            {
                throw new BadRequestException("Wprowadzone hasła nie są zgodne!");
            }

            user.Password = _hasher.HashPassword(user, dto.NewPassword);

            _repository.UpdateUser(user);
        }

        public string GenerateJWT(LoginUserDto loginUserDto)
        {
            var user = _repository.GetUser(loginUserDto.Email);

            if (user == null)
            {
                throw new BadRequestException("Błędne dane logowania");
            }

            var password = _hasher.VerifyHashedPassword(user, user.Password, loginUserDto.Password);

            if (password != PasswordVerificationResult.Success)
            {
                throw new BadRequestException("Błędne dane logowania");
            }

            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Email),
                new Claim(ClaimTypes.Role, user.RoleId.ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_authenticationSettings.JwtKey));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expiresDays = DateTime.Now.AddDays(_authenticationSettings.ExpireDays);

            var token = new JwtSecurityToken(_authenticationSettings.JwtIssuer, _authenticationSettings.JwtIssuer,
                claims,
                expires: expiresDays,
                signingCredentials: cred);

            var tokenHandler = new JwtSecurityTokenHandler();
            return tokenHandler.WriteToken(token);
        }
        public void CheckUserInDatabase(string email)
        {
            var user = _repository.GetUser(email);

            if (user != null)
            {
                throw new ConflictException("Taki użytkownik istnieje już w bazie danych");
            }
        }

        public void RegisterUser(RegisterUserDto dto)
        {
            var user = _repository.GetUser(dto.Email);

            if (user != null)
            {
                throw new ConflictException("Taki użytkownik istnieje już w bazie danych");
            }

            if (dto.Password != dto.RepeatPassword)
            {
                throw new ConflictException("Wprowadzone hasła są róźne");
            }

            var newUser = _mapper.Map<User>(dto);

            newUser.Password = _hasher.HashPassword(newUser, dto.Password);
            newUser.RoleId = 1;

            _repository.AddUser(newUser);
        }

        public void DeleteAccount(string email)
        {
            var user = _repository.GetUser(email);

            if (user != null)
            {
                _repository.RemoveUser(user);
            }
        }
    }
}
