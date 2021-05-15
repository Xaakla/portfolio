import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  languagesDetails: string = 'standard';
  frameworkDetails: string = 'standard';
  backendDetails: string = 'standard';
  databaseDetails: string = 'standard';

  constructor(private titleService: Title) {
    this.titleService.setTitle('Xaakla - Skills');
  }

  ngOnInit() {}

  setLanguagesDetails() {
    if (this.languagesDetails === 'standard')
      return (this.languagesDetails = 'expanded');
    if (this.languagesDetails === 'expanded')
      return (this.languagesDetails = 'hidden');
    if (this.languagesDetails === 'hidden')
      return (this.languagesDetails = 'expanded');
  }
}
