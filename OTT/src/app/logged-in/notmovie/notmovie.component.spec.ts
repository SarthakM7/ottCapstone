import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotmovieComponent } from './notmovie.component';

describe('NotmovieComponent', () => {
  let component: NotmovieComponent;
  let fixture: ComponentFixture<NotmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotmovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
