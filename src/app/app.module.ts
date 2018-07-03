import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageUploaderModule } from './image-uploader/image-uploader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
