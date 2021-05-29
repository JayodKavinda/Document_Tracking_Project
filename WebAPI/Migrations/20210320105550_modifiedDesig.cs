using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class modifiedDesig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "2dd4e8bc-33b1-4852-8b2f-8138c91f3062");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "ab1dbc67-d424-4744-8d55-bfa99fca6cfb");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "d6df0973-6bc6-4885-af36-8f3804ce80c9");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "e5983b57-6d64-48f5-b0f5-5c25ea190232");

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
                    { "15e979e0-04b1-4233-aa13-2ddc9be42086", "5b09d3c1-b7b3-458a-b4f2-59b7f7cd4376", "Visitor", "VISITOR" },
                    { "238cd17b-aeff-46a7-a561-4312650fdd6c", "6c1764ff-5437-4ca5-8e9d-7d144ea0c860", "Dean", "DEAN" },
                    { "34e9dac8-9679-4223-b565-103072b90f4b", "cee49e26-639b-4de3-8ebe-30c86062a86e", "Hod", "HOD" },
                    { "f2bc9a00-8add-42c0-a807-77ccd855ea20", "ccc48cd1-1ae6-4511-a902-4e45952f4c84", "Administrator", "ADMINISTRATOR" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
                    { "e5983b57-6d64-48f5-b0f5-5c25ea190232", "ba2c2f41-18b1-4497-a566-093384b3188f", "Visitor", "VISITOR" },
                    { "2dd4e8bc-33b1-4852-8b2f-8138c91f3062", "c7136bc7-f0df-4303-a345-25b632b8fed2", "Dean", "DEAN" },
                    { "d6df0973-6bc6-4885-af36-8f3804ce80c9", "e3b20c04-d95b-48f6-aa1f-25102b114f38", "Hod", "HOD" },
                    { "ab1dbc67-d424-4744-8d55-bfa99fca6cfb", "b64296e7-3f3c-4cdf-be72-0eed4d906a70", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
