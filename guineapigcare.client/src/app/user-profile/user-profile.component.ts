import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../_service/theme.service';
import { GuineapigService } from '../_service/guineapig.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  
  currentTheme: boolean | undefined = undefined;
  text: string = 'Cieszę się, że zalogowałeś się aby sprawdzić co u mnie!';

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
