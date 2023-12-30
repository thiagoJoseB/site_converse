import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  idx = 0;

  images = [
 
  'assets/new4.jpg',
  'assets/bb-con.svg',
 'assets/new-all.svg'
   
    // Adicione mais URLs de imagem conforme necessário
  ];

  bannner = [
    'assets/nnn.svg',
    'assets/b-image.svg',
    'assets/banner-5.jpg',
    'assets/banner-6.webp',
     
      // Adicione mais URLs de imagem conforme necessário
    ];
  

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.carousel(), 1800);
  }

  carousel() {
    this.idx++;
    if (this.idx > this.images.length - 1) {
      this.idx = 0;
      if(this.idx > this.bannner.length - 1){
        this.idx = 0;
      }
    }
  }



}
