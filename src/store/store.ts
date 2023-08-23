import { create } from "zustand";
import { CartSlice, createCartSlice } from "./slices/cart";
import { createProductSlice, ProductSlice } from "./slices/product";
import { persist } from "zustand/middleware";

type StoreState = ProductSlice & CartSlice;

export const useAppStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createProductSlice(...a),
      ...createCartSlice(...a),
    }),
    {
      name: "mystore",
    }
  )
);
