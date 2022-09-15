import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl("", Validators.required)
  });
  @Output() newEvent = new EventEmitter<string>();


  addNewAuthor(value: string) {

    this.newEvent.emit(value);
    this.myForm.get('name')?.reset();

  }
  constructor() { }

  ngOnInit(): void {
  }

}
