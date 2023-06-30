using System.ComponentModel.DataAnnotations;

namespace BigBang2.Models
{
    public class Medication
    {
        [Key] 
        public int MedId { get; set; }

        public string? MedName { get; set;}

        public string? MedDescription { get; set;}

        public virtual ICollection<Patient>? Patients { get; set; }
    }
}
