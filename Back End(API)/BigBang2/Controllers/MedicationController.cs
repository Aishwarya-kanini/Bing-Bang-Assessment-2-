using BigBang2.Interface;
using BigBang2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BigBang2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicationController : ControllerBase
    {
        private readonly IMed _medRepo;

        public MedicationController(IMed medRepo)
        {
            _medRepo = medRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Medication>>> GetMedications()
        {
            try
            {
                var meds = await _medRepo.GetMedications();
                return Ok(meds);
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get medicines. Error message: " + ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Medication>> GetMedicineById(int id)
        {
            try
            {
                var med = await _medRepo.GetMedicineById(id);
                if (med == null)
                {
                    return NotFound("Medicine not found with ID " + id);
                }
                return Ok(med);
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get medicine with ID " + id + ". Error message: " + ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Medication>> PostMedication(Medication med)
        {
            try
            {
                var createdMed = await _medRepo.PostMedication(med);
                return CreatedAtAction(nameof(GetMedicineById), new { id = createdMed.MedId }, createdMed);
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to add new medicine. Error message: " + ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedication(int id)
        {
            try
            {
                var result = await _medRepo.DeleteMedication(id);
                if (result is NotFoundResult)
                {
                    return NotFound("Medicine not found with ID " + id);
                }
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to delete medicine with ID " + id + ". Error message: " + ex.Message);
            }
        }
    }
}
