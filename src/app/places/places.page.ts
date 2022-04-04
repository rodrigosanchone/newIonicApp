import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from './places.service'; 

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
   
  places=[]
 
  constructor(
    private placesService: PlacesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.places= this.placesService.getPlaces()
  }

  ionViewWillEnter(){
    this.places=this.placesService.getPlaces()
  }

  addNewPlace(){
    console.log('works');
    this.router.navigate(['/new-place'])
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

}
