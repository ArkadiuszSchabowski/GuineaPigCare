import { Component, OnInit } from '@angular/core';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-guinea-pig-cleaning-calendar',
  templateUrl: './guinea-pig-cleaning-calendar.component.html',
  styleUrls: ['./guinea-pig-cleaning-calendar.component.css']
})
export class GuineaPigCleaningCalendarComponent extends BaseComponent implements OnInit{

  override backgroundUrl: string = "assets/images/guinea-pig/cleaningCalendar.jpg"
  override cloudText: string = "Wspaniale, że zaglądasz do kalendarza!";

  constructor(guineaPigService: GuineaPigService){
    super(guineaPigService);
  }
  override ngOnInit(): void {
    super.ngOnInit();
  }

}
