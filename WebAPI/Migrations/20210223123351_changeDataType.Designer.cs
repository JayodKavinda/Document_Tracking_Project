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
    [Migration("20210223123351_changeDataType")]
    partial class changeDataType
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
                            Id = "a2f27a65-d140-4c38-afc7-8d4cc57d80ba",
                            ConcurrencyStamp = "691bcb7e-c2c7-499e-920e-359dc5f40779",
                            Name = "Visitor",
                            NormalizedName = "VISITOR"
                        },
                        new
                        {
                            Id = "9031f375-70da-4cc5-be8d-802594e906ea",
                            ConcurrencyStamp = "1532e6e5-53af-4147-8cfe-eb865ffa5468",
                            Name = "Dean",
                            NormalizedName = "DEAN"
                        },
                        new
                        {
                            Id = "d8c8b287-9e9f-4523-b37f-146145cb734b",
                            ConcurrencyStamp = "4817c27a-5261-4e14-963d-9db4b4b2a167",
                            Name = "Hod",
                            NormalizedName = "HOD"
                        },
                        new
                        {
                            Id = "a7f95727-9077-4cb5-b3bf-c77af31e13ab",
                            ConcurrencyStamp = "84fa3398-f1af-496f-b249-dd8282146cbb",
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

                    b.Property<string>("Designation")
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

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("WebAPI.Models.Form.RisograghForm", b =>
                {
                    b.HasOne("WebAPI.Models.UserModel.User", null)
                        .WithMany("RisograghForms")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("WebAPI.Models.UserModel.User", b =>
                {
                    b.Navigation("RisograghForms");
                });
#pragma warning restore 612, 618
        }
    }
}
