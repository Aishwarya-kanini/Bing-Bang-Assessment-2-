using BigBang2.Models;
using Microsoft.AspNetCore.Mvc;

namespace BigBang2.Interface
{
    public interface IMed
    {
        Task<IEnumerable<Medication>> GetMedications();
        Task<Medication> GetMedicineById(int id);
        Task<Medication> PostMedication(Medication med);
        Task<IActionResult> DeleteMedication(int id);
    }
}
