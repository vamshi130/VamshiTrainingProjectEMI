using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EMIbudgetAPI.DataModels.Migrations
{
    public partial class AddingBudgetRequestTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "budgetRequests",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Purpose = table.Column<string>(type: "varchar(200)", nullable: true),
                    Description = table.Column<string>(type: "varchar(540)", nullable: true),
                    CostEstimated = table.Column<decimal>(type: "money", nullable: false),
                    AdvanceAmmount = table.Column<decimal>(type: "money", nullable: false),
                    Date = table.Column<DateTime>(type: "Date", nullable: true),
                    Status = table.Column<string>(type: "varchar(30)", nullable: true),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    ManagerId = table.Column<long>(type: "bigint", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "Date", nullable: true),
                    ReportingTo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RejectionReason = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_budgetRequests", x => x.Id);
                    table.ForeignKey(
                        name: "FK_budgetRequests_Employees_ManagerId",
                        column: x => x.ManagerId,
                        principalTable: "Employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_budgetRequests_Employees_UserId",
                        column: x => x.UserId,
                        principalTable: "Employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_budgetRequests_ManagerId",
                table: "budgetRequests",
                column: "ManagerId");

            migrationBuilder.CreateIndex(
                name: "IX_budgetRequests_UserId",
                table: "budgetRequests",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "budgetRequests");
        }
    }
}
