import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttopComponent } from './parenttop.component';

describe('ParenttopComponent', () => {
  let component: ParenttopComponent;
  let fixture: ComponentFixture<ParenttopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParenttopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParenttopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
