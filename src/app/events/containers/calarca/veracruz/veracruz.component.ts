import { Component, OnInit } from '@angular/core';
import { Item } from '../../../../models/gallery-images';

@Component({
  selector: 'app-veracruz',
  templateUrl: './veracruz.component.html',
  styleUrls: ['./veracruz.component.scss']
})
export class VeracruzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Veracruz"
  subtitle = "Calarcá, Quindío"

  data: Item[] =[
    {
        imageSrc: "assets/img/events/calarca/veracruz/1.jpg",
        imageAlt: "1"
    },
    {
      imageSrc: "assets/img/events/calarca/veracruz/2.jpg",
      imageAlt: "2"
    },
    {
      imageSrc: "assets/img/events/calarca/veracruz/3.jpg",
      imageAlt: "3"
    },
    {
      imageSrc: "assets/img/events/calarca/veracruz/4.jpg",
      imageAlt: "4"
    },
    {
      imageSrc: "assets/img/events/calarca/veracruz/5.jpg",
      imageAlt: "5"
    },
    {
      imageSrc: "assets/img/events/calarca/veracruz/6.jpg",
      imageAlt: "6"
    },
    {
      imageSrc: "assets/img/events/calarca/veracruz/7.jpg",
      imageAlt: "7"
    },
    {
      imageSrc: "assets/img/events/calarca/veracruz/8.jpg",
      imageAlt: "8"
    },
    {
      imageSrc: "assets/img/events/calarca/veracruz/9.jpg",
      imageAlt: "9"
    },
    {
      imageSrc: "assets/img/events/calarca/veracruz/10.jpg",
      imageAlt: "10"
    },
    {
      imageSrc: "assets/img/events/calarca/veracruz/11.jpg",
      imageAlt: "11"
    },
  ]
}
