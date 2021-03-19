using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class updateUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "408550ae-c657-47c4-98d2-96c2da49fb4f");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "9212d597-e2b1-49a5-b14c-c2a3bdec5429");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "97a5f1ce-5ee2-4b58-802b-b70f4165c9a5");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "a0a701ad-cb14-41c0-907f-b8867e3eadd4");

            migrationBuilder.RenameColumn(
                name: "UserTypeNum",
                table: "Users",
                newName: "Designation");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.RenameColumn(
                name: "Designation",
                table: "Users",
                newName: "UserTypeNum");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "97a5f1ce-5ee2-4b58-802b-b70f4165c9a5", "5bf6109f-41b0-46b8-b5d4-c728f53bcf8d", "Visitor", "VISITOR" },
                    { "9212d597-e2b1-49a5-b14c-c2a3bdec5429", "1bee5a99-aa0b-460e-8f8b-6a05896123e7", "Dean", "DEAN" },
                    { "a0a701ad-cb14-41c0-907f-b8867e3eadd4", "1cc3451f-234b-4e6a-81d9-d306e27a5612", "Hod", "HOD" },
                    { "408550ae-c657-47c4-98d2-96c2da49fb4f", "1f8986cb-18df-4c8b-bf33-d5bad3bc1f0e", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
