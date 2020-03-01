import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService, Product } from '../app.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
	products: Product;
	showCarousel: boolean = false;
	currentImage: string;
	cIndex: number = 0;

  constructor(public svc: AppService, private route: Router) { }

  ngOnInit() {
  	this.products = this.svc.data;
  }

  gotoDetails(i, item) {
  	this.svc.selectedProduct = item;
  	this.currentImage = item.images[0].href;
  	this.showCarousel = true;
  	this.cIndex = 0;
  }

  nextImage(val) {
  	if(
	  		(this.cIndex > 0 || (this.cIndex == 0 && val == 1)) 
	  		&& 
	  		(this.cIndex < this.svc.selectedProduct.images.length || (this.cIndex == this.svc.selectedProduct.images.length && val == -1))) {
	  	this.cIndex += 1 * val;
	  	this.currentImage = this.svc.selectedProduct.images[this.cIndex].href
	  }
  }
}
