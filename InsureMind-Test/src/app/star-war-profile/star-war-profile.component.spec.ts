import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarProfileComponent } from './star-war-profile.component';

describe('StarWarProfileComponent', () => {
  let component: StarWarProfileComponent;
  let fixture: ComponentFixture<StarWarProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarWarProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarWarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
