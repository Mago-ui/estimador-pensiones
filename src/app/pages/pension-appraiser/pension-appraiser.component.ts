import { Component } from '@angular/core';
import { MyDataComponent } from './components/my-data/my-data.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pension-appraiser',
  imports:[MyDataComponent,CommonModule],
  templateUrl: './pension-appraiser.component.html',
  styleUrl: './pension-appraiser.component.scss'
})
export class PensionAppraiserComponent {
  value: number = 0;
  constructor() {}



  HandleChangeContent(data: number){
    this.value = data;
  }
}
