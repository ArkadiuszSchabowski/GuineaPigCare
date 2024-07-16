import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../_service/theme.service';
import { GuineapigService } from '../../_service/guineapig.service';

@Component({
  selector: 'app-guinea-pig-manager',
  templateUrl: './guinea-pig-manager.component.html',
  styleUrls: ['./guinea-pig-manager.component.scss'],
})
export class GuineaPigManagerComponent implements OnInit {
  
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
