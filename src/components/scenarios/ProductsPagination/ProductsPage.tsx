import ProductPagination from "./ProductPagination";
import { productsData } from "./ProductsData";

const ProductsPage = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Explore Our Products
      </h1>
      <ProductPagination products={productsData} itemsPerPage={10} />
    </div>
  );
};

export default ProductsPage;
