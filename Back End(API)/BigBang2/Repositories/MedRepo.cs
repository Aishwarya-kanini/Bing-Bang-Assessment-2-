using BigBang2.Interface;
using BigBang2.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BigBang2.Repoitory
{
    public class MedRepo:IMed
    {
        private readonly HospitalContext cont;

        public MedRepo(HospitalContext context)
        {
            cont = context;
        }

        public async Task<IEnumerable<Medication>> GetMedications()
        {
            return await cont.Medications.Include(x => x.Patients).ToListAsync();
        }

        public async Task<Medication> GetMedicineById(int id)
        {
            var med = await cont.Medications.FindAsync(id);
            return med;
        }

        public async Task<Medication> PostMedication(Medication med)
        {
            cont.Medications.Add(med);
            await cont.SaveChangesAsync();
            return med;
        }

        public async Task<IActionResult> DeleteMedication(int id)
        {
            var med = await cont.Medications.FindAsync(id);
            if (med == null)
                return new NotFoundResult();

            cont.Medications.Remove(med);
            await cont.SaveChangesAsync();
            return new NoContentResult();
        }
    }
}
