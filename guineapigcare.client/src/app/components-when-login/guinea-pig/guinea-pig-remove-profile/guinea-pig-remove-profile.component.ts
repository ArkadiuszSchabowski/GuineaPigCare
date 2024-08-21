import { Component, OnInit } from '@angular/core';
import { AddGuineaPigDto } from 'src/app/_models/add-guinea-pig-dto';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { ThemeHelper } from 'src/app/_service/themeHelper.service';
import { TokenService } from 'src/app/_service/token.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-guinea-pig-remove-profile',
  templateUrl: './guinea-pig-remove-profile.component.html',
  styleUrls: ['./guinea-pig-remove-profile.component.css']
})
export class GuineaPigRemoveProfileComponent extends BaseComponent implements OnInit{

  override cloudText: string = "Pamiętaj, że tej akcji nie można cofnąć!"

  model: AddGuineaPigDto = new AddGuineaPigDto();
  pigs: string[] = [];
  email: string = "";
  guineaPigId: number = 0;

  constructor(guineaPigService: GuineaPigService,
    public themeHelper: ThemeHelper,
    private tokenService: TokenService
  ) {
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }
  removeGuineaPigProfile() {

    this.email = this.tokenService.getEmailFromToken();
    this.guineaPigId = this.tokenService.getGuineaPigIdFromToken();

    this.guineaPigService.removeGuineaPig(this.email, this.guineaPigId).subscribe({
      next: response => {
        console.log(response),
        console.log(this.email),
        console.log(this.guineaPigId)
      },
      error: error => console.log(error)
    })
  }
}
