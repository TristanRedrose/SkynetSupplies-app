import { Component, Input } from '@angular/core';

@Component({
  selector: 'spinner-component',
  templateUrl: './spinner.component.html',
  styleUrls: [`./spinner.component.scss`]
})
export class SpinnerComponent {

  @Input() loading: boolean | null = false;

}