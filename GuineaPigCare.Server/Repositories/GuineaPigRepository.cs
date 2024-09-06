using GuineaPigCare.Server.Database;
using GuineaPigCare.Server.Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace GuineaPigCare.Server.Repositories
{
    public class GuineaPigRepository : IGuineaPigRepository
    {
        private readonly MyDbContext _context;

        public GuineaPigRepository(MyDbContext context)
        {
            _context = context;
        }
        public GuineaPig? GetGuineaPig(string name, string email)
        {
            var guineaPig = _context.GuineaPigs
            .Include(w => w.GuineaPigWeights)
            .FirstOrDefault(x => x.Name == name && x.User.Email == email);

            return guineaPig;
        }
        public void AddGuineaPig(GuineaPig guineaPig)
        {
            _context.GuineaPigs.Add(guineaPig);
            _context.SaveChanges();
        }
        public void AddGuineaPigWeight(GuineaPigWeight guineaPigWeight)
        {
            _context.GuineaPigWeights.Add(guineaPigWeight);
            _context.SaveChanges();
        }

        public void RemoveGuineaPig(GuineaPig guineaPig)
        {
            _context.GuineaPigs.Remove(guineaPig);
            _context.SaveChanges();
        }

        public void UpdateGuineaPig(GuineaPig guineaPig)
        {
            _context.GuineaPigs.Update(guineaPig);
            _context.SaveChanges();
        }
    }
}
