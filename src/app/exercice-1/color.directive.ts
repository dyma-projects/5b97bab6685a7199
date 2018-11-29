import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[color]'
})

export class ColorDirective {
  @HostBinding('style.color') styleCol: string;

  // tslint:disable-next-line:no-input-rename
  @Input('color') coul;

  // @HostListener('window:keydown.ArrowUp', ['$event']) windowKeydownArrowUp($event) {
  // console.log($event)
  // }

  @HostListener('window:keydown.ArrowUp', ['$event']) windowKeydownArrowUp() {
    this.changeColor('blue');
  }
  @HostListener('window:keydown.ArrowDown', ['$event']) windowKeydownArrowDown() {
    this.changeColor('red');
  }
  @HostListener('window:keydown.ArrowLeft', ['$event']) windowKeydownArrowLeft() {
    this.changeColor('orange');
  }
  @HostListener('window:keydown.ArrowRight', ['$event']) windowKeydownArrowRight() {
    this.changeColor('green');
  }

  private changeColor(cou: string) {
    this.styleCol = cou;
  }
}


