namespace GuineaPigCare.Server.Database.Entities
{
    public class GuineaPigWeight
    {
        public int Id { get; set; }
        public int Weight { get; set; }
        public DateTime Date { get; set; }
        public int GuineaPigId { get; set; }
        public GuineaPig GuineaPig { get; set; }
    }
}
