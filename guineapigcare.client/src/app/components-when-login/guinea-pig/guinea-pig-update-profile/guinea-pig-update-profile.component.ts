import { Component, OnInit } from '@angular/core';
import { AddGuineaPigDto } from 'src/app/_models/add-guinea-pig-dto';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { ThemeHelper } from 'src/app/_service/themeHelper.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-guinea-pig-update-profile',
  templateUrl: './guinea-pig-update-profile.component.html',
  styleUrls: ['./guinea-pig-update-profile.component.css']
})
export class GuineaPigUpdateProfileComponent extends BaseComponent implements OnInit{

  override cloudText: string = "Ej! Nie lubię sprawdzać wagi :P";

  model: AddGuineaPigDto = new AddGuineaPigDto();
  pigs: string[] = [];

  constructor(guineaPigService: GuineaPigService,
    public themeHelper: ThemeHelper
  ) {
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }
  updateGuineaPigProfile() {}
}
