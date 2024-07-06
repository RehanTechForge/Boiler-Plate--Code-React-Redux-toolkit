// ProductService.js
class ProductService {
  async fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  }
}

const productService = new ProductService();
export default productService;
