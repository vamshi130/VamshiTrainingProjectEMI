using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EMIbudgetAPI.DataModels.Models
{
    public class BudgetRequest
    {
        [Key]
        public long Id { get; set; }
        [Column(TypeName = "varchar(200)")]

        public string Purpose { get; set; }
        [Column(TypeName = "varchar(540)")]

        public string Description { get; set; }
        [Column(TypeName = "money")]
        public double CostEstimated { get; set; }
        [Column(TypeName = "money")]
        public double AdvanceAmmount { get; set; }
        [Column(TypeName = "Date")]
        public Nullable<System.DateTime> Date { get; set; }
        [Column(TypeName = "varchar(30)")]

        public string Status { get; set; }

        public long UserId { get; set; }
        public long ManagerId { get; set; }
        [ForeignKey("UserId")]
        public virtual Employee Employee { get; set; }
        [ForeignKey("ManagerId")]
        public virtual Employee Employees { get; set; }
        [Column(TypeName = "CreatedOn")]
        public Nullable<System.DateTime> CreatedOn { get; set; }

        public string ReportingTo { get; set; }
        public string RejectionReason { get; set; }


    }
}
