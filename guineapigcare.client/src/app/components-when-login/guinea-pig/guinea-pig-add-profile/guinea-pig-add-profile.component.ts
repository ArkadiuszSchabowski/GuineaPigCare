import { Component, OnInit } from '@angular/core';
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

  constructor(guineaPigService: GuineaPigService,
    public themeHelper: ThemeHelper
  ) {
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }
  addGuineaPigProfile() {}
}
