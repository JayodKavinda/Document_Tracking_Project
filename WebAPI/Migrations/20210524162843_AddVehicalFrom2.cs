using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class AddVehicalFrom2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.AddColumn<string>(
                name: "Applicant",
                table: "VehicalReservationForms",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "6e327006-dcac-467b-aaaf-c615f58ad6a5", "de6a2afc-e8fd-404d-bdf0-7cc12bf12fda", "Visitor", "VISITOR" },
                    { "8409702e-786f-4a06-b57d-066dc2d57d95", "274490e7-0720-4e76-8e53-aa182a8a5e61", "Dean", "DEAN" },
                    { "f09fb2a5-4fbc-4540-b23b-21ade83aef90", "e7581abf-6f4f-4b3e-8bac-5cc1c901cc8e", "Hod", "HOD" },
                    { "f48ee1bc-b4b4-40d3-82fd-c3347cbeccaf", "731ba90a-8ca6-4220-ab08-428b0f6f54cc", "Administrator", "ADMINISTRATOR" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "6e327006-dcac-467b-aaaf-c615f58ad6a5");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "8409702e-786f-4a06-b57d-066dc2d57d95");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "f09fb2a5-4fbc-4540-b23b-21ade83aef90");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "f48ee1bc-b4b4-40d3-82fd-c3347cbeccaf");

            migrationBuilder.DropColumn(
                name: "Applicant",
                table: "VehicalReservationForms");

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
        }
    }
}
