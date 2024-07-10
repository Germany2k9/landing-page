import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  formularioContacto: FormGroup
  usuarioActivo: any ={
    nombre:'Pedro',
    apellido: 'Perez',
    DNI: '12345678',
  } 

  constructor (private Form: FormBuilder) {

    this.formularioContacto = this.Form.group({
      nombre:['', [Validators.required, Validators.minLength(3)]], 
      apellido:['', [Validators.required, Validators.minLength(3)]], 
      DNI:['', [Validators.required, Validators.minLength(3)]], 
        email: ['', [Validators.required, Validators.email]]
      
    })
  }
  
  ngOnInit(): void {
    this.formularioContacto.patchValue({

      nombre: this.usuarioActivo.nombre,
      apellido: this.usuarioActivo.apellido,
      DNI: this.usuarioActivo.DNI
    })
      //this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo)
      // si ya tuvieras informacion del usuario que no keres modificar podes setearlo de esta forma .
      this.formularioContacto.get('nombre')?.disable()
      this.formularioContacto.get('apellido')?.disable()
      this.formularioContacto.get('DNI')?.disable()
  }

  hasErrors( controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }
   

  enviar(){
    console.log(this.formularioContacto)
  }
 
    
}
