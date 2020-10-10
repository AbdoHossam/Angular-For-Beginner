import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  template:`
  <div *ngFor="let color of colors; first as f">
    <h2 *ngIf="f; else elseBlock;">{{color}}</h2>  
  </div>
  <ng-template #elseBlock></ng-template>
  `,
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {

  public colors =["red","blue","green","yellow"];
  constructor() { }

  ngOnInit() {
  }

}
