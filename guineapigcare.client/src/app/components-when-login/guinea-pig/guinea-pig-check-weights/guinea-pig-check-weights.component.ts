import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';
import { GuineaPigDto } from 'src/app/_models/guinea-pig-dto';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { ThemeHelper } from 'src/app/_service/themeHelper.service';
import { TokenService } from 'src/app/_service/token.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-guinea-pig-check-weights',
  templateUrl: './guinea-pig-check-weights.component.html',
  styleUrls: ['./guinea-pig-check-weights.component.css'],
})
export class GuineaPigCheckWeightsComponent
  extends BaseComponent
  implements OnInit
{
  override cloudText: string = 'Ej! Moja waga przecież jest dobra!';

  model: GuineaPigDto = new GuineaPigDto();
  pigs: string[] = [];
  email: string = '';
  guineaPigs: GuineaPigDto[] = [];
  selectedPig: GuineaPigDto = new GuineaPigDto();

  constructor(
    guineaPigService: GuineaPigService,
    public themeHelper: ThemeHelper,
    private tokenService: TokenService,
    private toastr: ToastrService
  ) {
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.getEmailFromToken();
    this.getGuineaPigs();
  }
  getEmailFromToken() {
    this.email = this.tokenService.getEmailFromToken();
  }
  getGuineaPigs() {
    this.guineaPigService.getGuineaPigs(this.email).subscribe({
      next: (response: GuineaPigDto[]) => {
        this.guineaPigs = response;
      },
      error: (error) => console.log(error),
    });
  }
  getGuineaPigWeights() {
    if (this.selectedPig === null) {
      this.toastr.error('Nie wybrano profilu świnki');
    }

    this.email = this.tokenService.getEmailFromToken();

    this.guineaPigService
      .getGuineaPigWeights(this.email, this.selectedPig.name)
      .pipe(
        finalize(() => {
          this.selectedPig = new GuineaPigDto();
        })
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.getGuineaPigs();
        },
        error: (error) => this.toastr.error("Nie wybrano profilu świnki!"),
      });
  }
}
