import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import {AlertController} from '@ionic/angular'
@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place:Place

  constructor(
    private activated: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router,
    private alert: AlertController
  ) { }

  ngOnInit() {
    this.activated.paramMap.subscribe(paramMap=>{
     
        const recipeId = paramMap.get('placeId')
        //onsole.log(recipeId);
        this.place= this.placesService.getPlace(recipeId);
        console.log(this.place);
    })
  }

  async delete(){
     
   const alertElement= await this.alert.create({
      header: 'Esta seguro de querere eliminar',
      message: 'Ten cuidado',
      buttons:[
         {
           text: 'Cancel',
           role: 'cancel'
         },
         {
           text: 'Borrar',
           handler:()=>{
            this.placesService.deletaPlaces(this.place.id);
             this.router.navigate(['/places'])
           }
         }
      ]
    });
     await alertElement.present();
   

   
  }

}
