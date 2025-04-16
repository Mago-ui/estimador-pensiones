import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySavingsComponent } from './my-savings.component';

describe('MySavingsComponent', () => {
  let component: MySavingsComponent;
  let fixture: ComponentFixture<MySavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySavingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
