import { Directive, ElementRef, HostListener } from '@angular/core';

//Hostlistener input eventlerini mes focus blur ve s bunlari tuta bilmek uchun import edirik
//elementref hansi elementde directive edilirse onu goture bilmek uchundur
@Directive({
  selector: '[appInputEmail]',
})
export class InputEmailDirective {

  constructor(private element: ElementRef) {}

  @HostListener('focus') onFocus() {
    this.element.nativeElement.classList.add('bg-warning'); //directive olan elementin nativeeementinin classlistine add edirik bg-ni
  }

  @HostListener('blur') onBlur() {
    this.element.nativeElement.classList.remove('bg-warning');

    let value: string = this.element.nativeElement.value; //directive olan elementin valuesini gotururuk.

    if(!value.includes('@')){
      this.element.nativeElement.value = value.toLocaleLowerCase()+ '@gmail.com';
    }
  }
}
