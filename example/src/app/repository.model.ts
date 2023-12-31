import { SipmleDataSource } from './datasource.model';
import { Product } from './product.model';

export class ProductRepository {
  private dataSource: SipmleDataSource;
  private products: Product[];

  constructor() {
    this.dataSource = new SipmleDataSource();
    this.products = new Array<Product>();
    this.dataSource.getProducts().forEach((p) => this.products.push(p));
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products.find((p) => p.id == id);
  }

  getProductCount(): number {
    return this.products.length;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  deleteProduct(product: Product){
    let index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }
}
