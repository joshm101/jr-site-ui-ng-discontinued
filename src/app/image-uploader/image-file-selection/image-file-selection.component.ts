import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ImageUploaderService } from '../image-uploader.service';

@Component({
  selector: 'app-image-file-selection',
  templateUrl: './image-file-selection.component.html',
  styleUrls: ['./image-file-selection.component.css']
})
export class ImageFileSelectionComponent implements OnInit {
  selectedImagePreviews$: Observable<string[]>;

  constructor(
    private imageUploaderService: ImageUploaderService
  ) {
    this.selectedImagePreviews$ = this.imageUploaderService.selectedImagePreviews$
  }

  ngOnInit() {
  }

  /**
   * Handles file(s) selection event
   * @param fileInput - HTML Input element reference
   */
  fileSelectionEvent(fileInput: HTMLInputElement) {
    const { files } = fileInput

    // TODO: check file extensions
    // Get selected files array and set in service
    this.imageUploaderService.setImageFiles(
      Array.from(files || [])
    )
  }

}
