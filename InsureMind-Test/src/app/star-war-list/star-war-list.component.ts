import { Component } from '@angular/core';
import { StarWarListService } from '../service/star-war-list.service';
import { Router } from '@angular/router';

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
  SpeciesList: any;
  vehicleList: any;
  starShipList: any;

  constructor(private starWarList : StarWarListService , private route:Router){}

    ngOnInit(){
        this.getAllList(this.pageNumber)
    }
    getStarWarList(pagenum : any){
      this.starWarList.getStarWarList(pagenum).subscribe((res:any)=>{
        this.sendPageNum = pagenum
        this.warList = res.results;
        console.log("",res)
    })
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
            this.SpeciesList = res.results;
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
    redirectToAnotherComponentWithId(id : number){
          this.route.navigate(['/starWarProfile',id])
    }
     // for(let i=0 ; i< this.warList.length ; i++){
        //   this.FilmObj = res.results[i].films;
        //   // this.VehicaleObj = res.results[i].vehicles;
        //   this.starWarList.getFilmsDetails(this.FilmObj).subscribe((res: any) => {
        //     this.FilnameFilter = res;
        //     console.log("res", res)
        //   })
        // }
}
