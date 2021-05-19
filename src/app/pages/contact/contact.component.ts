import {Component, Input, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() username;

  constructor(private titleService: Title) {
    this.titleService.setTitle("Xaakla - Contact Me");
  }

  ngOnInit() {
  }

  expand(lbl){
    let inputElem = document.querySelector(`#${lbl}`);
    let labelElem = document.querySelector(`#lbl-${lbl}`);
    console.log(inputElem, labelElem)
    console.log(typeof inputElem)
    inputElem.style.height = "45px";
    inputElem.classList.add("my-style");
    labelElem.style.transform = "translateY(-45px)";
  }


}
