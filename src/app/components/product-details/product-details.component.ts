import { Component } from '@angular/core';
import { ProductServicesService } from '../../services/product-services.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product!: any;
  id: number = 2;

  constructor(private productServ: ProductServicesService) {}
  ngOnInit() {
    this.productServ.getProductById(this.id).subscribe((response) => {
      this.product = response;
    });
  }

}
