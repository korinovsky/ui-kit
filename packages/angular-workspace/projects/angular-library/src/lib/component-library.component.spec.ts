import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLibraryComponent } from './angular-library.component';

describe('ComponentLibraryComponent', () => {
  let component: ComponentLibraryComponent;
  let fixture: ComponentFixture<ComponentLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
