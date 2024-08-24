import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GuineaPigService } from '../_service/guinea-pig.service';
import { GuineaPigWeightsDto } from '../_models/guinea-pigs-weights-dto';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public config: any;
  chart: any;
  chart2: any;
  email: string = "swinka@o2.pl";
  name: string = "Tola";

  weights: GuineaPigWeightsDto[] = [];

  constructor(private guineaPigService: GuineaPigService) {}

  ngOnInit(): void {
    this.getGuineaPigWeights();
  }

  getGuineaPigWeights() {
    this.guineaPigService.getGuineaPigWeights(this.email, this.name).subscribe({
      next: response => {
        this.weights = response;
        console.log(this.weights);
        this.updateChartData();
      },
      error: error => console.log(error)
    });
  }

  updateChartData() {
    const labels = this.weights.map(weight => weight.date);
    const data = this.weights.map(weight => weight.weight);

    this.config = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: this.name,
            data: data,
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    // Tworzenie wykresu po zaktualizowaniu konfiguracji
    this.chart = new Chart("canvas", this.config);
  }
}
