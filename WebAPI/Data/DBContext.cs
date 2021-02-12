using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models.Form;
using WebAPI.Models.UserModel;

namespace WebAPI.Data
{
    public class DBContext: DbContext
    {

        public DBContext(DbContextOptions<DBContext> options)
         : base(options)
        {
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.Entity<IdentityUserRole<string>>().HasKey(p => new { p.UserId, p.RoleId });
        }

        public DbSet<User> Users { get; set; }

        public DbSet<VehicleReservationForm> VehicleReservationForms { get; set; }

        public DbSet<RisograghForm> RisograghForm { get; set; }
    }
}
