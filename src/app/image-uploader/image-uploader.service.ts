import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ImageUploaderService {
  public selectedImageFiles$: Observable<File[]>;
  public selectedImagePreviews$: Observable<string[]>;
  private selectedImageFiles: BehaviorSubject<File[]>;
  private selectedImagePreviews: BehaviorSubject<string[]>;
  constructor() {
    this.selectedImageFiles = new BehaviorSubject([]);
    this.selectedImagePreviews = new BehaviorSubject([]);
    this.selectedImageFiles$ = this.selectedImageFiles.asObservable();
    this.selectedImagePreviews$ = this.selectedImagePreviews.asObservable();
  }

  /**
   * Reads a given File
   * @param {File} file - File to read
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
   * Function for service consumers to set the selected
   * image files by providing a File array
   * @param {File[]} - Files to set in service.
   */
  public setImageFiles(files: File[]) {
    if (files.length === 0) {
      // no files were selected, don't reset selected
      // images files array
      return;
    }
    this.selectedImageFiles.next(files);
    
    // Maintain ordering of files when reading via this.readFile()
    const readFiles = Promise.all(
      Array.from(files).map(this.readFile)
    )
    
    readFiles.then((events) => {
      // get image sources from each file read event object
      this.selectedImagePreviews.next(
        events.map(event => event['target'].result)
      )
    }).catch(() => {
      // Catch any potential error while reading the selected files
      console.error(
        'An error occurred while reading the seleted file(s).'
      )
    });
  }
}
