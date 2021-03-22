using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class _02 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "216b7261-b5f6-45a9-bb60-d6df7dad0468");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "32430658-f301-4a37-83ab-e0cceb6f691f");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "b614a9da-e7e5-476a-8c5c-b22fbfc5c762");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "e4e054e0-e23d-417f-8815-35a9d13976fc");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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
                    { "e4e054e0-e23d-417f-8815-35a9d13976fc", "fce68346-e7a9-4298-a96a-3e2a363c23e6", "Visitor", "VISITOR" },
                    { "b614a9da-e7e5-476a-8c5c-b22fbfc5c762", "942ffe9e-2299-4e16-97cf-36207a76fcd0", "Dean", "DEAN" },
                    { "216b7261-b5f6-45a9-bb60-d6df7dad0468", "506cd7ce-58db-4fb8-943b-1a27985879be", "Hod", "HOD" },
                    { "32430658-f301-4a37-83ab-e0cceb6f691f", "0923062b-91be-4882-892e-1cbb20a3c650", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
