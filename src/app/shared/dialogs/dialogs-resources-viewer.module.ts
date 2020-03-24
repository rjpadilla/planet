import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesViewerModule } from '../../resources/view-resources/resources-viewer.module';
import { DialogsResourcesViewerComponent } from './dialogs-resources-viewer.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ResourcesViewerModule
  ],
  exports: [
    DialogsResourcesViewerComponent
  ],
  declarations: [
    DialogsResourcesViewerComponent
  ],
  entryComponents: [
    DialogsResourcesViewerComponent
  ]
})
export class DialogsResourcesViewerModule {}
