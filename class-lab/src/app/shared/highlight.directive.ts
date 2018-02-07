import {Directive, ElementRef, HostListener} from '@angular/core';
@Directive({
		selector:'[apphighlight]'
})
export class HighlightDirective{
	el:ElementRef;
	constructor(el:ElementRef){
		this.el = el;
	}
	private highlight(color){
		this.el.nativeElement.style.backgroundColor=color;
	}

	@HostListener('mouseenter') onMouseEnter(){
		this.highlight('Yellow');
	}
	@HostListener('mouseleave') onMouseLeave(){
		this.highlight('Red');
	}
}