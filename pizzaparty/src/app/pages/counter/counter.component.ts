import { Component } from '@angular/core';

import { CounterComponent as CounterUiComponent } from '../../components/counter/counter.component';

@Component({
  // selector: 'app-counter-page',
  standalone: true,
  imports: [CounterUiComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

}
