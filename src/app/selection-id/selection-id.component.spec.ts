import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionIdComponent } from './selection-id.component';

describe('SelectionIdComponent', () => {
  let component: SelectionIdComponent;
  let fixture: ComponentFixture<SelectionIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
