using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web_API_Empleados.Modelos;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Web_API_Empleados.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminEmpleadosController : ControllerBase
    {

        private readonly EmpleadosContexto _context;

        public AdminEmpleadosController(EmpleadosContexto context)
        {
            _context = context;
        }

        // GET: api/<AdminEmpleadosController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Empleado>>> GetListaEmpleados()
        {
            return await _context.Empleados.ToListAsync();   
        }

        // GET api/<AdminEmpleadosController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Empleado>> GetEmpleado(int id)
        {
            Empleado item = await _context.Empleados.FindAsync(id); 

            if(item == null)
            {
                return NotFound();
            }
            return item;
        }

        // POST api/<AdminEmpleadosController>
        [HttpPost]
        public async Task<ActionResult<Empleado>> AddEmpleado([FromBody] Empleado emp)
        {
            _context.Empleados.Add(emp);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmpleado),  new { emp.id },emp);
        }

        // PUT api/<AdminEmpleadosController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmpleado(int id, [FromBody] Empleado emp)
        {
            if (id != emp.id)
            {
                return BadRequest();
            }

            Empleado itemEmp  = await _context.Empleados.FindAsync(id);

            if (itemEmp == null)
            {
                return NotFound();
            }
            itemEmp.EstadoCivil = emp.EstadoCivil;
            itemEmp.Direccion = emp.Direccion;         
            itemEmp.Email = emp.Email;
            itemEmp.Telefono = emp.Telefono;
            itemEmp.Puesto = emp.Puesto;
            itemEmp.FecBaja = emp.FecBaja==DateTime.MinValue?null: emp.FecBaja;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException exp)
            {
                return NotFound();
            }

            return NoContent();
        }

        // DELETE api/<AdminEmpleadosController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmpleado(int id)
        {
            var empDel = await _context.Empleados.FindAsync(id);
            if (empDel == null)
            {
                return NotFound();
            }

            _context.Empleados.Remove(empDel);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
