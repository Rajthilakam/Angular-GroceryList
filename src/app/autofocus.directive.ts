import { Directive,OnInit, ElementRef  } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }

}
