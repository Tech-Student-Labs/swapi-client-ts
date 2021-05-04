import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import species from '../Species.json';
import { SpeciesService } from './species.service';

describe('SpeciesService', () => {
  let service: SpeciesService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SpeciesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all species', () => {
    httpClientSpy.get.and.returnValue(of(species));
    service.getAll().subscribe(data => {
      expect(data.results[1]).toEqual(species.results[1]);
      expect(data.results.length).toEqual(3);
    });
  });

  it('should get a species by id', () => {
    httpClientSpy.get.and.returnValue(of(species.results[0]));
    service.getById(0).subscribe(data => {
      expect(data).toEqual(species.results[0]);
    });
  });
});
