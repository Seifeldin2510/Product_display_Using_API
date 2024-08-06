import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from '../../services/product-services.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  allProducts: any[] = [];
  constructor(private productServ: ProductServicesService) {}
  
  ngOnInit() {
    this.productServ.getAllProducts().subscribe((response) => {
      this.allProducts=response
    });
  }
}
