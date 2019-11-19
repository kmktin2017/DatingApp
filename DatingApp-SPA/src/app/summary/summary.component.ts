import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  summaries: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getSummaries();
  }

  getSummaries() {
    this.http.get('http://localhost:5000/api/WeatherForecast').subscribe(response => {
      this.summaries = response;
    }, error => {
      console.log(error);
    });
  }
}
