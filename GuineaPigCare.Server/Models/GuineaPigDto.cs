using System.ComponentModel.DataAnnotations;

namespace GuineaPigCare.Server.Models
{
    public class GuineaPigDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public int Weight { get; set; }
    }
}
