using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Web_API_Empleados.Modelos
{
    public class EmpleadosContexto : DbContext
    {

        public EmpleadosContexto(DbContextOptions<EmpleadosContexto> options) : base(options)
        {
        }

        public DbSet<Empleado> Empleados { get; set; } = null!;
    }
}
