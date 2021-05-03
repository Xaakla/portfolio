import { AppComponent } from '../../app.component';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title, public appComponent: AppComponent) {
    this.titleService.setTitle('Xaakla - Home');
  }

  ngOnInit() {}
}
