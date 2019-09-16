import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VacancyList';
  p: number = 1;
  constructor(private httpClient: HttpClient){}
  vacancies  = []; 
  term: string;

  ngOnInit () {
    this.httpClient.get('https://nut-case.s3.amazonaws.com/jobs.json').subscribe(
        data => {
          this.vacancies = data["data"];   
          // console.log(this.vacancies);
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
    }
  }



