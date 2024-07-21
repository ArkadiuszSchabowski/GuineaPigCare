import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/_models/user-dto';
import { GuineapigService } from 'src/app/_service/guineapig.service';
import { ThemeService } from 'src/app/_service/theme.service';

@Component({
  selector: 'app-guinea-pig-profile',
  templateUrl: './guinea-pig-profile.component.html',
  styleUrls: ['./guinea-pig-profile.component.scss']
})
export class GuineaPigProfileComponent implements OnInit {
  currentTheme: boolean | undefined = undefined;
  text: string = 'Cieszę się, że zalogowałeś się aby sprawdzić co u mnie!';
  model: UserDto | undefined = undefined;

  constructor(private theme: ThemeService, private guineaPigService: GuineapigService) {

  }

  ngOnInit(): void {
    this.setTheme();
    this.setCloudText();
  }

  setCloudText() {
    this.guineaPigService.setCloudText(this.text);
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
