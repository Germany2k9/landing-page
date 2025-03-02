import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent  implements OnChanges{

  @Input() tipoDni:string ='DNI'


  formularioDocumento: FormGroup

  variableNueva: string = 'DNI'   

  constructor (private Form: FormBuilder) {
    
    this.formularioDocumento = this.Form.group({
      
      DNI:[''], 
      
      
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
      // this.variableNueva = !changes?.['tipoDni'].firstChange ? changes?.['tipoDni'].currentValue : 'LIBRETA'
      this.variableNueva = changes?. ['tipoDni'].currentValue;
  }

  hasErrors( controlName: string, errorType: string){
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched
  }
   
}
