using Microsoft.EntityFrameworkCore;

namespace BigBang2.Models
{
    public class HospitalContext:DbContext
    {
        public DbSet<Doctor> Doctors { get; set; }

        public DbSet<Patient> Patients { get; set; }

        public DbSet<Medication> Medications { get; set; }

        public DbSet<Admin> Admins { get; set; }
        public HospitalContext(DbContextOptions<HospitalContext> options) : base(options)
        {

        }
    }
}
