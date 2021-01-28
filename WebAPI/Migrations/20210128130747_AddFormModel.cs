using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class AddFormModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "213ffd41-7396-46a9-bf9a-b3f0fc56e124");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "6dc9e18c-f38f-43f9-91aa-7a3ef1911d7a");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "aca43e5d-2867-4b2c-b72d-4fa263fa9da7");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "d7a95891-336b-4b6d-bdcd-66dce0e6b786");

            migrationBuilder.CreateTable(
                name: "VehicleReservationForms",
                columns: table => new
                {
                    VehicleReservationFormId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FromRoute = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ToRoute = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EstimateTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EstimateDistance = table.Column<double>(type: "float", nullable: false),
                    FormModelId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    DateTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VehicleReservationForms", x => x.VehicleReservationFormId);
                    table.ForeignKey(
                        name: "FK_VehicleReservationForms_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "59fb6a84-1f6b-470a-8601-f20c3cfa9535", "f6094d42-44a7-440a-8850-8841e2867d4f", "Visitor", "VISITOR" },
                    { "a16518d4-4a1c-42d3-b767-af415702f78a", "49e41b2b-6eef-4f97-b8bd-12a2ae37cf62", "Dean", "DEAN" },
                    { "9e0c9b50-0838-4f62-9b09-67764ef7004c", "6c7caaa1-12e5-4bb5-9ca1-0d14988567c4", "Hod", "HOD" },
                    { "6e4cd7ce-dc06-4684-a8af-7ee792e1283e", "154957cd-5880-40a5-8bb2-f16983cbe360", "Administrator", "ADMINISTRATOR" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_VehicleReservationForms_UserId",
                table: "VehicleReservationForms",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "VehicleReservationForms");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "59fb6a84-1f6b-470a-8601-f20c3cfa9535");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "6e4cd7ce-dc06-4684-a8af-7ee792e1283e");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "9e0c9b50-0838-4f62-9b09-67764ef7004c");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "a16518d4-4a1c-42d3-b767-af415702f78a");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "6dc9e18c-f38f-43f9-91aa-7a3ef1911d7a", "8b0c3776-8de6-4233-967b-46902aa96e75", "Visitor", "VISITOR" },
                    { "d7a95891-336b-4b6d-bdcd-66dce0e6b786", "8c441bd3-c951-448e-98c4-e78a7569853b", "Dean", "DEAN" },
                    { "213ffd41-7396-46a9-bf9a-b3f0fc56e124", "c484695e-4706-460e-adfa-7e6e58937654", "Hod", "HOD" },
                    { "aca43e5d-2867-4b2c-b72d-4fa263fa9da7", "902b3988-a622-48d7-ae43-1f033cc56e79", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
