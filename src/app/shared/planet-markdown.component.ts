import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'planet-markdown',
  template: `
    <ng-container *ngFor="let item of textAndResources">
      <planet-resources-viewer *ngIf="item.resource" [resourceId]="item.id"></planet-resources-viewer>
      <td-markdown [content]="item" [hostedUrl]="couchAddress"></td-markdown>
    </ng-container>
  `
})
export class PlanetMarkdownComponent implements OnInit {

  @Input() content: string;
  textAndResources: any[];
  couchAddress = `${environment.couchAddress}/`;

  ngOnInit() {
    this.textAndResources = this.content.split('${').map(string => {
      return string.startsWith('resource') ? { resource: true, id: string.split(':')[1] } : string;
    });
  }

}
