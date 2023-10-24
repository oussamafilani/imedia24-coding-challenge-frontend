import { useQuery } from "react-query";

const fetchProductList = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useProductList = () => {
  return useQuery("productList", fetchProductList);
};
