using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Web_API_Empleados.Helpers;

namespace Web_API_Empleados.Modelos
{
    public class FilterEmpleado
    {
        public string Nombre  { get; set; }	 
        public string RFC  { get; set; }
        public string Estatus  { get; set; }
	}
}
