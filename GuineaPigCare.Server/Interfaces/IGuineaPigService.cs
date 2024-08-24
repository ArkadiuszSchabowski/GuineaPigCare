using GuineaPigCare.Server.Models;

namespace GuineaPigCare.Server.Interfaces
{
    public interface IGuineaPigService
    {
        List<ProductDto> GetBadProductsInformation();
        List<ProductDto> GetGoodProductsInformation();
        GuineaPigInformationDto GetInformationGuineaPig();
        void AddGuineaPigToUser(string email, GuineaPigDto dto);
        void UpdateGuineaPigWeight(string email, GuineaPigDto dto);
        GuineaPigDto GetGuineaPig(string email, string name);
        List<GuineaPigDto> GetGuineaPigs(string email);
        void RemoveGuineaPig(RemoveGuineaPigDto dto);
        void AddNewWeight(string email, GuineaPigDto dto);
        List<GuineaPigWeightsDto> GetWeights(string email, string name);
    }
}
