using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class changeDataType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "3fa0a6f3-2053-419e-bfb2-8fe8003e4d0f");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "5de3fbc7-2465-4a05-8ae9-bdbe80c82987");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "7f772ce4-c376-4171-bce1-6127115f1b5a");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "c5e678ae-8630-483c-ac6e-88e36c9c25b4");

            migrationBuilder.AlterColumn<string>(
                name: "PaperProvided",
                table: "RisograghForm",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "a2f27a65-d140-4c38-afc7-8d4cc57d80ba", "691bcb7e-c2c7-499e-920e-359dc5f40779", "Visitor", "VISITOR" },
                    { "9031f375-70da-4cc5-be8d-802594e906ea", "1532e6e5-53af-4147-8cfe-eb865ffa5468", "Dean", "DEAN" },
                    { "d8c8b287-9e9f-4523-b37f-146145cb734b", "4817c27a-5261-4e14-963d-9db4b4b2a167", "Hod", "HOD" },
                    { "a7f95727-9077-4cb5-b3bf-c77af31e13ab", "84fa3398-f1af-496f-b249-dd8282146cbb", "Administrator", "ADMINISTRATOR" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "9031f375-70da-4cc5-be8d-802594e906ea");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "a2f27a65-d140-4c38-afc7-8d4cc57d80ba");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "a7f95727-9077-4cb5-b3bf-c77af31e13ab");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "d8c8b287-9e9f-4523-b37f-146145cb734b");

            migrationBuilder.AlterColumn<bool>(
                name: "PaperProvided",
                table: "RisograghForm",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "5de3fbc7-2465-4a05-8ae9-bdbe80c82987", "1a7f9f98-6bc0-41f9-9e46-ad00fb37b83c", "Visitor", "VISITOR" },
                    { "c5e678ae-8630-483c-ac6e-88e36c9c25b4", "54c8a664-f341-480c-bc37-beaf309bb930", "Dean", "DEAN" },
                    { "3fa0a6f3-2053-419e-bfb2-8fe8003e4d0f", "8b4f809f-04eb-492a-8515-44ace6bd5857", "Hod", "HOD" },
                    { "7f772ce4-c376-4171-bce1-6127115f1b5a", "708b56d8-d3b2-44cd-af4c-1185c4fb5451", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
