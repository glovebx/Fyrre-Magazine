import { createContext, useContext } from "react";
import { ProductType } from "@/app/functions/getProducts";

type ProductContextType = {
  data: ProductType[];
  setData: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

export const ProductContext = createContext<ProductContextType | null>(null);

export function useProductContext() {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    throw new Error(
      "useProductContext must be used within a ProductContextProvider"
    );
  }

  return productContext;
}
