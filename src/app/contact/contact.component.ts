import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  formularioContacto: FormGroup
  tipoDni:string =''
   mostrarDNI: boolean = false

  // usuarioActivo: any ={
  //   nombre:'Pedro',
  //   apellido: 'Perez',
  //   DNI: '12345678',
  // } 

  constructor (private Form: FormBuilder) {
    //podemos NO setear las validaciones 
    this.formularioContacto = this.Form.group({
      nombre:['', [Validators.required, Validators.minLength(3)]],
      // xample  apellido: [''], 
      apellido:['', [Validators.required, Validators.minLength(3)]], 
      tipoDni:[''], 
        email: ['', [Validators.required, Validators.email]]
      
    })
  }
  
  ngOnInit(): void {
    //Tambien podemos setear validadores por fuera del constructor EJM
    //this.formularioContacto.get('apellido')?.setValidators([Validators.required, Validators.minLength(3)]); 
    //DEPENDIENDO EL TIPO DE PANTALLA QUE TENES UN CAMPO ES OBLIGATORIO O NO ES OBLIGATORIO

    //if (this.usuarioActivo.apellido === '') this.formularioContacto.get('apellido')?.setValidators([Validators.required, Validators.minLength(3)]);
    
    // el caso contrario si nosotros queremos SACARLE la validacion
    // this.formularioContacto.get('apellido')?.clearValidators()
    // this.formularioContacto.get('apellido')?.updateValueAndValidity()


    // this.formularioContacto.patchValue({

    //   nombre: this.usuarioActivo.nombre,
    //   //apellido: this.usuarioActivo.apellido,
    //   DNI: this.usuarioActivo.DNI
    // })
    //   //this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo)
    //   // si ya tuvieras informacion del usuario que no keres modificar podes setearlo de esta forma .
    //   this.formularioContacto.get('nombre')?.disable()
    //   //this.formularioContacto.get('apellido')?.disable()
    //   this.formularioContacto.get('DNI')?.disable()

    //SUSCRIPCIONES

    this.formularioContacto.get('nombre')?.setValue('Juan')
    this.formularioContacto.get('nombre')?.disable()
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value =>{
      this.mostrarDNI = value != ''
       this.tipoDni= value    
      })
  }

    ngOnDestroy(): void{
      console.log('Se destruyo el componente anterior')
    }

  hasErrors( controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }
   

  enviar(){
    console.log(this.formularioContacto)
  }
    
}
