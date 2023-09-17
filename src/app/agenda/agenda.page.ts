import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {map} from 'rxjs';
import { IonModal } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  isModalOpen:boolean = false;
  contactos:any[] = [];
  formContacto:FormGroup;
  index = 0;

  constructor(
    private http:HttpClient,
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.getContactos().subscribe((data:any)=>{
      this.contactos = data;
    });
    this.setForm();
  }

  getContactos(){
    return this.http.get('../../assets/agenda.json').pipe(
      map((data:any)=>{
        return data.data;
      }));
  }

  setOpen(isOpen:boolean){
    this.isModalOpen = isOpen;
    this.index = -1;
    this.formContacto.reset();
  }

  setForm(){
    this.formContacto = this.fb.group({
      nombre:[null],
      email:[null],
      numero:[null]
    })
  }

  guardar(){
    const controls = this.formContacto.controls;

    const data = {
      nombre : controls['nombre'].value,
      email: controls['email'].value,
      numero:controls['numero'].value
    }

    if(this.index !=-1){
      this.contactos[this.index] = data;
    }else{
      this.contactos.push(data);
    }
    
    this.isModalOpen = false;
  }

  editar(contacto:any, index){
    console.log(contacto);
    this.formContacto.controls['nombre'].setValue(contacto.nombre);
    this.formContacto.controls['email'].setValue(contacto.email);
    this.formContacto.controls['numero'].setValue(contacto.numero);
    console.log(this.contactos);
    this.index = index;
    this.isModalOpen = true;

  }

  eliminar(index){
    this.contactos.splice(index, 1);
  }
}
