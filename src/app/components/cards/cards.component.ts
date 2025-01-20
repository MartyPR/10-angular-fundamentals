import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() insights: Array<{
    number: string;
    name: string;
    position: string;
    description: string;
    link: string;
    additionalClass?: string;
    personalClass?: string;
    textClass?: string;
  }> = [];
}
