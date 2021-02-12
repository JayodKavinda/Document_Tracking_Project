using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class AddRisogrphForm : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "794d1c1e-924a-4359-a7b5-0fe90419a593");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "877a8ecd-862d-4835-ab23-98ab5cd573d6");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "adc4abbf-b5cb-48d8-8c48-038996bb10bd");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "c402a0bc-24ef-4886-bda5-5ac7209e5245");

            migrationBuilder.CreateTable(
                name: "RisograghForm",
                columns: table => new
                {
                    RisograghFormId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DocTitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TeacherName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PageCount = table.Column<int>(type: "int", nullable: false),
                    CopyCount = table.Column<int>(type: "int", nullable: false),
                    Purpose = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    isProvided = table.Column<bool>(type: "bit", nullable: false),
                    CopyTo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DueDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FormModelId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    DateTime = table.Column<DateTime>(type: "datetime2", nullable: false)
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
                    { "7a0521ba-5b14-4adc-b985-abaefc52536f", "611c4b85-42f6-486f-b666-9cc3a37d2ec5", "Visitor", "VISITOR" },
                    { "bbb5ae01-96b4-4cb4-8387-cc51aeb2a5d6", "ac7f5305-1528-4a89-a314-5aa22ad6bfea", "Dean", "DEAN" },
                    { "0ad24672-f6a2-4adf-a88c-336564f160c8", "39dcb269-ab15-4bd8-a14f-2af70f612668", "Hod", "HOD" },
                    { "e44c53e1-65e6-4f4f-9d4c-c4357be5e3d8", "0faf9bd5-a837-46a6-b0a0-f954aa41a345", "Administrator", "ADMINISTRATOR" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_RisograghForm_UserId",
                table: "RisograghForm",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RisograghForm");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "0ad24672-f6a2-4adf-a88c-336564f160c8");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "7a0521ba-5b14-4adc-b985-abaefc52536f");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "bbb5ae01-96b4-4cb4-8387-cc51aeb2a5d6");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "e44c53e1-65e6-4f4f-9d4c-c4357be5e3d8");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "877a8ecd-862d-4835-ab23-98ab5cd573d6", "294d6573-ae1c-467b-af7d-867c850cd3b6", "Visitor", "VISITOR" },
                    { "adc4abbf-b5cb-48d8-8c48-038996bb10bd", "1926f964-c716-44c4-8fed-b7fb58866006", "Dean", "DEAN" },
                    { "c402a0bc-24ef-4886-bda5-5ac7209e5245", "dc6584f7-3253-437a-9d7a-8f56e28f11bf", "Hod", "HOD" },
                    { "794d1c1e-924a-4359-a7b5-0fe90419a593", "84f81545-f8bc-4280-8159-7d57102b2f3c", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
