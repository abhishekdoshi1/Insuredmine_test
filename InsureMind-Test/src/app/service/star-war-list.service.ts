import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarListService {

  private people = 'https://swapi.dev/api/people';
  private planets= "https://swapi.dev/api/planets";
  private films = "https://swapi.dev/api/films";
  private species = "https://swapi.dev/api/species";
  private vehicles = "https://swapi.dev/api/vehicles"; 
  private starships = "https://swapi.dev/api/starships";
  data: any;

  constructor(private http:HttpClient) { }

  getStarWarList(pagenum : any){
      return this.http.get(`${this.people}/?page=${pagenum}`)
  }
  getPlanetsList(pagenum : any){
    return this.http.get(`${this.planets}/?page=${pagenum}`)
  }
  getFilmList(pagenum : any){
    return this.http.get(`${this.films}/?page=${pagenum}`)
  }
  getSpeicesList(pagenum : any){
    return this.http.get(`${this.species}/?page=${pagenum}`)
  }
  getVehiclesList(pagenum : any){
    return this.http.get(`${this.vehicles}/?page=${pagenum}`)
  }
  getStarShipsList(pagenum : any){
    return this.http.get(`${this.starships}/?page=${pagenum}`)
  }
  getSingleSpecies(url :any){
    return this.http.get(url)
  }
 getFilmsDetails(filmUrl : string[]){
      const fimobservable = filmUrl.map(url => this.http.get(url))
      return forkJoin(fimobservable)
  }
  getVehiclesDetails(vehiCles : string[]){
      const vehiclesDetails = vehiCles.map(url => this.http.get(url))
      return  forkJoin(vehiclesDetails)
  }
  geStarShipDetails(starShip: string[]){
    const vehiclesDetails = starShip.map(url => this.http.get(url))
    return  forkJoin(vehiclesDetails)
  }
  getStarWarListSinglePeople(id: number){
    return this.http.get(`${this.people}/${id}`)
  }

  setSingleWarriorData(data: any) {
    this.data = data;
  }

  getSingleWarriorData() {
    return this.data;
  }
  getHomeworld(url: string): Observable<any> {
    return this.http.get(url);
  }

  getSpecies(urls: string[]): Observable<any[]> {
    const requests = urls.map(url => this.http.get(url));
    return forkJoin(requests);
  }

  getFilms(urls: string[]): Observable<any[]> {
    const requests = urls.map(url => this.http.get(url));
    return forkJoin(requests);
  }
  getVehicles(urls: string[]): Observable<any[]> {
    const requests = urls.map(url => this.http.get(url));
    return forkJoin(requests);
  }
  getStarships(urls: string[]): Observable<any[]> {
    const requests = urls.map(url => this.http.get(url));
    return forkJoin(requests);
  }
}
