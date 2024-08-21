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
        [HttpGet]
        public ActionResult<GuineaPigDto> GetGuineaPig([FromQuery] string email, [FromBody] string name)
        {
            var guineaPig = _guineaPigService.GetGuineaPig(email, name);
            return Ok(guineaPig);
        }
        [HttpGet("guinea-pigs")]
        public ActionResult<List<GuineaPigDto>> GetGuineaPigs(string email)
        {
            List<GuineaPigDto> guineaPigs = _guineaPigService.GetGuineaPigs(email);
            return Ok(guineaPigs);
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
        [HttpPost("add")]
        public ActionResult AddGuineaPigToUser([FromQuery] string email, [FromBody] GuineaPigDto dto)
        {
            _guineaPigService.AddGuineaPigToUser(email, dto);
            return Ok();
        }
        [HttpPatch("update-weight")]
        public ActionResult UpdateGuineaPigWeight([FromRoute] int id, [FromQuery] string email, [FromBody] int weight)
        {
            _guineaPigService.UpdateGuineaPigWeight(id, email, weight);
            return Ok();
        }

        [HttpDelete("{name}")]
        public ActionResult RemoveGuineaPig([FromQuery] string email, [FromRoute] string name)
        {
            _guineaPigService.RemoveGuineaPig(email, name);
            return NoContent();
        }
    }
}
