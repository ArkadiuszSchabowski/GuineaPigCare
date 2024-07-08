using GuineaPigCare.Server.Models;

namespace GuineaPigCare.Server.Interfaces
{
    public interface IGuineaPigService
    {
        List<ProductDto> GetBadProductsInformation();
        GuineaPigInformationDto GetInformationGuineaPig();
    }
}
