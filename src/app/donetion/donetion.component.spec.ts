import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonetionComponent } from './donetion.component';

describe('DonetionComponent', () => {
  let component: DonetionComponent;
  let fixture: ComponentFixture<DonetionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonetionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
