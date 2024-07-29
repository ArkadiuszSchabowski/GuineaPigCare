using AutoMapper;
using GuineaPigCare.Server.Database;
using GuineaPigCare.Server.Database.Entities;
using GuineaPigCare.Server.Exceptions;
using GuineaPigCare.Server.Interfaces;
using GuineaPigCare.Server.Models;

namespace GuineaPigCare.Server.Service
{
    public class UserService : IUserService
    {
        private readonly MyDbContext _context;
        private readonly IMapper _mapper;

        public UserService(MyDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public UserDto GetCurrentUser(string email)
        {
            User? user = _context.Users.FirstOrDefault(x => x.Email == email);

            if (user == null)
            {
                throw new NotFoundException("Nie znaleziono użytkownika o podanym adresie e-mail");
            }

            UserDto userDto = _mapper.Map<UserDto>(user);
            return userDto;
        }

        public void UpdateUser(UserDto dto)
        {
            User? user = _context.Users.FirstOrDefault(x => x.Email == dto.Email);

            if (user == null)
            {
                throw new NotFoundException("Nie znaleziono użytkownika o podanym adresie e-mail");
            }

            user.Name = dto.Name;
            user.Surname = dto.Surname;
            user.City = dto.City;
            user.PostalCode = dto.PostalCode;
            user.DateOfBirth = dto.DateOfBirth;

            _context.Update(user);
            _context.SaveChanges();
        }
    }
}
