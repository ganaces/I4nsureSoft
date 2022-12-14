import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinistroComponent } from './sinistro.component';

describe('SinistroComponent', () => {
  let component: SinistroComponent;
  let fixture: ComponentFixture<SinistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
