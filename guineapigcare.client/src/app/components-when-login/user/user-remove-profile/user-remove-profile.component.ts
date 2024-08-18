import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { UpdateUserDto } from 'src/app/_models/update-user-dto';
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

    
  }
}
