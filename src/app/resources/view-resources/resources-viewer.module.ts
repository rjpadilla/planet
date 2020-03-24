import { MaterialModule } from '../../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesViewerComponent } from './resources-viewer.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ResourcesViewerComponent
  ],
  declarations: [
    ResourcesViewerComponent
  ],
  entryComponents: [
    ResourcesViewerComponent
  ]
})
export class ResourcesViewerModule {}
