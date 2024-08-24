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
        public ActionResult<GuineaPigDto> GetGuineaPig([FromQuery] string email, [FromQuery] string name)
        {
            var guineaPig = _guineaPigService.GetGuineaPig(email, name);
            return Ok(guineaPig);
        }
        [HttpGet("guinea-pigs")]
        public ActionResult<List<GuineaPigDto>> GetGuineaPigs([FromQuery] string email)
        {
            List<GuineaPigDto> guineaPigs = _guineaPigService.GetGuineaPigs(email);
            return Ok(guineaPigs);
        }
        [HttpGet("weights")]
        public ActionResult<List<GuineaPigWeightsDto>> GetWeights([FromQuery] string email, [FromQuery] string name)
        {
            List<GuineaPigWeightsDto> guineaPigWeights = _guineaPigService.GetWeights(email, name);
            return Ok(guineaPigWeights);
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
        [HttpPost]
        public ActionResult AddGuineaPigToUser([FromQuery] string email, [FromBody] GuineaPigDto dto)
        {
            _guineaPigService.AddGuineaPigToUser(email, dto);
            _guineaPigService.AddNewWeight(email, dto);
            return Ok(new { message = "Profil świnki morskiej został dodany!" });
        }

        [HttpPost("update-weight")]
        public ActionResult UpdateGuineaPigWeight([FromQuery] string email, [FromBody] GuineaPigDto dto)
        {
            _guineaPigService.UpdateGuineaPigWeight(email, dto);
            _guineaPigService.AddNewWeight(email, dto);
            return Ok(new { message = "Waga świnki została zaaktualizowana!" });
        }

        [HttpDelete]
        public ActionResult RemoveGuineaPig([FromQuery] RemoveGuineaPigDto dto)
        {
            _guineaPigService.RemoveGuineaPig(dto);
            return NoContent();
        }
    }
}
