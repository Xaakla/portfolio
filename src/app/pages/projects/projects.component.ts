import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  name = 'Angular';
  slides = [
    {
      image:
        'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
      title: 'Slider 1',
    },
  ];
  projects = [];

  constructor(
    private titleService: Title,
    private projectsService: ProjectsService
  ) {
    this.titleService.setTitle('Xaakla - Projects');
  }

  ngOnInit() {
    this.projectsService.list()._subscribe((response) => {
      this.slides = [...this.slides, ...response];
      console.log(this.slides);
    });
  }
}
