import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { StarWarListService } from '../service/star-war-list.service';

@Component({
  selector: 'app-star-war-profile',
  templateUrl: './star-war-profile.component.html',
  styleUrl: './star-war-profile.component.css'
})
export class StarWarProfileComponent {
  id: any;
  getStarWarDetails: any;
  FilmObj = [];
  VehicaleObj = []
  StarShip = []
  FilmDetails: any;
  vehicleList: any;
  startShipList: any;
  constructor(private route :ActivatedRoute , private starWarList : StarWarListService){}

  ngOnInit(){
        this.route.paramMap.subscribe(param =>{
            this.id =+ param.get('id')!;
            console.log("id=",this.id);
        })
      this.starWarList.getStarWarList(this.id).subscribe((res:any)=>{
            this.getStarWarDetails = res.results[this.id];
            console.log("this.getStarWarDetails",this.getStarWarDetails)
            this.FilmObj = this.getStarWarDetails.films;
            this.VehicaleObj = this.getStarWarDetails.vehicles;
            this.StarShip = this.getStarWarDetails.starships;
            this.getDataFromObservalbes()
      })
     
  }
  getDataFromObservalbes(){
      this.starWarList.getFilmsDetails(this.FilmObj).subscribe((res:any)=>{
            this.FilmDetails = res;
            console.log("this.FilmDetails",this.FilmDetails)
      })
      this.starWarList.getVehiclesDetails(this.VehicaleObj).subscribe((res:any)=>{
        this.vehicleList = res;
        console.log("this.vehicleList",this.vehicleList)
      })
      this.starWarList.geStarShipDetails(this.StarShip).subscribe((res:any)=>{
        this.startShipList = res;
        console.log("this.startShipList",this.startShipList)
  })
  }
}
