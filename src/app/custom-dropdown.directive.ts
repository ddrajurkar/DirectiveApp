import { Directive, HostListener,HostBinding  } from '@angular/core';

@Directive({
  selector: '[appCustomDropdown]'  
})
export class CustomDropdownDirective {
constructor() { }
private isOpen : boolean;
  
 @HostBinding('class.open') get opened()
{
return this.isOpen;
}
  @HostListener('click') open() {
    this.isOpen = true;
  }
  @HostListener('mouseleave') close()
  {
    this.isOpen = false;
  }

}
