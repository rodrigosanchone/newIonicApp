import { Injectable } from '@angular/core';
import {Place} from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[]=[
    {
      id:'1',
      title: 'Torre Eiffel',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/275px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg',
      comments: ['Bonito lugar','Hermoso para visitar']
    },
    {
      id:'2',
      title: 'Estatua de la Libertad',
      img: 'https://static.anuevayork.com/wp-content/uploads/2019/07/11084916/Como-visitar-la-Estatua-de-la-Libertad-en-Nueva-York-1500-2.jpg',
      comments: ['Bonito lugar']
    },
    {
      id:'3',
      title: 'Muralla china',
      img: 'https://historia.nationalgeographic.com.es/medio/2014/06/12/china2_1787x2000.jpg',
      comments: []
    }
  ]

  constructor() { }

  getPlaces(){
    return [...this.places]
  }

  getPlace(placeId:string){
    return{
      ...this.places.find(
        places=>{
          return places.id=== placeId
        }
      )
    }
  }

  addPlace(title, img){
      this.places.push({
        title,
        img,
        comments:[],
        id:this.places.length + 1 + ""
      })
  }

  deletaPlaces(placeId:string){
    this.places = this.places.filter(place=>{
      return place.id !== placeId
    })
  }
}
