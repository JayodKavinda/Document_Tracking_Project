using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models.Form;

namespace WebAPI.Controllers.Forms
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicalReservationFormsController : ControllerBase
    {
        private readonly DBContext _context;

        public VehicalReservationFormsController(DBContext context)
        {
            _context = context;
        }

        // POST: api/VehicalReservationForms
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<VehicalReservationForm>> PostVehicalReservationForm(VehicalReservationForm vehicalReservationForm)
        {
            _context.VehicalReservationForms.Add(vehicalReservationForm);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVehicalReservationForm", new { id = vehicalReservationForm.VehicalReservationFormId }, vehicalReservationForm);
        }

        // GET: api/VehicalReservationForms
        /*[HttpGet]
        public async Task<ActionResult<IEnumerable<VehicalReservationForm>>> GetVehicalReservationForms()
        {
            return await _context.VehicalReservationForms.ToListAsync();
        }*/
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VehicalReservationForm>>> GetVehicalReservationForms(string id)
        {
            return await _context.VehicalReservationForms.Where(x => x.UserId == id).ToListAsync();
        }

        [Authorize]
        [Route("inbox")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VehicalReservationForm>>> GetInboxRisograghForm(string id)
        {
            return await _context.VehicalReservationForms.Where(x => x.Level2UserId == id || x.Level3UserId == id || x.Level4UserId == id).ToListAsync();
        }



        // GET: api/VehicalReservationForms/5
        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<VehicalReservationForm>> GetVehicalReservationForm(int id)
        {
            var vehicalReservationForm = await _context.VehicalReservationForms.FindAsync(id);

            if (vehicalReservationForm == null)
            {
                return NotFound();
            }

            return vehicalReservationForm;
        }

        // PUT: api/VehicalReservationForms/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVehicalReservationForm(int id, VehicalReservationForm vehicalReservationForm)
        {
            if (id != vehicalReservationForm.VehicalReservationFormId)
            {
                return BadRequest();
            }

            _context.Entry(vehicalReservationForm).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicalReservationFormExists(id))
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



        // DELETE: api/VehicalReservationForms/5
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<ActionResult<VehicalReservationForm>> DeleteVehicalReservationForm(int id)
        {
            var vehicalReservationForm = await _context.VehicalReservationForms.FindAsync(id);
            if (vehicalReservationForm == null)
            {
                return NotFound();
            }

            _context.VehicalReservationForms.Remove(vehicalReservationForm);
            await _context.SaveChangesAsync();

            return vehicalReservationForm;
        }

        private bool VehicalReservationFormExists(int id)
        {
            return _context.VehicalReservationForms.Any(e => e.VehicalReservationFormId == id);
        }
    }
}
