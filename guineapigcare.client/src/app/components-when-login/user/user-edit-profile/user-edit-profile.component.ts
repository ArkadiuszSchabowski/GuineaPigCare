import { Component, OnInit } from '@angular/core';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent extends BaseComponent implements OnInit{

  override cloudText: string = "Edytuj swoje informacje i bądź zawsze na bieżąco!";

  constructor(guineaPigService: GuineaPigService){
    super(guineaPigService);
  }
  override ngOnInit(): void {
    super.ngOnInit();
  }
}
