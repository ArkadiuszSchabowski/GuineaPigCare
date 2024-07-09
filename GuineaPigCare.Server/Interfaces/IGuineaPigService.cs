using GuineaPigCare.Server.Models;

namespace GuineaPigCare.Server.Interfaces
{
    public interface IGuineaPigService
    {
        List<ProductDto> GetBadProductsInformation();
        List<ProductDto> GetGoodProductsInformation();
        GuineaPigInformationDto GetInformationGuineaPig();
    }
}
