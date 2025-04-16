import { Component } from '@angular/core';
import { MyDataComponent } from './components/my-data/my-data.component';

@Component({
  selector: 'app-pension-appraiser',
  imports:[MyDataComponent],
  templateUrl: './pension-appraiser.html',
  styleUrl: './pension-appraiser.scss'
})
export class PensionAppraiserComponent {
  constructor() {}
}
