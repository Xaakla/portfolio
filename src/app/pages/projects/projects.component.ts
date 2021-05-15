import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import 'keen-slider/keen-slider.min.css';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  name = 'Angular';
  slides = [
    {
      color:
        'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
      text: 'Slider 1',
    },
    { color: '#6c757d', text: 'Slider 2' },
    { color: '#17a2b8', text: 'Slider 3' },
    { color: '#28a745', text: 'Slider 4' },
    { color: '#dc3545', text: 'Slider 5' },
    { color: '#ffc107', text: 'Slider 6' },
  ];

  // https://portfoliobackapi.herokuapp.com/

  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle('Xaakla - Projects');
  }

  ngOnInit() {}

  list() {
    // return this.http.get()
  }
}
