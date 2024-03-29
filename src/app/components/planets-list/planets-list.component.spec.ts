import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanetMockServiceService } from 'src/app/services/planet-mock-service.service';
import { PlanetService } from 'src/app/services/planet.service';

import { PlanetsListComponent } from './planets-list.component';

describe('PlanetsListComponent', () => {
  let component: PlanetsListComponent;
  let fixture: ComponentFixture<PlanetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsListComponent ],
      providers: [ { provide: PlanetService, useClass: PlanetMockServiceService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
