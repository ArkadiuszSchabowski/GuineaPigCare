using GuineaPigCare.Server.Database.Entities;

namespace GuineaPigCare.Server.Reposirories
{
    public interface IUserRepository
    {
        User? GetUser(string email);
        User? GetUserWithGuineaPigs(string email);
        void AddUser(User user);

        void RemoveUser(User user);
        void UpdateUser(User user);
    }
}
