import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterValidatorsComponent } from './register-validators.component';

describe('RegisterValidatorsComponent', () => {
  let component: RegisterValidatorsComponent;
  let fixture: ComponentFixture<RegisterValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterValidatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
