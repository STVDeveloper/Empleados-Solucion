using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Web_API_Empleados.Helpers;

namespace Web_API_Empleados.Modelos
{
    public class Empleado
    {
        public int id { get; set; }
        public string Nombre  { get; set; }	 
        public string ApPaterno { get; set; }
        public string ApMaterno { get; set; }
        public int Edad { get; set; }
        public DateTime FecNacimiento { get; set; } 	   
        public string Genero { get; set; }		
        public string EstadoCivil  { get; set; }
        public string RFC  { get; set; }
        public string Direccion  { get; set; }
        public string Email  { get; set; }
        public string Telefono  {get; set; }
        public string Puesto { get; set; }
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime FecAlta { get; set; }	

        public DateTime? FecBaja { get; set; }
	}
}
