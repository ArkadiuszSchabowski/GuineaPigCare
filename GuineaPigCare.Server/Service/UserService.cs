using AutoMapper;
using GuineaPigCare.Server.Database;
using GuineaPigCare.Server.Database.Entities;
using GuineaPigCare.Server.Exceptions;
using GuineaPigCare.Server.Interfaces;
using GuineaPigCare.Server.Models;
using GuineaPigCare.Server.Reposirories;

namespace GuineaPigCare.Server.Service
{
    public class UserService : IUserService
    {
        private readonly IMapper _mapper;
        private readonly IUserRepository _repository;

        public UserService(IMapper mapper, IUserRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }
        public UserDto GetCurrentUser(string email)
        {
            User? user = _repository.GetUser(email);

            if (user == null)
            {
                throw new NotFoundException("Nie znaleziono użytkownika o podanym adresie e-mail");
            }

            UserDto userDto = _mapper.Map<UserDto>(user);
            return userDto;
        }

        public void UpdateUser(UpdateUserDto dto)
        {
            User? user = _repository.GetUser(dto.Email);

            if (user == null)
            {
                throw new NotFoundException("Nie znaleziono użytkownika o podanym adresie e-mail");
            }

            user.Name = dto.Name;
            user.Surname = dto.Surname;
            user.City = dto.City;

            _repository.UpdateUser(user);
        }
    }
}
