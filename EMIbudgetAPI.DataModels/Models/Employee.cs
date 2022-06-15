using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMIbudgetAPI.DataModels.Models
{
    public class Employee
    {
       
            [Key]
            public long Id { get; set; }
            [Column(TypeName = "varchar(40)")]

            [Required]
            public string FirstName { get; set; }
            [Column(TypeName = "varchar(40)")]

            public string LastName { get; set; }
            [Column(TypeName = "varchar(30)")]
            [Required]
            public string UserName { get; set; }
            [Column(TypeName = "varchar(30)")]
            [Required]
            public string Password { get; set; } = null!;
            [Column(TypeName = "bigint")]
            public long PhoneNumber { get; set; }
            [Required]
            [Column(TypeName = "varchar(50)")]
            public string Email { get; set; }
            [Column(TypeName = "varchar(20)")]
            public string Role { get; set; }
            public long RoleId { get; set; }

            [ForeignKey("RoleId")]
            public virtual Employee Employees { get; set; }

        
    }
}
