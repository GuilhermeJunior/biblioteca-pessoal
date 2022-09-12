import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit, OnChanges {
  myForm = new FormGroup({
    name: new FormControl()
  });
  @Output() newEvent = new EventEmitter<string>();
  @Input() numberOfElements: number = 0;

  showAlert: boolean = false;
  disabledBTN: boolean = false;

  addNewAuthor(value: string) {

    this.newEvent.emit(value);
    this.myForm.get('name')?.reset();

  }

  constructor() { }

  ngOnChanges(): void {
    if (this.numberOfElements >= 15) {
        this.showAlert = true;
        this.disabledBTN = true;
    } else {
      this.showAlert = false;
      this.disabledBTN = false;
    }

  }

  ngOnInit(): void {

  }


}
