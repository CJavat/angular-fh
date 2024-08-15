import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  templateUrl: './zoom-rage-page.component.html',
  styleUrl: './zoom-rage-page.component.css',
})
export class ZoomRagePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map')
  public divMap?: ElementRef;

  public zoom: number = 12;
  public map?: mapboxgl.Map;
  public currentLngLat?: mapboxgl.LngLat = new mapboxgl.LngLat(
    -103.33141738106093,
    20.73754141628386
  );

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiY2phdmF0eiIsImEiOiJjbHp1dGFsdmMwMGd1MnJwdGRrNTEycTBtIn0.iZTU2S1v1Ud6rmB6W-jlvw',
      container: this.divMap?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat,
      zoom: this.zoom,
    });

    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map!.remove();
  }

  mapListeners() {
    if (!this.map) throw 'Mapa no inicializado';

    this.map.on('zoom', (evt) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (evt) => {
      if (this.map!.getZoom() < 18) return;

      this.map!.zoomTo(18);
    });

    this.map.on('move', (evt) => {
      this.currentLngLat = this.map!.getCenter();
      const { lng, lat } = this.currentLngLat;
    });
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged(value: string) {
    this.zoom = +value;
    this.map!.zoomTo(this.zoom);
  }
}
