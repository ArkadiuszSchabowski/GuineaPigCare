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
        private readonly IGuineaPigService _service;

        public GuineaPigController(IGuineaPigService service)
        {
            _service = service;
        }
        [HttpGet("info")]
        public ActionResult GetInformationGuineaPig()
        {
            GuineaPigInformationDto information = _service.GetInformationGuineaPig();
            return Ok(information);
        }
        [HttpGet("bad-products")]
        public ActionResult GetBadProductsForGuineaPig()
        {
            List<ProductDto> products = _service.GetBadProductsInformation();
            return Ok(products);
        }
        [HttpGet("good-products")]
        public ActionResult GetGoodProductsForGuineaPig()
        {
            List<ProductDto> products = _service.GetGoodProductsInformation();
            return Ok(products);
        }
    }
}
