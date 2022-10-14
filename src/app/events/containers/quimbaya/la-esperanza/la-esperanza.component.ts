import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/gallery-images';

@Component({
  selector: 'app-la-esperanza',
  templateUrl: './la-esperanza.component.html',
  styleUrls: ['./la-esperanza.component.scss']
})
export class LaEsperanzaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "La Esperanza"
  subtitle = "Quimbaya, Quindío"

  data: Item[] = [
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/1.jpg",
      imageAlt: "1"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/2.jpg",
      imageAlt: "2"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/3.jpg",
      imageAlt: "3"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/4.jpg",
      imageAlt: "4"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/6.jpg",
      imageAlt: "6"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/7.jpg",
      imageAlt: "7"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/8.jpg",
      imageAlt: "8"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/9.jpg",
      imageAlt: "9"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/10.jpg",
      imageAlt: "10"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/11.jpg",
      imageAlt: "11"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/12.jpg",
      imageAlt: "12"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/13.jpg",
      imageAlt: "13"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/14.jpg",
      imageAlt: "14"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/15.jpg",
      imageAlt: "15"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/16.jpg",
      imageAlt: "16"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/17.jpg",
      imageAlt: "17"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/18.jpg",
      imageAlt: "18"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/19.jpg",
      imageAlt: "19"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/20.jpg",
      imageAlt: "20"      
    },
    {
      imageSrc: "assets/img/events/quimbaya/la-esperanza/21.jpg",
      imageAlt: "21"      
    }
  ]

}
