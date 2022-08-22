import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.css']
})
export class MyFooterComponent implements OnInit {
  year: number;
  author: string
  constructor() {
    this.year = new Date().getFullYear();
    this.author = "Guilherme G. Chamorro Jr"
   }

  ngOnInit(): void {
  }

}
