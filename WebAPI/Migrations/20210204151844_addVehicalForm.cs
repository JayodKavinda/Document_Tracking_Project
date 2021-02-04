using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class addVehicalForm : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "065cfccf-18f1-4e40-ac2d-2a534d69089e");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "28ff1c7f-5486-4eaf-9190-aa5840a7e574");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "764c3ca0-1e9a-48fb-82e2-20fcfe4a4034");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "b365bf7e-8ae7-4330-b307-5be74274e297");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "b365bf7e-8ae7-4330-b307-5be74274e297", "d7fbdc24-099a-47c3-a40a-3ff205a3af32", "Visitor", "VISITOR" },
                    { "065cfccf-18f1-4e40-ac2d-2a534d69089e", "06672b28-5677-4022-b38d-0f5dff46e734", "Dean", "DEAN" },
                    { "764c3ca0-1e9a-48fb-82e2-20fcfe4a4034", "ebb43f84-f8ce-4371-94cc-8fe15817eb08", "Hod", "HOD" },
                    { "28ff1c7f-5486-4eaf-9190-aa5840a7e574", "0d293191-0655-4558-9b1f-dc71179b5cd4", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
