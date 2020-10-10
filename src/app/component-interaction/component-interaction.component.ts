import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template:`
    <h2>{{"Hello " + name }}</h2>
    <button (click)="fireAction()">Send Event</button>
  ` ,
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
  
  // @Input() public parentData;
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireAction(){
    this.childEvent.emit('Hello Codevolution');
  }

}
