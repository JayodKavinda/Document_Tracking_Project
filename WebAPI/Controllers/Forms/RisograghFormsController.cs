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
    public class RisograghFormsController : ControllerBase
    {
        private readonly DBContext _context;

        public RisograghFormsController(DBContext context)
        {
            _context = context;
        }

        // POST: api/RisograghForms
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<RisograghForm>> PostRisograghForm(RisograghForm risograghForm)
        {
            _context.RisograghForm.Add(risograghForm);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRisograghForm", new { id = risograghForm.RisograghFormId }, risograghForm);
        }


        // GET: api/RisograghForms -> get all forms
        /*[HttpGet]
        public async Task<ActionResult<IEnumerable<RisograghForm>>> GetRisograghForm()
        {
            return await _context.RisograghForm.ToListAsync();
        }*/
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RisograghForm>>> GetRisograghForm(string id)
        {
            return await _context.RisograghForm.Where(x=> x.UserId == id).ToListAsync();
        }

        [Authorize]
        [Route("inbox")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RisograghForm>>> GetInboxRisograghForm(string id)
        {
            return await _context.RisograghForm.Where(x => x.FinalLevelUser == id).ToListAsync();
        }

        // GET: api/RisograghForms/5 -> get spesific form with id
        [HttpGet("{id}")]
        public async Task<ActionResult<RisograghForm>> GetRisograghForm(int id)
        {
            var risograghForm = await _context.RisograghForm.FindAsync(id);

            if (risograghForm == null)
            {
                return NotFound();
            }

            return risograghForm;
        }

        // PUT: api/RisograghForms/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
     
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRisograghForm(int id, RisograghForm risograghForm)
        {
            if (id != risograghForm.RisograghFormId)
            {
                return BadRequest();
            }

            _context.Entry(risograghForm).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RisograghFormExists(id))
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

       
        // DELETE: api/RisograghForms/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<RisograghForm>> DeleteRisograghForm(int id)
        {
            var risograghForm = await _context.RisograghForm.FindAsync(id);
            if (risograghForm == null)
            {
                return NotFound();
            }

            _context.RisograghForm.Remove(risograghForm);
            await _context.SaveChangesAsync();

            return risograghForm;
        }

        private bool RisograghFormExists(int id)
        {
            return _context.RisograghForm.Any(e => e.RisograghFormId == id);
        }
    }
}
