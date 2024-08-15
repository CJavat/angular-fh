import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  templateUrl: './zoom-rage-page.component.html',
  styleUrl: './zoom-rage-page.component.css',
})
export class ZoomRagePageComponent implements AfterViewInit {
  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    const map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiY2phdmF0eiIsImEiOiJjbHp1dGFsdmMwMGd1MnJwdGRrNTEycTBtIn0.iZTU2S1v1Ud6rmB6W-jlvw',
      container: this.divMap?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
