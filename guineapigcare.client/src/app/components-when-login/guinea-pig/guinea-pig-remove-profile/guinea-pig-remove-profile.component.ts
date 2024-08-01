import { Component, OnInit } from '@angular/core';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-guinea-pig-remove-profile',
  templateUrl: './guinea-pig-remove-profile.component.html',
  styleUrls: ['./guinea-pig-remove-profile.component.css']
})
export class GuineaPigRemoveProfileComponent extends BaseComponent implements OnInit{

  override cloudText: string = "Pamiętaj, że tej akcji nie można cofnąć!"

  constructor(guineaPigService: GuineaPigService){
    super(guineaPigService);
  }
  override ngOnInit(): void {
    super.ngOnInit();
  }
}
