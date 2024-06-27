using AutoMapper;
using GuineaPigCare.Server.Database;
using GuineaPigCare.Server.Database.Entities;
using GuineaPigCare.Server.Exceptions;
using GuineaPigCare.Server.Interfaces;
using GuineaPigCare.Server.Models;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace GuineaPigCare.Server.Service
{
    public class AccountService : IAccountService
    {
        private readonly MyDbContext _context;
        private readonly IPasswordHasher<User> _hasher;
        private readonly IMapper _mapper;

        public AccountService(MyDbContext context, IPasswordHasher<User> hasher, IMapper mapper)
        {
            _context = context;
            _hasher = hasher;
            _mapper = mapper;
        }

        public string GenerateJWT(LoginUserDto loginUserDto)
        {
            var user = _context.Users.FirstOrDefault(x => x.Email == loginUserDto.Email);

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
                new Claim(ClaimTypes.Name, loginUserDto.Email),
            };

            return "1";
        }

        public void RegisterUser(RegisterUserDto dto)
        {
            var user = _context.Users.FirstOrDefault(x => x.Email == dto.Email);

            if(user != null)
            {
                throw new ConflictException("Taki użytkownik istnieje już w bazie danych");
            }

            if(dto.Password != dto.RepeatPassword)
            {
                throw new ConflictException("Wprowadzone hasła są róźne");
            }

            var newUser = _mapper.Map<User>(dto);

            newUser.Password = _hasher.HashPassword(newUser, dto.Password);
            newUser.RoleId = 1;

            _context.Users.Add(newUser);
            _context.SaveChanges();
        }
    }
}
