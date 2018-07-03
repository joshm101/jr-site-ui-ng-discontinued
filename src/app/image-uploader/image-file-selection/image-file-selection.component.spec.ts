import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFileSelectionComponent } from './image-file-selection.component';

describe('ImageFileSelectionComponent', () => {
  let component: ImageFileSelectionComponent;
  let fixture: ComponentFixture<ImageFileSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageFileSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFileSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
