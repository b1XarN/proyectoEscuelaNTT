import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsTablePageComponent } from './clients-table-page.component';

describe('ClientsTablePageComponent', () => {
  let component: ClientsTablePageComponent;
  let fixture: ComponentFixture<ClientsTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsTablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
