import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
declare var require: any
var data = require('./index.json');

@Injectable()
export class AppService {
	public selectedProduct: Item;
	public data: Product = data;
	constructor(private http: HttpClient) {}

	getData(): Observable<Product> {
		return this.http.get<Product>('https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json', 
			{ headers: new HttpHeaders()
				.set('Access-Control-Allow-Origin', '*')
				.set("Content-Type", "application/json")
				.set("Access-Control-Allow-Credentials", 'false')
				.set("dataType", "jsonp") }
		);
	}
}

export class Product {
	id: string;
	name: string;
	categoryType: string;
	groups: Item[];
	totalPages: number;
	categories: any
}

export class Item {
	"id": string;
	"name": string;
	"links": any;
	"price": any;
	"thumbnail": any;
	"hero": any;
	"images": any;
	"swatches": any;
	"messages": any;
	"flags": any;
	"reviews": any;
}