using GuineaPigCare.Server.Models;

namespace GuineaPigCare.Server.Interfaces
{
    public interface IGuineaPigService
    {
        List<ProductDto> GetBadProductsInformation();
        List<ProductDto> GetGoodProductsInformation();
        GuineaPigInformationDto GetInformationGuineaPig();
        void AddGuineaPigToUser(string email, GuineaPigDto dto);
        void UpdateGuineaPigWeight(int id, string email, int weight);
        GuineaPigDto GetGuineaPig(int id, string email);
        void RemoveGuineaPig(int id, string email);
    }
}
