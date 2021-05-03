import { Injectable } from '@angular/core';
import { Page } from './page';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  pages: Page[] = [
    { name: "home", selected: true },
    { name: "about", selected: false },
    { name: "skills", selected: false },
    { name: "projects", selected: false },
    { name: "contact", selected: false },
  ];

  constructor() { }

  changePage(name: string) {
    this.pages.forEach(page => {
      if (page.name === name) page.selected = true;
      else page.selected = false;
    });
  }

}
