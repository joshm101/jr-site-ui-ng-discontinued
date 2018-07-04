import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { ImageFileSelectionComponent } from './image-file-selection/image-file-selection.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageUploaderService } from './image-uploader.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [ImageUploaderComponent],
  declarations: [ImageFileSelectionComponent, ImageUploaderComponent],
  providers: [ImageUploaderService]
})
export class ImageUploaderModule { }
