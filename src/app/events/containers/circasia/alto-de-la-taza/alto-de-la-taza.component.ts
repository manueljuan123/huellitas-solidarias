import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/gallery-images';

@Component({
  selector: 'app-alto-de-la-taza',
  templateUrl: './alto-de-la-taza.component.html',
  styleUrls: ['./alto-de-la-taza.component.scss']
})
export class AltoDeLaTazaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Alto De La Taza"
  subtitle = "Circasia, Quindío"

  data: Item[] =[
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/1.jpg",
      imageAlt: "1"
    },
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/2.jpg",
      imageAlt: "2"
    },
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/3.jpg",
      imageAlt: "3"
    },
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/4.jpg",
      imageAlt: "4"
    },
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/5.jpg",
      imageAlt: "5"
    },
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/6.jpg",
      imageAlt: "6"
    },
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/7.jpg",
      imageAlt: "7"
    },
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/8.jpg",
      imageAlt: "8"
    },
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/9.jpg",
      imageAlt: "9"
    },
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/10.jpg",
      imageAlt: "10"
    },
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/11.jpg",
      imageAlt: "11"
    },
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/12.jpg",
      imageAlt: "12"
    },
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/13.jpg",
      imageAlt: "13"
    },
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/14.jpg",
      imageAlt: "14"
    },
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/15.jpg",
      imageAlt: "15"
    },
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/16.jpg",
      imageAlt: "16"
    },
    {
      imageSrc: "assets/img/events/circasia/alto-de-la-taza/17.jpg",
      imageAlt: "17"
    },
  ]

}
