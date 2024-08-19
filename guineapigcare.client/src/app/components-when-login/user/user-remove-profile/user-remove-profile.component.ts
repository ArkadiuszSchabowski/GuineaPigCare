import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { UpdateUserDto } from 'src/app/_models/update-user-dto';
import { AccountService } from 'src/app/_service/account.service';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { ThemeHelper } from 'src/app/_service/themeHelper.service';
import { UserService } from 'src/app/_service/user.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-user-remove-profile',
  templateUrl: './user-remove-profile.component.html',
  styleUrls: ['./user-remove-profile.component.css']
})
export class UserRemoveProfileComponent extends BaseComponent implements OnInit{
  override cloudText: string =
    'Pamiętaj, że tej akcji nie można cofnąć!';

  email: string ="";

  constructor(
    guineaPigService: GuineaPigService,
    public themeHelper: ThemeHelper,
    public userService: UserService,
    private accountService: AccountService,
    private toastr: ToastrService,
    private router: Router
  ) {
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  getEmailFromToken(): string {

    var token: any = localStorage.getItem('token');
  
      var decodedToken: any = jwtDecode(token);
  

        this.email = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
        return this.email;
  }
  removeProfile(){
    this.email = this.getEmailFromToken();

    this.accountService.removeProfile(this.email).subscribe({
      next: () => 
        {
          this.accountService.logout();
          this.toastr.success("Twoje konto zostało usunięte!");
          this.router.navigateByUrl("/");
        },
      error: error => console.log(error)
    })
  }
}
