<<<<<<< HEAD
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  imports: [],
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss',
})
export class SubMenuComponent {
  @Input() public title: string = ''; // Título principal
  @Input() public cards: { imgSrc: string; altText: string; label: string }[] =
    []; 
    @Input() public links: {
      title: string;
      ref: { href: string; text: string }[];
    } = {
      title: '',
      ref: []
    };

  @Input() public colorCard: string = '#1e3c72';
  @Input() public classCard: string = 'card';
=======
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  imports: [CommonModule],
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss'
})
export class SubMenuComponent {
  // @Input() public items!: string[];
  // @Output() public onClick = new EventEmitter<string>();
  public onClick = output<string>();
  public items = input<string[]>();

  handleClick(item: string): void {
    this.onClick.emit(item);
  }
>>>>>>> 1bdb79270d4894d0982ab3287b881b3ae77b3143
}
