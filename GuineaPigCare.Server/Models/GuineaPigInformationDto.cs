namespace GuineaPigCare.Server.Models
{
    public class GuineaPigInformationDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public List<string> Responsibilities { get; set; } = new List<string>();
        public List<string> Benefits { get; set; } = new List<string>();
        public List<string> Dangers { get; set; } = new List<string>();
    }
}
