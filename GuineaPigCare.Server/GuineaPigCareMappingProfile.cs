using AutoMapper;
using GuineaPigCare.Server.Database.Entities;
using GuineaPigCare.Server.Models;

namespace GuineaPigCare.Server
{
    public class GuineaPigCareMappingProfile : Profile
    {
        public GuineaPigCareMappingProfile()
        {
            CreateMap<RegisterUserDto, User>();

        }
    }
}
