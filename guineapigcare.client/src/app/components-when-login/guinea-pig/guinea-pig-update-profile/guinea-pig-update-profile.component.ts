import { Component, OnInit } from '@angular/core';
import { AddGuineaPigDto } from 'src/app/_models/add-guinea-pig-dto';
import { GuineaPigDto } from 'src/app/_models/guinea-pig-dto';
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
  guineaPigs: GuineaPigDto[] = [];
  selectedPig: GuineaPigDto = new GuineaPigDto();

  constructor(guineaPigService: GuineaPigService,
    public themeHelper: ThemeHelper,
    private tokenService: TokenService
  ) {
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.getEmailFromToken();
    this.getGuineaPigs();
  }
  getEmailFromToken() {
    this.email = this.tokenService.getEmailFromToken();
  }
  getGuineaPigs(){
    this.guineaPigService.getGuineaPigs(this.email).subscribe({
      next: (response: GuineaPigDto[]) => {
        this.guineaPigs = response;
      },
      error: error => console.log(error)
    })
  }
  updateGuineaPigProfile(selectedPig: GuineaPigDto){

    selectedPig.weight = this.model.weight;

    this.guineaPigService.updateWeightGuineaPig(this.email, selectedPig).subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }
}
