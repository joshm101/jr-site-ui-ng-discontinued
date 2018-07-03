import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-file-selection',
  templateUrl: './image-file-selection.component.html',
  styleUrls: ['./image-file-selection.component.css']
})
export class ImageFileSelectionComponent implements OnInit {
  imageSources: string[] = [];
  selectedFiles: File[] = [];

  constructor() { }

  ngOnInit() {
  }

  /**
   * Reads a given File
   * @param file - File to read
   * @return Promise that resolves if provided
   * File was read sucessfully, rejects otherwise.
   */
  private readFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = (event) => {
          // File was read successfully, resolve Promise
          resolve(event)
        }
        fileReader.onerror = (event) => {
          // An error occurred while reading the File, reject Promise
          reject(event)
        }
      }
    )
  }

  /**
   * Handles file(s) selection event
   * @param fileInput - HTML Input element reference
   */
  fileSelectionEvent(fileInput: HTMLInputElement) {
    const { files } = fileInput

    if (files.length > 0) {
      // TODO: check file extensions
      // Get selected files array
      this.selectedFiles = Array.from(files)

      // Maintain ordering of files when reading via this.readFile()
      const readFiles = Promise.all(
        Array.from(files).map(this.readFile)
      )
      
      readFiles.then((events) => {
        // get image sources from each file read event object
        this.imageSources = events.map(event => event['target'].result)
      }).catch(() => {
        // Catch any potential error while reading the selected files
        console.error(
          'An error occurred while reading the seleted file(s).'
        )
      })
    }
  }

}
