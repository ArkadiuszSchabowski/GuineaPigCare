import { Component } from '@angular/core';
import { GuineapigService } from 'src/app/_service/guineapig.service';
import { ThemeService } from 'src/app/_service/theme.service';

@Component({
  selector: 'app-guinea-pig-add-profile',
  templateUrl: './guinea-pig-add-profile.component.html',
  styleUrls: ['./guinea-pig-add-profile.component.css']
})
export class GuineaPigAddProfileComponent {
  currentTheme: boolean | undefined = undefined;
  cloudText: string = "Wybierz odpowiednią akcję, by być na bieżąco!"

  constructor(private theme: ThemeService, private guineaPigService: GuineapigService) {}

  ngOnInit(): void {

    this.setTheme();
    this.setCloudText();
  }

  setCloudText() {
    this.guineaPigService.setCloudText(this.cloudText);
  }
  
  setTheme() {
    this.theme.isLightTheme$.subscribe({
      next: (response) => (this.currentTheme = response),
      error: (error) => console.log(error),
    });
  }
}
