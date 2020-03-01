import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService, Product, Item } from '../app.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
	selectedId: number;
	activeItem: Item;

  constructor(private active: ActivatedRoute, private svc: AppService) {
  	this.active.params.subscribe(res => {
  		this.selectedId = res.id;
  	})
  }

  ngOnInit() {
  	this.activeItem = this.svc.selectedProduct;
  }
}
