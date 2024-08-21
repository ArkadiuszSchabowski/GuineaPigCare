import { Component, OnInit } from '@angular/core';
import { AddGuineaPigDto } from 'src/app/_models/add-guinea-pig-dto';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { ThemeHelper } from 'src/app/_service/themeHelper.service';
import { TokenService } from 'src/app/_service/token.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-guinea-pig-update-profile',
  templateUrl: './guinea-pig-update-profile.component.html',
  styleUrls: ['./guinea-pig-update-profile.component.css']
})
export class GuineaPigUpdateProfileComponent extends BaseComponent implements OnInit{

  override cloudText: string = "Ej! Przecież moja waga jest dobra!";

  email = "";
  model: AddGuineaPigDto = new AddGuineaPigDto();
  pigs: string[] = [];

  constructor(guineaPigService: GuineaPigService,
    public themeHelper: ThemeHelper,
    private tokenService: TokenService
  ) {
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }
  updateGuineaPigProfile() {
    this.email = this.tokenService.getEmailFromToken();
  }
}
