import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildbottomComponent } from './childbottom.component';

describe('ChildbottomComponent', () => {
  let component: ChildbottomComponent;
  let fixture: ComponentFixture<ChildbottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildbottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
