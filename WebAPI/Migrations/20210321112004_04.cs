using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class _04 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "57bfd042-4ce6-42f9-b329-c8e72fd1e118");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "947effb3-fd25-4853-88a7-fb9ace4f854b");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "b27fe482-2407-4232-926f-354c5a6cdfa7");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "bc2959c1-e96b-48cc-800e-1fc4c01e2525");

            migrationBuilder.AddColumn<string>(
                name: "FinalLevelUser",
                table: "VehicleReservationForms",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "FinalUserDateTime",
                table: "VehicleReservationForms",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "FormStatus",
                table: "VehicleReservationForms",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "16fb1ecf-a891-468a-8bde-dca29eb2d422", "c2ebf35b-c7b1-4465-8992-5a86d68322ea", "Visitor", "VISITOR" },
                    { "c00b5cf5-ff0c-496f-b8d7-776b932cce17", "4a8d3190-5017-4833-8890-6d3c24296ad3", "Dean", "DEAN" },
                    { "02feae04-95c5-4473-9a34-f03590f3697d", "fa5df8e8-e9a3-4b7d-9049-6389f10e7d12", "Hod", "HOD" },
                    { "b8d9ba7e-7d71-4b42-8ff6-26532c378bbf", "44e0721e-8c4d-4b11-aa6f-559ff3aaeea4", "Administrator", "ADMINISTRATOR" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "02feae04-95c5-4473-9a34-f03590f3697d");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "16fb1ecf-a891-468a-8bde-dca29eb2d422");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "b8d9ba7e-7d71-4b42-8ff6-26532c378bbf");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "c00b5cf5-ff0c-496f-b8d7-776b932cce17");

            migrationBuilder.DropColumn(
                name: "FinalLevelUser",
                table: "VehicleReservationForms");

            migrationBuilder.DropColumn(
                name: "FinalUserDateTime",
                table: "VehicleReservationForms");

            migrationBuilder.DropColumn(
                name: "FormStatus",
                table: "VehicleReservationForms");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "b27fe482-2407-4232-926f-354c5a6cdfa7", "14b089d6-2dd6-4c0b-bacb-1a843bc21ab4", "Visitor", "VISITOR" },
                    { "947effb3-fd25-4853-88a7-fb9ace4f854b", "d4213565-e590-4282-8a86-adc82ac6b6de", "Dean", "DEAN" },
                    { "bc2959c1-e96b-48cc-800e-1fc4c01e2525", "171e7bf3-12e9-4aa9-bac9-5e03de52d0f0", "Hod", "HOD" },
                    { "57bfd042-4ce6-42f9-b329-c8e72fd1e118", "b439497c-e614-43fc-bd1d-a77190ae853e", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
