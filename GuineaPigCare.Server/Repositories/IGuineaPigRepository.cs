using GuineaPigCare.Server.Database.Entities;

namespace GuineaPigCare.Server.Repositories
{
    public interface IGuineaPigRepository
    {
        GuineaPig? GetGuineaPig(string name, string email);
        void AddGuineaPig(GuineaPig guineaPig);
        void AddGuineaPigWeight(GuineaPigWeight guineaPigWeight);
        void RemoveGuineaPig(GuineaPig guineaPig);
        void UpdateGuineaPig(GuineaPig guineaPig);
    }
}
