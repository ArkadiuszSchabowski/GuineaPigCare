using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GuineaPigCare.Server.Migrations
{
    /// <inheritdoc />
    public partial class fixRelationsGuineaPigsWeights : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GuineaPigWeights_GuineaPigs_UserId",
                table: "GuineaPigWeights");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "GuineaPigWeights",
                newName: "GuineaPigId");

            migrationBuilder.RenameIndex(
                name: "IX_GuineaPigWeights_UserId",
                table: "GuineaPigWeights",
                newName: "IX_GuineaPigWeights_GuineaPigId");

            migrationBuilder.AddForeignKey(
                name: "FK_GuineaPigWeights_GuineaPigs_GuineaPigId",
                table: "GuineaPigWeights",
                column: "GuineaPigId",
                principalTable: "GuineaPigs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GuineaPigWeights_GuineaPigs_GuineaPigId",
                table: "GuineaPigWeights");

            migrationBuilder.RenameColumn(
                name: "GuineaPigId",
                table: "GuineaPigWeights",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_GuineaPigWeights_GuineaPigId",
                table: "GuineaPigWeights",
                newName: "IX_GuineaPigWeights_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_GuineaPigWeights_GuineaPigs_UserId",
                table: "GuineaPigWeights",
                column: "UserId",
                principalTable: "GuineaPigs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
