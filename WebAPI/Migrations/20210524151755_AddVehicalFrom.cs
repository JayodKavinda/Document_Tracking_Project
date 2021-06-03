using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class AddVehicalFrom : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "15e979e0-04b1-4233-aa13-2ddc9be42086");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "238cd17b-aeff-46a7-a561-4312650fdd6c");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "34e9dac8-9679-4223-b565-103072b90f4b");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "f2bc9a00-8add-42c0-a807-77ccd855ea20");

            migrationBuilder.CreateTable(
                name: "VehicalReservationForms",
                columns: table => new
                {
                    VehicalReservationFormId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DueDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Department = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Purpose = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RouteFrom = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RouteTo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReturnFrom = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReturnTo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EstimateTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EstimateDistance = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Vote = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProjectNo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Officers = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FormStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FormCurrentLevel = table.Column<int>(type: "int", nullable: false),
                    Level2UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    isLevel2Approved = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Level2UserDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Level3UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsVehicalOK = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    isLevel3Approved = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Level3UserDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Level4UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    isLevel4Approved = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Level4UserDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FormModelId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    InitDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FormModelName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VehicalReservationForms", x => x.VehicalReservationFormId);
                    table.ForeignKey(
                        name: "FK_VehicalReservationForms_Users_UserId",
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
                    { "606265c8-5dc8-413a-a7fe-208caac5036d", "e649cd83-dc0f-497c-ad31-d256b9152daa", "Visitor", "VISITOR" },
                    { "0d06112c-5347-4af9-8d0e-c353aee238e2", "b723094f-68db-48df-8037-32e54ab7b858", "Dean", "DEAN" },
                    { "3d4328c7-d742-4a67-a36f-724e6d067504", "487084a2-aecd-411d-8903-d007c048cdf6", "Hod", "HOD" },
                    { "d7f0e397-66d8-40f9-b8f4-240986c2b4f4", "587e01bc-0a89-4720-96b4-98b21d41cf78", "Administrator", "ADMINISTRATOR" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_VehicalReservationForms_UserId",
                table: "VehicalReservationForms",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "VehicalReservationForms");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "0d06112c-5347-4af9-8d0e-c353aee238e2");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "3d4328c7-d742-4a67-a36f-724e6d067504");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "606265c8-5dc8-413a-a7fe-208caac5036d");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "d7f0e397-66d8-40f9-b8f4-240986c2b4f4");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "15e979e0-04b1-4233-aa13-2ddc9be42086", "5b09d3c1-b7b3-458a-b4f2-59b7f7cd4376", "Visitor", "VISITOR" },
                    { "238cd17b-aeff-46a7-a561-4312650fdd6c", "6c1764ff-5437-4ca5-8e9d-7d144ea0c860", "Dean", "DEAN" },
                    { "34e9dac8-9679-4223-b565-103072b90f4b", "cee49e26-639b-4de3-8ebe-30c86062a86e", "Hod", "HOD" },
                    { "f2bc9a00-8add-42c0-a807-77ccd855ea20", "ccc48cd1-1ae6-4511-a902-4e45952f4c84", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
