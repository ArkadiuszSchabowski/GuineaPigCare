import { Component, OnInit } from '@angular/core';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-user-remove-profile',
  templateUrl: './user-remove-profile.component.html',
  styleUrls: ['./user-remove-profile.component.css']
})
export class UserRemoveProfileComponent extends BaseComponent implements OnInit{
  
  override cloudText: string = "Pamiętaj, że tej akcji nie można cofnąć!"

  constructor(guineaPigService: GuineaPigService){
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }
}
