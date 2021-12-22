using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Web_API_Empleados.Helpers
{
    public class DateFormatCustomConverter : JsonConverter<DateTime>
    {
        public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            DateTime returnvalue = DateTime.MinValue;
            if ( !string.IsNullOrEmpty(reader.GetString()))
                returnvalue = DateTime.Parse(reader.GetString());


            return returnvalue;
        }

        public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(value.ToLocalTime().ToString("dd/MM/yyyy"));
        }
    }
}
