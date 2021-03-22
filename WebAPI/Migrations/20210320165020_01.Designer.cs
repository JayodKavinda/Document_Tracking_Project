﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAPI.Data;

namespace WebAPI.Migrations
{
    [DbContext(typeof(DBContext))]
    [Migration("20210320165020_01")]
    partial class _01
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.2");

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NormalizedName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("IdentityRole");

                    b.HasData(
                        new
                        {
                            Id = "e4e054e0-e23d-417f-8815-35a9d13976fc",
                            ConcurrencyStamp = "fce68346-e7a9-4298-a96a-3e2a363c23e6",
                            Name = "Visitor",
                            NormalizedName = "VISITOR"
                        },
                        new
                        {
                            Id = "b614a9da-e7e5-476a-8c5c-b22fbfc5c762",
                            ConcurrencyStamp = "942ffe9e-2299-4e16-97cf-36207a76fcd0",
                            Name = "Dean",
                            NormalizedName = "DEAN"
                        },
                        new
                        {
                            Id = "216b7261-b5f6-45a9-bb60-d6df7dad0468",
                            ConcurrencyStamp = "506cd7ce-58db-4fb8-943b-1a27985879be",
                            Name = "Hod",
                            NormalizedName = "HOD"
                        },
                        new
                        {
                            Id = "32430658-f301-4a37-83ab-e0cceb6f691f",
                            ConcurrencyStamp = "0923062b-91be-4882-892e-1cbb20a3c650",
                            Name = "Administrator",
                            NormalizedName = "ADMINISTRATOR"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.ToTable("IdentityUserRole<string>");
                });

            modelBuilder.Entity("WebAPI.Models.Form.RisograghForm", b =>
                {
                    b.Property<int>("RisograghFormId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("CopyTo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DocumentTitle")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DueDateTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("FinalLevelUser")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("FinalUserDateTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("FormModelId")
                        .HasColumnType("int");

                    b.Property<string>("FormModelName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FormStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("InitDateTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("NumberOfCopies")
                        .HasColumnType("int");

                    b.Property<int>("NumberOfPage")
                        .HasColumnType("int");

                    b.Property<string>("PaperProvided")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Purpose")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SizeOfCopies")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TeacherName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("RisograghFormId");

                    b.HasIndex("UserId");

                    b.ToTable("RisograghForm");
                });

            modelBuilder.Entity("WebAPI.Models.Form.VehicleReservationForm", b =>
                {
                    b.Property<int>("VehicleReservationFormId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<double>("EstimateDistance")
                        .HasColumnType("float");

                    b.Property<string>("EstimateTime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("FormModelId")
                        .HasColumnType("int");

                    b.Property<string>("FormModelName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FromRoute")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("InitDateTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("ToRoute")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("VehicleReservationFormId");

                    b.HasIndex("UserId");

                    b.ToTable("VehicleReservationForms");
                });

            modelBuilder.Entity("WebAPI.Models.UserModel.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Department")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NameTitle")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NormalizedEmail")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NormalizedUserName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserTypeNum")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("WebAPI.Models.Form.RisograghForm", b =>
                {
                    b.HasOne("WebAPI.Models.UserModel.User", null)
                        .WithMany("RisograghForms")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("WebAPI.Models.Form.VehicleReservationForm", b =>
                {
                    b.HasOne("WebAPI.Models.UserModel.User", null)
                        .WithMany("VehicleReservationForms")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("WebAPI.Models.UserModel.User", b =>
                {
                    b.Navigation("RisograghForms");

                    b.Navigation("VehicleReservationForms");
                });
#pragma warning restore 612, 618
        }
    }
}
