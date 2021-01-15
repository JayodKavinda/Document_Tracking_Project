using AutoMapper;
using WebAPI.Models.User;

namespace WebAPI
{
    internal class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<UserRegistrationModel, User>()
               .ForMember(u => u.UserName, opt => opt.MapFrom(x => x.Email));
        }
    }
}
