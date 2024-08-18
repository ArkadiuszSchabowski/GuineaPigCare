namespace GuineaPigCare.Server.Models
{
    public class UpdateUserDto
    {
        public string Email { get; set; }
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string? City { get; set; }
    }
}
