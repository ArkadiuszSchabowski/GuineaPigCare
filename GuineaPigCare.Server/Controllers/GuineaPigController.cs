using GuineaPigCare.Server.Interfaces;
using GuineaPigCare.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GuineaPigCare.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GuineaPigController : ControllerBase
    {
        private readonly IGuineaPigService _guineaPigService;
        private readonly ISortService _sortService;

        public GuineaPigController(IGuineaPigService service, ISortService sortService)
        {
            _guineaPigService = service;
            _sortService = sortService;
        }
        [HttpGet("info")]
        public ActionResult GetInformationGuineaPig()
        {
            GuineaPigInformationDto information = _guineaPigService.GetInformationGuineaPig();
            return Ok(information);
        }
        [HttpGet("bad-products")]
        public ActionResult GetBadProductsForGuineaPig([FromQuery] PaginationDto paginationDto)
        {
            List<ProductDto> products = _guineaPigService.GetBadProductsInformation();
            ProductResult sortProducts = _sortService.SortByName(products, paginationDto);
            return Ok(sortProducts);
        }
        [HttpGet("good-products")]
        public ActionResult GetGoodProductsForGuineaPig([FromQuery] PaginationDto paginationDto)
        {
            List<ProductDto> products = _guineaPigService.GetGoodProductsInformation();
            ProductResult sortProducts = _sortService.SortByName(products, paginationDto);
            return Ok(sortProducts);
        }
    }
}
