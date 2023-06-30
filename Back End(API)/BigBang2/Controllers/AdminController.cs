using BigBang2.Interface;
using BigBang2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BigBang2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdmin _adminRepo;

        public AdminController(IAdmin adminRepo)
        {
            _adminRepo = adminRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Admin>>> GetAdmins()
        {
            try
            {
                var admins = await _adminRepo.GetAdmins();
                return Ok(admins);
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get admins. Error message: " + ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAdminById(int id)
        {
            try
            {
                var admin = await _adminRepo.GetAdminById(id);
                if (admin == null)
                {
                    return NotFound("Admin not found with ID " + id);
                }
                return Ok(admin);
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get admin with ID " + id + ". Error message: " + ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Admin>> PostAdmin(Admin admin)
        {
            try
            {
                var createdAdmin = await _adminRepo.PostAdmin(admin);
                return CreatedAtAction(nameof(GetAdminById), new { id = createdAdmin.AdminId }, createdAdmin);
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to create new Admin. Error message: " + ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdmin(int id)
        {
            try
            {
                var result = await _adminRepo.DeleteAdmin(id);
                if (result is NotFoundResult)
                {
                    return NotFound("Admin not found with ID " + id);
                }
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to delete admin with ID " + id + ". Error message: " + ex.Message);
            }
        }
    }
}
