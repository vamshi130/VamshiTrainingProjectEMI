﻿// <auto-generated />
using System;
using EMIbudgetAPI.DataModels.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EMIbudgetAPI.DataModels.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.17")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("EMIbudgetAPI.DataModels.Models.BudgetRequest", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("AdvanceAmmount")
                        .HasColumnType("money");

                    b.Property<decimal>("CostEstimated")
                        .HasColumnType("money");

                    b.Property<DateTime?>("CreatedOn")
                        .HasColumnType("CreatedOn");

                    b.Property<DateTime?>("Date")
                        .HasColumnType("Date");

                    b.Property<string>("Description")
                        .HasColumnType("varchar(540)");

                    b.Property<long>("ManagerId")
                        .HasColumnType("bigint");

                    b.Property<string>("Purpose")
                        .HasColumnType("varchar(200)");

                    b.Property<string>("RejectionReason")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ReportingTo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("varchar(30)");

                    b.Property<long>("UserId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("ManagerId");

                    b.HasIndex("UserId");

                    b.ToTable("budgetRequests");
                });

            modelBuilder.Entity("EMIbudgetAPI.DataModels.Models.Employee", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("varchar(40)");

                    b.Property<string>("LastName")
                        .HasColumnType("varchar(40)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("varchar(30)");

                    b.Property<long>("PhoneNumber")
                        .HasColumnType("bigint");

                    b.Property<string>("Role")
                        .HasColumnType("varchar(20)");

                    b.Property<long>("RoleId")
                        .HasColumnType("bigint");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("varchar(30)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("EMIbudgetAPI.DataModels.Models.BudgetRequest", b =>
                {
                    b.HasOne("EMIbudgetAPI.DataModels.Models.Employee", "Employees")
                        .WithMany()
                        .HasForeignKey("ManagerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("EMIbudgetAPI.DataModels.Models.Employee", "Employee")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Employee");

                    b.Navigation("Employees");
                });

            modelBuilder.Entity("EMIbudgetAPI.DataModels.Models.Employee", b =>
                {
                    b.HasOne("EMIbudgetAPI.DataModels.Models.Employee", "Employees")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Employees");
                });
#pragma warning restore 612, 618
        }
    }
}
