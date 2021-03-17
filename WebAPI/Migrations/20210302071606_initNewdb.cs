using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class initNewdb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "IdentityRole",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IdentityRole", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "IdentityUserRole<string>",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IdentityUserRole<string>", x => new { x.UserId, x.RoleId });
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NameTitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserTypeNum = table.Column<int>(type: "int", nullable: false),
                    Department = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RisograghForm",
                columns: table => new
                {
                    RisograghFormId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DocumentTitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TeacherName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumberOfPage = table.Column<int>(type: "int", nullable: false),
                    NumberOfCopies = table.Column<int>(type: "int", nullable: false),
                    SizeOfCopies = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Purpose = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PaperProvided = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CopyTo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DueDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FinalLevelUser = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FormStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FinalUserDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FormModelId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    InitDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FormModelName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RisograghForm", x => x.RisograghFormId);
                    table.ForeignKey(
                        name: "FK_RisograghForm_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "97a5f1ce-5ee2-4b58-802b-b70f4165c9a5", "5bf6109f-41b0-46b8-b5d4-c728f53bcf8d", "Visitor", "VISITOR" },
                    { "9212d597-e2b1-49a5-b14c-c2a3bdec5429", "1bee5a99-aa0b-460e-8f8b-6a05896123e7", "Dean", "DEAN" },
                    { "a0a701ad-cb14-41c0-907f-b8867e3eadd4", "1cc3451f-234b-4e6a-81d9-d306e27a5612", "Hod", "HOD" },
                    { "408550ae-c657-47c4-98d2-96c2da49fb4f", "1f8986cb-18df-4c8b-bf33-d5bad3bc1f0e", "Administrator", "ADMINISTRATOR" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_RisograghForm_UserId",
                table: "RisograghForm",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "IdentityRole");

            migrationBuilder.DropTable(
                name: "IdentityUserRole<string>");

            migrationBuilder.DropTable(
                name: "RisograghForm");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
