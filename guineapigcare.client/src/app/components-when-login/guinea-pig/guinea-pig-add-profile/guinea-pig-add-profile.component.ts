import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { AddGuineaPigDto } from 'src/app/_models/add-guinea-pig-dto';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { ThemeHelper } from 'src/app/_service/themeHelper.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-guinea-pig-add-profile',
  templateUrl: './guinea-pig-add-profile.component.html',
  styleUrls: ['./guinea-pig-add-profile.component.css'],
})
export class GuineaPigAddProfileComponent
  extends BaseComponent
  implements OnInit
{
  override cloudText: string = 'Dodajesz nowego przyjaciela? Super!';
  model: AddGuineaPigDto = new AddGuineaPigDto();
  email : string = "";

  constructor(guineaPigService: GuineaPigService,
    public themeHelper: ThemeHelper,
    private toastr: ToastrService
  ) {
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }
  getEmailFromToken(): string {

    var token: any = localStorage.getItem('token');
  
      var decodedToken: any = jwtDecode(token);

      var email: string

        email = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
        return email;
  }
  addGuineaPigProfile() {

    this.email = this.getEmailFromToken();

    this.guineaPigService.addGuineaPig(this.email, this.model).subscribe({
      next: () => {
        this.toastr.success("Profil świnki morskiej został dodany!")
      },
      error: error =>{
        if(error.status === 400){
          this.toastr.error("Wprowadzono niepoprawne dane!")
        }
      } 
    })
  }
}
