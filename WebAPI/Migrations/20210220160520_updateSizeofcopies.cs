using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class updateSizeofcopies : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "5536dbea-dc69-44b9-9cc6-2cfc80a8f784");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "64522be2-b9b8-4929-8064-8bacb771a5c4");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "a410afa8-0e4e-496a-8107-a8ac59aee971");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "de0cf106-eaf8-4016-ac6d-fb3f664c2a75");

            migrationBuilder.AlterColumn<string>(
                name: "SizeOfCopies",
                table: "RisograghForm",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<int>(
                name: "SizeOfCopies",
                table: "RisograghForm",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "5536dbea-dc69-44b9-9cc6-2cfc80a8f784", "77744aad-282b-4a18-9dfc-a59c039116cb", "Visitor", "VISITOR" },
                    { "64522be2-b9b8-4929-8064-8bacb771a5c4", "98aa128f-a703-4bb4-a80e-28fd96592009", "Dean", "DEAN" },
                    { "de0cf106-eaf8-4016-ac6d-fb3f664c2a75", "f1c4aa69-56dd-441e-9930-8c795f92a18e", "Hod", "HOD" },
                    { "a410afa8-0e4e-496a-8107-a8ac59aee971", "2a8abe03-2ce0-4d4e-a049-72a0a00cd1d3", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
