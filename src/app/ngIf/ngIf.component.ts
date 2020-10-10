import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngIf',
  template: `
    <div *ngIf="displayName; then thenBlock; else elseBlock ">
        
    </div>
    <ng-template #thenBlock>
    <h2 >
    {{name}}
    </h2>
    </ng-template>

    <ng-template #elseBlock>
    <h2 >
    name is hidden
    </h2>
    </ng-template>



    `,
  styleUrls: []
})
export class NgIfComponent implements OnInit {
    displayName =false;
    name="CodeVolution";
  constructor() { }

  ngOnInit() {
  }

}
