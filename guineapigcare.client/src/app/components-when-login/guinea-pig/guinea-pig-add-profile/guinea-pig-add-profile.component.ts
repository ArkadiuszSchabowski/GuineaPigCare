import { Component, OnInit } from '@angular/core';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-guinea-pig-add-profile',
  templateUrl: './guinea-pig-add-profile.component.html',
  styleUrls: ['./guinea-pig-add-profile.component.css']
})
export class GuineaPigAddProfileComponent extends BaseComponent implements OnInit {

  override cloudText: string = "Dodajesz nową przyjaciela? Super!";

  constructor(guineaPigService: GuineaPigService) {
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }
}
