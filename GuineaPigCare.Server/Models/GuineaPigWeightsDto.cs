namespace GuineaPigCare.Server.Models
{
    public class GuineaPigWeightsDto
    {
        public int Weight { get; set; }
        public string Date { get; set; }

        public void SetFormattedDate(DateTime originalDate)
        {
            this.Date = originalDate.ToString("yyyy-MM-dd");
        }
    }
}
