using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GuineaPigCare.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddWeightsToGuineaPigs : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GuineaPigWeights",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Weight = table.Column<int>(type: "int", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GuineaPigWeights", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GuineaPigWeights_GuineaPigs_UserId",
                        column: x => x.UserId,
                        principalTable: "GuineaPigs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GuineaPigWeights_UserId",
                table: "GuineaPigWeights",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GuineaPigWeights");
        }
    }
}
