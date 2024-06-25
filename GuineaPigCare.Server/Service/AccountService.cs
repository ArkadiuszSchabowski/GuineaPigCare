using AutoMapper;
using GuineaPigCare.Server.Database;
using GuineaPigCare.Server.Database.Entities;
using GuineaPigCare.Server.Exceptions;
using GuineaPigCare.Server.Interfaces;
using GuineaPigCare.Server.Models;
using Microsoft.AspNetCore.Identity;

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

            _context.Users.Add(newUser);
            _context.SaveChanges();
        }
    }
}
