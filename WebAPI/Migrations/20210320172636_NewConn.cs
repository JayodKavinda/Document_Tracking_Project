using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class NewConn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "03786903-8de4-4218-9e5c-be7b99b67691");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "1a49bddf-447d-4c99-b1bd-a5f5b1afcddd");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "2b92b953-c765-457f-8da3-5ab683ef8c8a");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "f157a0eb-ca8d-4670-bde6-f1d635311b57");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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
                    { "f157a0eb-ca8d-4670-bde6-f1d635311b57", "cc93f7ec-34ab-4049-a1dc-9a049a3653e1", "Visitor", "VISITOR" },
                    { "1a49bddf-447d-4c99-b1bd-a5f5b1afcddd", "2d03b85d-18dd-4934-aadc-a01f89f418ea", "Dean", "DEAN" },
                    { "2b92b953-c765-457f-8da3-5ab683ef8c8a", "d8a3185c-5173-41c5-86ac-dedaf62e2774", "Hod", "HOD" },
                    { "03786903-8de4-4218-9e5c-be7b99b67691", "574107fb-bb25-4cb8-a656-8d546abaedfc", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
