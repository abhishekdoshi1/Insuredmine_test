import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarListComponent } from './star-war-list.component';

describe('StarWarListComponent', () => {
  let component: StarWarListComponent;
  let fixture: ComponentFixture<StarWarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarWarListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarWarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
