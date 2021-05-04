import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from "@angular/common/http/testing";
import { of } from "rxjs";
import Character from '../app/models/Character';
import characters from "../app/tests/data/Character.json";
import { CharacterService } from "../app/services/character.service";
import { convertCharacter } from "../app/shared/utilities";

describe('CharacterService', () => {
  let service: CharacterService;
  let httpClientSpy: {get: jasmine.Spy};
  let httpTestingController: HttpClientTestingModule;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.inject(CharacterService);
    httpTestingController = TestBed.get(HttpClientTestingModule);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCharacter should be definied and return the characters', () => {
    const OneCharacter: Character = convertCharacter(characters[0]);

    httpClientSpy.get.and.returnValue(of(OneCharacter));
    expect(service.getCharacter()).toBeDefined();

    service.getCharacter(1).subscribe((data)=>{
      expect(data).toEqual(OneCharacter);
    })

  });

  it('getCharacters should be defined and return the list of characters', () => {
    //convert from underscores to camelCase
    const listOfCharacters: Character[] = characters.map(char => convertCharacter(char));

    httpClientSpy.get.and.returnValue(of(listOfCharacters));

    service.getCharacters(1).subscribe((data)=>{
      //compare lengths of data and mock data
      expect(data.length).toEqual(listOfCharacters.length);
      expect(data).toEqual(listOfCharacters);
    });
  });
  

});
