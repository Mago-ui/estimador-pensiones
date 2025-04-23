import { Component,OnInit} from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


interface MyFormModel {
  Nombre: FormControl<string>;
  fechaCumple: FormControl<Date>;
  edadToday: FormControl<number>;
  anio: FormControl<number>;
  edadRetiro: FormControl<number>;
  genero: FormControl<string>;
  salud: FormControl<string>;
}

@Component({
  selector: 'app-my-data',

  imports: [
    ReactiveFormsModule,
    NzSelectModule,
    NzSliderModule,
    NzInputNumberModule,
    NzGridModule,
    CommonModule,
    NzRadioModule,
    NzButtonModule,
    NzDatePickerModule
  ],
  templateUrl: './my-data.component.html',
  styleUrl: './my-data.component.scss'
})
export class MyDataComponent implements OnInit{

  dataForm!: FormGroup<MyFormModel>;
  edadRetiro: number = 43; 

  mostrarAlerta: boolean = false;

  ngOnInit(): void {
    this.dataForm = new FormGroup<MyFormModel>({
      Nombre: new FormControl('', { nonNullable: true }),
      fechaCumple: new FormControl(new Date(), { nonNullable: true }),
      edadToday: new FormControl(0, { nonNullable: true }),
      anio: new FormControl(0, { nonNullable: true }),
      edadRetiro: new FormControl(1, { nonNullable: true }),
      genero: new FormControl('Masculino', { nonNullable: true }),
      salud: new FormControl('Sano', { nonNullable: true })
    });

    this.dataForm.get('fechaCumple')?.valueChanges.subscribe(() => {
      this.onDataBirth();
    });
  
    this.onDataBirth();

  }


  onDataBirth(): void {
    const fechaNac = this.dataForm.get('fechaCumple')?.value;
  
    if (fechaNac) {
      const hoy = new Date();
  
      let edad = hoy.getFullYear() - fechaNac.getFullYear();
  
      const mes = hoy.getMonth() - fechaNac.getMonth();
      const dia = hoy.getDate() - fechaNac.getDate();
  
      if (mes < 0 || (mes === 0 && dia < 0)) {
        edad--;
      }
  
      this.dataForm.get('edadToday')?.setValue(edad);
      console.log(this.dataForm.get('edadToday')?.value)
    }
  }

  onSiguiente(): void {
    this.mostrarAlerta = !this.mostrarAlerta;
  }
}
