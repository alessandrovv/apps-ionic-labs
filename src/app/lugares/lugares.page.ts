import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

  places:any[] = [];

  constructor(
    private http:HttpClient,
  ) { }

  ngOnInit() {
    this.getPlaces().subscribe((data:any)=>{
      this.places = data;
    });
  }

  getPlaces(){
    return this.http.get('../../assets/places.json').pipe(
      map((data:any)=>{
        return data.data;
      }));
  }
}
