import { Component } from '@angular/core';
import { StarWarListService } from '../service/star-war-list.service';
import { Router } from '@angular/router';
import { forkJoin, from, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-star-war-list',
  templateUrl: './star-war-list.component.html',
  styleUrl: './star-war-list.component.css'
})
export class StarWarListComponent {
  warList: any;
  pageNumber:any = 1;
  sendPageNum: any;
  FilnameFilter: any;
  planetList: any;
  FilmList: any;
  speciesList: any;
  vehicleList: any;
  starShipList: any;
  router: any;
  filters = {
    film: '',
    species: '',
    vehicle: '',
    starship: '',
    birthYear: '',
    birthYearAll: ''
  };
  constructor(private starWarList : StarWarListService , private route:Router){}

    ngOnInit(){
        this.getAllList(this.pageNumber)
    }
    getStarWarList(pagenum : any){
      this.starWarList.getStarWarList(pagenum).subscribe((res:any)=>{
        this.sendPageNum = pagenum
        this.warList = res.results;
        console.log("",res)
        this.fetchAllData(this.sendPageNum)
     })
    }

    fetchAllData(sendPageNum: any): void {
     this.warList.forEach((character : any, index: any) => {
        this.loadHomeworld(character);
        this.loadSpecies(character);
        this.loadFilms(character);
        this.loadVehicles(character);
        this.loadStarships(character);
      });
     
    }
    loadHomeworld(character: any) {
      this.starWarList.getHomeworld(character.homeworld)
        .subscribe(data => {
          character.homeworldData = data;
          console.log('Homeworld:', character.homeworldData);
        });
    }
  
    loadSpecies(character: any) {
      this.starWarList.getSpecies(character.species)
        .subscribe(data => {
          character.speciesData = data;
          console.log('Species:', character.speciesData);
        });
    }
  
    loadVehicles(character: any) {
      this.starWarList.getVehicles(character.vehicles)
        .subscribe(data => {
          character.vehiclesData = data;
          console.log('Films:', character.filmsData);
          console.log('Warlist:',this.warList);
        });
    }
    loadFilms(character: any) {
      this.starWarList.getFilms(character.films)
        .subscribe(data => {
          character.filmsData = data;
          console.log('Films:', character.filmsData);
          console.log('Warlist:',this.warList);
        });
    }
    loadStarships(character: any) {
      this.starWarList.getStarships(character.starships)
        .subscribe(data => {
          character.starshipsData = data;
         console.log('Warlist:',this.warList);
        });
    }
    getPlanetList(pagenum : any){
      this.starWarList.getPlanetsList(pagenum).subscribe((res:any)=>{
          this.planetList = res.results;
      })
    }
    getFilmList(pagenum : any){
        this.starWarList.getFilmList(pagenum).subscribe((res:any)=>{
            this.FilmList = res.results;
        })
    }
    getSpeicesList(pagenum : any){
        this.starWarList.getSpeicesList(pagenum).subscribe((res:any)=>{
            this.speciesList = res.results;
        })
    }
   
    getVehiclesList(pagenum : any){
        this.starWarList.getVehiclesList(pagenum).subscribe((res:any)=>{
            this.vehicleList = res.results;
        })
    }
    getStarShipsList(pagenum : any){
        this.starWarList.getStarShipsList(pagenum).subscribe((res : any)=>{
            this.starShipList = res.results;
        })
    }

    onPageClick(pagenum : any){
      this.getAllList(pagenum)
}
  getAllList(pagenum : any){
    this.getStarWarList(pagenum)
    this.getPlanetList(pagenum)
    this.getFilmList(pagenum)
    this.getSpeicesList(pagenum)
    this.getVehiclesList(pagenum)
    this.getStarShipsList(pagenum)
  }
    redirectToAnotherComponentWithId(data: any ,id : number){
      this.starWarList.setSingleWarriorData(data)
         this.route.navigate(['/starWarProfile',id]);

    }
    onSearch() {
      let filteredArr = this.warList.filter((character: any) => {
        const matchesSpecies = this.filters.species && character.speciesData ? character.speciesData.some((species : any) => species.name.toLowerCase().includes(this.filters.species.toLowerCase())) : false;
        const matchesFilm = this.filters.film && character.filmsData ? character.filmsData.some((film : any) => film.title.toLowerCase().includes(this.filters.film.toLowerCase())) : false;
        const matchesStarship = this.filters.starship && character.starshipsData ? character.starshipsData.some((starship : any) => starship.name.toLowerCase().includes(this.filters.starship.toLowerCase())) : false;
        const matchesBirthYear = this.filters.birthYear && character.birth_year ? character.birth_year.includes(this.filters.birthYear) : false;
        const matchesVehicles = this.filters.vehicle && character.vehiclesData ? character.vehiclesData.includes(this.filters.vehicle) : false;
  
       // return (matchesSpecies && matchesFilm) || matchesSpecies || matchesFilm || (matchesStarship && matchesBirthYear) || matchesVehicles || matchesStarship;
     return (matchesSpecies && matchesFilm) || (matchesStarship && matchesVehicles) || matchesFilm || matchesSpecies || matchesBirthYear 
      });
      this.warList = filteredArr
    }
}
