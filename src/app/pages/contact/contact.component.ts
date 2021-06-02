import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ApiService} from '../../services/api/api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private titleService: Title,
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.titleService.setTitle('Xaakla - Contact Me');
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      subject: ['Proposta de Emprego - Portfolio Diego Rocha', Validators.required],
      replyTo: [null, [Validators.required]],
      text: [null, [Validators.required]],
    });
  }

  sendMessage() {
    console.log(this.contactForm);
    if (this.contactForm.valid) {
      this.apiService.sendMail(this.contactForm.value)
        .subscribe(/*What to do after sending mail*/);
    }
  }

}
