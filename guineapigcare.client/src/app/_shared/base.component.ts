import { Directive, OnInit } from "@angular/core";
import { GuineaPigService } from "../_service/guinea-pig.service";
import { ThemeService } from "../_service/theme.service";

@Directive()
export abstract class BaseComponent implements OnInit {
  
  abstract cloudText: string;

  constructor(public guineaPigService: GuineaPigService) {}

  ngOnInit(): void {
    this.setCloudText(this.cloudText);
  }

  setCloudText(cloudText: string): void {
    this.guineaPigService.setCloudText(cloudText); // Użycie przekazanego argumentu cloudText
  }
}
