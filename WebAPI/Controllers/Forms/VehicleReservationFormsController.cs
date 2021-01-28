using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models.Form;

namespace WebAPI.Controllers.Forms
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleReservationFormsController : ControllerBase
    {
        private readonly DBContext _context;

        public VehicleReservationFormsController(DBContext context)
        {
            _context = context;
        }

        // POST: api/VehicleReservationForms
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<VehicleReservationForm>> PostVehicleReservationForm(VehicleReservationForm vehicleReservationForm)
        {
            _context.VehicleReservationForms.Add(vehicleReservationForm);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVehicleReservationForm", new { id = vehicleReservationForm.VehicleReservationFormId }, vehicleReservationForm);
        }

        // GET: api/VehicleReservationForms
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VehicleReservationForm>>> GetVehicleReservationForms()
        {
            return await _context.VehicleReservationForms.ToListAsync();
        }

        // GET: api/VehicleReservationForms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VehicleReservationForm>> GetVehicleReservationForm(int id)
        {
            var vehicleReservationForm = await _context.VehicleReservationForms.FindAsync(id);

            if (vehicleReservationForm == null)
            {
                return NotFound();
            }

            return vehicleReservationForm;
        }

        // PUT: api/VehicleReservationForms/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVehicleReservationForm(int id, VehicleReservationForm vehicleReservationForm)
        {
            if (id != vehicleReservationForm.VehicleReservationFormId)
            {
                return BadRequest();
            }

            _context.Entry(vehicleReservationForm).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicleReservationFormExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        

        // DELETE: api/VehicleReservationForms/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<VehicleReservationForm>> DeleteVehicleReservationForm(int id)
        {
            var vehicleReservationForm = await _context.VehicleReservationForms.FindAsync(id);
            if (vehicleReservationForm == null)
            {
                return NotFound();
            }

            _context.VehicleReservationForms.Remove(vehicleReservationForm);
            await _context.SaveChangesAsync();

            return vehicleReservationForm;
        }

        private bool VehicleReservationFormExists(int id)
        {
            return _context.VehicleReservationForms.Any(e => e.VehicleReservationFormId == id);
        }
    }
}
