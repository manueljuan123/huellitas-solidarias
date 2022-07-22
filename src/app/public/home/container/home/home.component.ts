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
        'assets/img/home/carousel/1armenia.gif',
      imageAlt: 'Armenia'
    },
    {
      imageSrc:
      'assets/img/home/carousel/2calarca.gif',
      imageAlt: 'Calarcá'
    },
    {
      imageSrc:
      'assets/img/home/carousel/3montenegro.jpeg',
      imageAlt: 'Montenegro'
    },
    {
      imageSrc:
      'assets/img/home/carousel/4quimbaya.gif',
      imageAlt: 'Quimbaya'
    },
    {
      imageSrc:
      'assets/img/home/carousel/5pijao.jpeg',
      imageAlt: 'Pijao'
    },
    {
      imageSrc:
      'assets/img/home/carousel/6cordoba.jpeg',
      imageAlt: 'Córdoba'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
