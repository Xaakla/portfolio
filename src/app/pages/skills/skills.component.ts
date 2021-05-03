import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Xaakla - Skills");
  }

  ngOnInit() {
  }

}
