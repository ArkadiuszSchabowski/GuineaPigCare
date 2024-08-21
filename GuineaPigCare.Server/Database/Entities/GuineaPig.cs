namespace GuineaPigCare.Server.Database.Entities
{
    public class GuineaPig
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Weight { get; set; }
        public virtual User User { get; set; }
        public int UserId { get; set; }
    }
}
