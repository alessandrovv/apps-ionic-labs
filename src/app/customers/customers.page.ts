import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  customers:any[] =[];

  constructor(
    private router:Router,
    private http:HttpClient,
  ) { }

  ngOnInit() {
    this.getCustomers().subscribe(data=>{
      this.customers = data;
    });
  }

  navHome(){
    this.router.navigate(['/home']);
  }

  getCustomers(){
    return this.http.get('../../assets/customers.json').pipe(
      map((data:any)=>{
        return data.data;
      }));
  }

}
