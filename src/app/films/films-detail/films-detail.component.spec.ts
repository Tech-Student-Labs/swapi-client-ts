import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsDetailComponent } from './films-detail.component';
import { filmFactory } from '../../shared/factories';

describe('FilmsDetailComponent', () => {
  let component: FilmsDetailComponent;
  let fixture: ComponentFixture<FilmsDetailComponent>;
  let html;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsDetailComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    component.film = filmFactory('My Film');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render film details', () => {
    expect(html.querySelector('h3').textContent).toEqual('My Film');
  });


});