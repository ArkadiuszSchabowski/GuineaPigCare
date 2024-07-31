import { Directive, OnInit } from "@angular/core";
import { GuineaPigService } from "../_service/guinea-pig.service";
import { ThemeService } from "../_service/theme.service";

@Directive()
export abstract class BaseComponent implements OnInit {
  
  abstract cloudText: string;
  abstract backgroundUrl: string;

  constructor(public guineaPigService: GuineaPigService) {}

  ngOnInit(): void {
    this.setCloudText(this.cloudText);
    this.setBackground(this.backgroundUrl);
  }

  setCloudText(cloudText: string): void {
    this.guineaPigService.setCloudText(cloudText);
  }
  setBackground(url: string){
    document.body.style.backgroundImage = `url(${url})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.width ="100%";
    document.body.style.height = "auto";
    document.body.style.display="flex";
    document.body.style.position = "center";
  }
}
