using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using king.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace king.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        ApplicationDbContext _context;
        public ProductsController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET api/values
        [HttpGet]
        public async Task<IEnumerable<Product>> Get()
        {
            return (await _context.Products.ToListAsync());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<Product> GetById(int id)
        {
            return await _context.Products.FirstOrDefaultAsync(x => x.Id == id);
        }

        // POST api/values
        [HttpPost]
        [ProducesResponseType(typeof(Product), 201)]
        [ProducesResponseType(typeof(string), 400)]
        public async Task<IActionResult> Post([FromBody]Product value)
        {
            value.Id = 0;
            await _context.Products.AddAsync(value);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = value.Id }, value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(string), 200)]
        [ProducesResponseType(typeof(string), 400)]
        public async Task<IActionResult> Put(int id, [FromBody]Product value)
        {
            try
            {
                var existing = await _context.Products.FirstAsync(x => x.Id == id);
                existing.ProductName = value.ProductName;
                existing.ProductDescription = value.ProductDescription;
                existing.ProductPrice = value.ProductPrice;
                existing.Available = value.Available;
                existing.UpdatedDate = DateTime.UtcNow;
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetById), new { id = id }, existing);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var entity = await _context.Products.FirstOrDefaultAsync(x => x.Id == id);
            _context.Products.Remove(entity);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
