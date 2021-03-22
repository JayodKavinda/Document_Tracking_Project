using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class _01 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "0ad24672-f6a2-4adf-a88c-336564f160c8");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "7a0521ba-5b14-4adc-b985-abaefc52536f");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "bbb5ae01-96b4-4cb4-8387-cc51aeb2a5d6");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "e44c53e1-65e6-4f4f-9d4c-c4357be5e3d8");

            migrationBuilder.DropColumn(
                name: "isProvided",
                table: "RisograghForm");

            migrationBuilder.RenameColumn(
                name: "DateTime",
                table: "VehicleReservationForms",
                newName: "InitDateTime");

            migrationBuilder.RenameColumn(
                name: "PageCount",
                table: "RisograghForm",
                newName: "NumberOfPage");

            migrationBuilder.RenameColumn(
                name: "DocTitle",
                table: "RisograghForm",
                newName: "SizeOfCopies");

            migrationBuilder.RenameColumn(
                name: "DateTime",
                table: "RisograghForm",
                newName: "InitDateTime");

            migrationBuilder.RenameColumn(
                name: "CopyCount",
                table: "RisograghForm",
                newName: "NumberOfCopies");

            migrationBuilder.AddColumn<string>(
                name: "FormModelName",
                table: "VehicleReservationForms",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DocumentTitle",
                table: "RisograghForm",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FinalLevelUser",
                table: "RisograghForm",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "FinalUserDateTime",
                table: "RisograghForm",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "FormModelName",
                table: "RisograghForm",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FormStatus",
                table: "RisograghForm",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PaperProvided",
                table: "RisograghForm",
                type: "nvarchar(max)",
                nullable: true);

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropColumn(
                name: "FormModelName",
                table: "VehicleReservationForms");

            migrationBuilder.DropColumn(
                name: "DocumentTitle",
                table: "RisograghForm");

            migrationBuilder.DropColumn(
                name: "FinalLevelUser",
                table: "RisograghForm");

            migrationBuilder.DropColumn(
                name: "FinalUserDateTime",
                table: "RisograghForm");

            migrationBuilder.DropColumn(
                name: "FormModelName",
                table: "RisograghForm");

            migrationBuilder.DropColumn(
                name: "FormStatus",
                table: "RisograghForm");

            migrationBuilder.DropColumn(
                name: "PaperProvided",
                table: "RisograghForm");

            migrationBuilder.RenameColumn(
                name: "InitDateTime",
                table: "VehicleReservationForms",
                newName: "DateTime");

            migrationBuilder.RenameColumn(
                name: "SizeOfCopies",
                table: "RisograghForm",
                newName: "DocTitle");

            migrationBuilder.RenameColumn(
                name: "NumberOfPage",
                table: "RisograghForm",
                newName: "PageCount");

            migrationBuilder.RenameColumn(
                name: "NumberOfCopies",
                table: "RisograghForm",
                newName: "CopyCount");

            migrationBuilder.RenameColumn(
                name: "InitDateTime",
                table: "RisograghForm",
                newName: "DateTime");

            migrationBuilder.AddColumn<bool>(
                name: "isProvided",
                table: "RisograghForm",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "7a0521ba-5b14-4adc-b985-abaefc52536f", "611c4b85-42f6-486f-b666-9cc3a37d2ec5", "Visitor", "VISITOR" },
                    { "bbb5ae01-96b4-4cb4-8387-cc51aeb2a5d6", "ac7f5305-1528-4a89-a314-5aa22ad6bfea", "Dean", "DEAN" },
                    { "0ad24672-f6a2-4adf-a88c-336564f160c8", "39dcb269-ab15-4bd8-a14f-2af70f612668", "Hod", "HOD" },
                    { "e44c53e1-65e6-4f4f-9d4c-c4357be5e3d8", "0faf9bd5-a837-46a6-b0a0-f954aa41a345", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
