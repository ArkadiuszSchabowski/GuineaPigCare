using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GuineaPigCare.Server.Migrations
{
    /// <inheritdoc />
    public partial class changeYearOfBirthToDateOfBirth : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "YearOfBirth",
                table: "Users",
                newName: "DateOfBirth");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DateOfBirth",
                table: "Users",
                newName: "YearOfBirth");
        }
    }
}
