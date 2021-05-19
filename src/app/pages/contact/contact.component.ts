import {Component, Input, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {ApiService} from "../../shared/api/api.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() username;

  constructor(
    private titleService: Title,
    private apiService: ApiService
  ) {
    this.titleService.setTitle("Xaakla - Contact Me");
  }

  ngOnInit() {
  }

  expand(lbl){
    let inputElem = document.querySelector(`#${lbl}`);
    let labelElem = document.querySelector(`#lbl-${lbl}`);

    inputElem.style.height = "45px";
    inputElem.classList.add("my-style");
    labelElem.style.transform = "translateY(-45px)";
  }

  sendMessage(name, replyTo, text) {
    const data = {
      name: name.value,
      subject: "Proposta de Emprego - Portfolio Diego Rocha",
      replyTo: replyTo.value,
      text: text.value
    }

    this.apiService.sendMail(data);
  }

}
