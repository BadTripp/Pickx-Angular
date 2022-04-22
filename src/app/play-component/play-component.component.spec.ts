import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayComponentComponent } from './play-component.component';

describe('PlayComponentComponent', () => {
  let component: PlayComponentComponent;
  let fixture: ComponentFixture<PlayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
