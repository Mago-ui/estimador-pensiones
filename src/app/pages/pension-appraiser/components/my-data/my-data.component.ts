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


interface MyFormModel {
  Nombre: FormControl<string>;
  dia: FormControl<number>;
  mes: FormControl<string>;
  anio: FormControl<number>;
  edadRetiro: FormControl<number>;
  genero: FormControl<string>;
  salud: FormControl<string>;
}

@Component({
  selector: 'app-my-data',

  imports: [ReactiveFormsModule,NzSelectModule,NzSliderModule,NzInputNumberModule,NzGridModule,CommonModule,NzRadioModule,NzButtonModule],
  templateUrl: './my-data.component.html',
  styleUrl: './my-data.component.scss'
})
export class MyDataComponent implements OnInit{

  dataForm!: FormGroup<MyFormModel>;
  edadRetiro: number = 1; 

  mostrarAlerta: boolean = false;

  ngOnInit(): void {
    this.dataForm = new FormGroup<MyFormModel>({
      Nombre: new FormControl('', { nonNullable: true }),
      dia: new FormControl(0, { nonNullable: true }),
      mes: new FormControl('', { nonNullable: true }),
      anio: new FormControl(0, { nonNullable: true }),
      edadRetiro: new FormControl(1, { nonNullable: true }),
      genero: new FormControl('Masculino', { nonNullable: true }),
      salud: new FormControl('Sano', { nonNullable: true })
    });
  }

  onSiguiente(): void {
    this.mostrarAlerta = !this.mostrarAlerta;
  }
}
