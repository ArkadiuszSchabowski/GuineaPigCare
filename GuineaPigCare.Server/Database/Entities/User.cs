﻿using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace GuineaPigCare.Server.Database.Entities
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [PasswordPropertyText]
        public string Password { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string PostalCode { get; set; }
        [Required]
        public DateOnly DateOfBirth { get; set; }
        [Required]
        public int RoleId { get; set; }
        public virtual Role Role { get; set; }
    }
}
