namespace GuineaPigCare.Server.Models
{
    public class UserDto
    {
        public string Email { get; set; }
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string? City { get; set; }
        public string? PostalCode { get; set; }
        public DateOnly? DateOfBirth {  get; set; }
    }
}
