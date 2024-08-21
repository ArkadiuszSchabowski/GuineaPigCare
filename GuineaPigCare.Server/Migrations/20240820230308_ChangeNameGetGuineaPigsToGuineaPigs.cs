using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GuineaPigCare.Server.Migrations
{
    /// <inheritdoc />
    public partial class ChangeNameGetGuineaPigsToGuineaPigs : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GetGuineaPigs_Users_UserId",
                table: "GetGuineaPigs");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GetGuineaPigs",
                table: "GetGuineaPigs");

            migrationBuilder.RenameTable(
                name: "GetGuineaPigs",
                newName: "GuineaPigs");

            migrationBuilder.RenameIndex(
                name: "IX_GetGuineaPigs_UserId",
                table: "GuineaPigs",
                newName: "IX_GuineaPigs_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GuineaPigs",
                table: "GuineaPigs",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GuineaPigs_Users_UserId",
                table: "GuineaPigs",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GuineaPigs_Users_UserId",
                table: "GuineaPigs");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GuineaPigs",
                table: "GuineaPigs");

            migrationBuilder.RenameTable(
                name: "GuineaPigs",
                newName: "GetGuineaPigs");

            migrationBuilder.RenameIndex(
                name: "IX_GuineaPigs_UserId",
                table: "GetGuineaPigs",
                newName: "IX_GetGuineaPigs_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GetGuineaPigs",
                table: "GetGuineaPigs",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GetGuineaPigs_Users_UserId",
                table: "GetGuineaPigs",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
