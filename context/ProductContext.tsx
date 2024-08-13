"use client";

import { useEffect, useState } from "react";
import { getProducts, ProductType } from "@/app/functions/getProducts";
import { ProductContext } from "@/hooks/useProductContext";

type ProductContextProviderType = {
  children: React.ReactNode;
  limit?: number | null;
};

export default function ProductContextProvider({
  children,
  limit = null,
}: ProductContextProviderType) {
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await getProducts();
        const limitedData = limit ? responseData.slice(0, limit) : responseData;
        setData(limitedData);
      } catch (err) {
        console.log("Error fetching data", err);
      }
    };

    fetchData();
  }, [limit]);

  return (
    <ProductContext.Provider value={{ data, setData }}>
      {children}
    </ProductContext.Provider>
  );
}
