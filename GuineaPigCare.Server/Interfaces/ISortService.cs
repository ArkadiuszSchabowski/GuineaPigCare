using GuineaPigCare.Server.Models;

namespace GuineaPigCare.Server.Interfaces
{
    public interface ISortService
    {
        ProductResult SortByName(List<ProductDto> products, PaginationDto paginationDto);
    }
}
