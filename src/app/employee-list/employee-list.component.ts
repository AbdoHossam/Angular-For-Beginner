import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
      <h2>Employee List</h2>
      <ul *ngFor="let employee of employees">
        <li>{{employee.name}}</li>
      </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees=[
    {"id":1, "name":"Andrew","age":30},
    {"id":1, "name":"Brandon","age":28},
    {"id":1, "name":"Christina","age":25},
    {"id":1, "name":"Elena","age":20}
  ];
  constructor() { }

  ngOnInit() {
  }

}
