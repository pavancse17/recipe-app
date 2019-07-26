import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') mouseclick() {
   this.isOpen = !this.isOpen;
  }
}
