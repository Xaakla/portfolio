import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  slides = [];

  constructor(
    private titleService: Title,
    private apiService: ApiService
  ) {
    this.titleService.setTitle('Xaakla - Projects');
  }

  ngOnInit() {
    this.apiService.list()._subscribe((response) => {
      this.slides = [...this.slides, ...response];
      console.log(this.slides);
    });
  }
}
