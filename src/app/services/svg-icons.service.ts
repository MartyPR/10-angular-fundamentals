import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SvgIconsService {
  private icons: { [key: string]: string } = {};

  constructor(private sanitizer: DomSanitizer) {}

  registerIcon(name: string, path: string): void {
    this.icons[name] = path;
  }

  getIcon(name: string): string | null {
    return this.icons[name] || null;
  } 
}
