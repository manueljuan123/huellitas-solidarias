import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/gallery-images';

@Component({
  selector: 'app-parque-principal',
  templateUrl: './parque-principal.component.html',
  styleUrls: ['./parque-principal.component.scss']
})
export class ParquePrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title:string = "Parque Principal";
  subtitle:string = "Córdoba, Quindío";

  data: Item[] = [
    {
      imageSrc: "assets/img/events/cordoba/parque-principal/1.jpg",
      imageAlt: "1"
    },
    {
      imageSrc: "assets/img/events/cordoba/parque-principal/2.jpg",
      imageAlt: "2"
    },
    {
      imageSrc: "assets/img/events/cordoba/parque-principal/3.jpg",
      imageAlt: "3"
    },
    {
      imageSrc: "assets/img/events/cordoba/parque-principal/4.jpg",
      imageAlt: "4"
    },
    {
      imageSrc: "assets/img/events/cordoba/parque-principal/5.jpg",
      imageAlt: "5"
    },
    {
      imageSrc: "assets/img/events/cordoba/parque-principal/6.jpg",
      imageAlt: "6"
    },
    {
      imageSrc: "assets/img/events/cordoba/parque-principal/7.jpg",
      imageAlt: "7"
    },
    {
      imageSrc: "assets/img/events/cordoba/parque-principal/8.jpg",
      imageAlt: "8"
    },
    {
      imageSrc: "assets/img/events/cordoba/parque-principal/9.jpg",
      imageAlt: "9"
    },
    {
      imageSrc: "assets/img/events/cordoba/parque-principal/10.jpg",
      imageAlt: "10"
    },
    {
      imageSrc: "assets/img/events/cordoba/parque-principal/11.jpg",
      imageAlt: "11"
    },
    {
      imageSrc: "assets/img/events/cordoba/parque-principal/12.jpg",
      imageAlt: "12"
    },
  ]
}
