import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  text = "Municipios visitados"
  
  images = [
    {
      imageSrc:
        'assets/img/home/carousel/1armenia.jpeg',
      imageAlt: 'Armenia'
    },
    {
      imageSrc:
      'assets/img/home/carousel/2calarca.jpeg',
      imageAlt: 'Calarcá'
    },
    {
      imageSrc:
      'assets/img/home/carousel/3circasia.jpeg',
      imageAlt: 'Circasia'
    },
    {
      imageSrc:
      'assets/img/home/carousel/4montenegro.jpeg',
      imageAlt: 'Montenegro'
    },
    {
      imageSrc:
      'assets/img/home/carousel/5quimbaya.jpeg',
      imageAlt: 'Quimbaya'
    },
    {
      imageSrc:
      'assets/img/home/carousel/6pijao.jpeg',
      imageAlt: 'Pijao'
    },
    {
      imageSrc:
      'assets/img/home/carousel/7cordoba.jpeg',
      imageAlt: 'Córdoba'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
