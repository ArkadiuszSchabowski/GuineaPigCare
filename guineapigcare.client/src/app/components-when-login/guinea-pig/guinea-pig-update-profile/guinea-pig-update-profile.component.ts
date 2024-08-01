import { Component, OnInit } from '@angular/core';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-guinea-pig-update-profile',
  templateUrl: './guinea-pig-update-profile.component.html',
  styleUrls: ['./guinea-pig-update-profile.component.css']
})
export class GuineaPigUpdateProfileComponent extends BaseComponent implements OnInit{

  override cloudText: string = "Aktualizacji nigdy za wiele!";

  constructor(guineaPigService: GuineaPigService){
    super(guineaPigService);
  }
  override ngOnInit(): void {
    super.ngOnInit();
  }
}
