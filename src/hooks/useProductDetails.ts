import { useQuery } from "react-query";

const fetchProductDetails = async (productId: number) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/products/${productId}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useProductDetails = (productId: number) => {
  return useQuery(["productDetails", productId], () =>
    fetchProductDetails(productId)
  );
};
