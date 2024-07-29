import { Component, OnInit } from '@angular/core';
import { UpdateUserDto } from 'src/app/_models/update-user-dto';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { ThemeHelper } from 'src/app/_service/themeHelper.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css'],
})
export class UserEditProfileComponent extends BaseComponent implements OnInit {

  override cloudText: string = "Edytuj swoje informacje i bądź zawsze na bieżąco!";
  model: UpdateUserDto = new UpdateUserDto();

  constructor(guineaPigService: GuineaPigService, public themeHelper: ThemeHelper) {
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.themeHelper.setTheme();
  }

  updateUser(model: UpdateUserDto) {
    console.log(model);
  }
}
