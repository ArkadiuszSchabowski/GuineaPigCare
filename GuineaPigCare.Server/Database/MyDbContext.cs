using GuineaPigCare.Server.Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace GuineaPigCare.Server.Database
{
    public class MyDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
            
        }
    }
}
