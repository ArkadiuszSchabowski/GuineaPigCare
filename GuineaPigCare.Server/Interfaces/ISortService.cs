using GuineaPigCare.Server.Models;

namespace GuineaPigCare.Server.Interfaces
{
    public interface ISortService
    {
        List<ProductDto> SortByName(List<ProductDto> products, PaginationDto paginationDto);
    }
}
