import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../_service/theme.service';
import { GuineapigService } from '../../_service/guineapig.service';
import { UserDto } from 'src/app/_models/user-dto';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  
  currentTheme: boolean | undefined = undefined;
  text: string = 'Cieszę się, że zalogowałeś się aby sprawdzić co u mnie!';
  model: UserDto | undefined = undefined;

  constructor(private theme: ThemeService, private guineaPigService: GuineapigService) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}