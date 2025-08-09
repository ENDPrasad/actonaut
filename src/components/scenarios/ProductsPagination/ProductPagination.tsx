import React, { useState } from "react";
import type { Product } from "./ProductsData";
import { Card, CardContent, Typography, Rating, Button, Pagination } from "@mui/material";

interface ProductPaginationProps {
  products: Product[];
  itemsPerPage?: number;
}

const ProductPagination: React.FC<ProductPaginationProps> = ({
  products,
  itemsPerPage = 10,
}) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full flex flex-col items-center space-y-6">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {currentProducts.map((product) => (
          <Card
            key={product.id}
            className="shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 rounded-xl"
          >
            <CardContent className="flex flex-col space-y-3">
              <Typography variant="h6" className="font-semibold">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {product.category}
              </Typography>
              <Typography variant="h6" className="text-green-600">
                ${product.price}
              </Typography>
              <Rating value={product.rating} readOnly />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center space-x-4">
        <Button
          variant="outlined"
          onClick={handlePrev}
          disabled={page === 1}
          className="!normal-case"
        >
          Prev
        </Button>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
        />
        <Button
          variant="outlined"
          onClick={handleNext}
          disabled={page === totalPages}
          className="!normal-case"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ProductPagination;
