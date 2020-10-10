import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `
  
    <div [ngSwitch] = "color">
    <div *ngSwitchCase = "'red'">you picked red color</div>
    <div *ngSwitchCase = "'blue'">you picked blue color</div>
    <div *ngSwitchCase = "'green'">you picked green color</div>
    <div *ngSwitchDefault>pick Again</div>
    </div>
  
  `,
  styles: []
})
export class NgSwitchComponent implements OnInit {
 public color = "orange";
  constructor() { }

  ngOnInit() {
  }

}
