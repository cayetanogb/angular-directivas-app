import { Directive, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Input } from "@angular/core";

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es obligatorio';

  htmlElemet: ElementRef<HTMLElement>;

  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean) {
    if (valor) {
      this.htmlElemet.nativeElement.classList.add('hidden');
    } else {
      this.htmlElemet.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElemet = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['mensaje']) {
    //   const mensaje = changes['mensaje'].currentValue;
    //   this.htmlElemet.nativeElement.innerText = mensaje;
    // }

    // if (changes['color']) {
    //   const color = changes['color'].currentValue;
    //   this.htmlElemet.nativeElement.style.color = color;
    // }

    // console.log(changes);
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }

  setColor(): void {
    this.htmlElemet.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElemet.nativeElement.innerText = this._mensaje;
  }

  setEstilo(): void {
    this.htmlElemet.nativeElement.classList.add('form-text');
  }

}
