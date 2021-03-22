using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class _03 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "2bb948dd-4900-4b9c-8dec-39ecd55b4e2a");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "595bc326-7822-494e-a35f-67d70743f0dd");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "868c1763-2e81-4d36-84cb-7138be4c8d7f");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "e760d7d5-2541-4d59-8f20-5fdf99daad75");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "e760d7d5-2541-4d59-8f20-5fdf99daad75", "17660554-4f49-42bf-91cf-5eb1451f5964", "Visitor", "VISITOR" },
                    { "595bc326-7822-494e-a35f-67d70743f0dd", "c07e6fd1-799b-4a96-9e2b-5fac2cc617fd", "Dean", "DEAN" },
                    { "868c1763-2e81-4d36-84cb-7138be4c8d7f", "1b9a1148-98de-4371-bc15-54c88f39daae", "Hod", "HOD" },
                    { "2bb948dd-4900-4b9c-8dec-39ecd55b4e2a", "15530304-9631-4ba4-909c-68d4971226a3", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
