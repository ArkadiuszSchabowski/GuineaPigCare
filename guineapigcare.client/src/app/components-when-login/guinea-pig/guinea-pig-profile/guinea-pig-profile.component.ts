import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/_models/user-dto';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { ThemeService } from 'src/app/_service/theme.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-guinea-pig-profile',
  templateUrl: './guinea-pig-profile.component.html',
  styleUrls: ['./guinea-pig-profile.component.scss']
})
export class GuineaPigProfileComponent extends BaseComponent implements OnInit {

  override cloudText: string = "Cieszę się, że sprawdzasz co u mnie!"

  currentTheme: boolean | undefined = undefined;
  model: UserDto | undefined = undefined;

  constructor(private theme: ThemeService, guineaPigService: GuineaPigService) {
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.setTheme();
  }

  setTheme() {
    this.theme.isLightTheme$.subscribe({
      next: (response) => {
        this.currentTheme = response;
      },
      error: (error) => console.log(error),
    });
  }
}
