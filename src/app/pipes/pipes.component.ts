import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <h2>{{name}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{message | titlecase}}</h2>
    <h2>{{name | slice:3}}</h2>
  `,
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public name = 'Codevolution';
  public message = "welcome to codevolution";
  public person = {
      "firstname":"Jone",
      "lastname":"Doe"
  }
  constructor() { }

  ngOnInit() {
  }

}
