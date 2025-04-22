import { Component } from '@angular/core';
import { MyDataComponent } from './components/my-data/my-data.component';
import { CommonModule } from '@angular/common';
import { MySavingsComponent } from './components/my-savings/my-savings.component';
import { MyFamilyComponent } from './components/my-family/my-family.component';

@Component({
  selector: 'app-pension-appraiser',
  imports:[MyDataComponent,CommonModule,MySavingsComponent,MyFamilyComponent],
  templateUrl: './pension-appraiser.component.html',
  styleUrl: './pension-appraiser.component.scss'
})
export class PensionAppraiserComponent {
  value: number = 1;
  constructor() {}



  HandleChangeContent(data: number){
    this.value = data;
  }
}
