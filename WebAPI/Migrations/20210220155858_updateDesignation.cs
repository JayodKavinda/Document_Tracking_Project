using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class updateDesignation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "1906629e-37ab-4b8f-a998-e46373543106");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "4ca8722c-47ac-41ba-8a0a-ecde62249fdb");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "94743f93-6a36-454e-8aa1-ae7fbdd8ff44");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "be293bb8-b8f7-4be4-b4e6-d4d973377922");

            migrationBuilder.AlterColumn<string>(
                name: "Designation",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<int>(
                name: "Designation",
                table: "Users",
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
                    { "4ca8722c-47ac-41ba-8a0a-ecde62249fdb", "11335885-e90c-4c0e-b208-c6b23604baa5", "Visitor", "VISITOR" },
                    { "1906629e-37ab-4b8f-a998-e46373543106", "c73d84de-22db-4217-ab43-1e7d67aee180", "Dean", "DEAN" },
                    { "be293bb8-b8f7-4be4-b4e6-d4d973377922", "425ebbd1-bd50-484c-aab2-748d2a427a28", "Hod", "HOD" },
                    { "94743f93-6a36-454e-8aa1-ae7fbdd8ff44", "7c2daa65-fcb2-4724-bae1-8ac54f8fb299", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
