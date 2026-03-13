import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgFallback]',
  standalone: true,
})
export class ImgFallbackDirective {
  @Input('appImgFallback') fallbackSrc = '';

  constructor(private el: ElementRef<HTMLImageElement>) {}

  @HostListener('error')
  onError(): void {
    if (this.fallbackSrc) {
      this.el.nativeElement.src = this.fallbackSrc;
    }
  }
}
