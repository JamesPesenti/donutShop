import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly flavor: string;
  readonly image?: (string | null)[] | null;
  readonly options?: (string | null)[] | null;
  readonly price: number;
  readonly oldPrice?: number | null;
  readonly quantity?: number | null;
  readonly calories: number;
  readonly avgRating?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly flavor: string;
  readonly image?: (string | null)[] | null;
  readonly options?: (string | null)[] | null;
  readonly price: number;
  readonly oldPrice?: number | null;
  readonly quantity?: number | null;
  readonly calories: number;
  readonly avgRating?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerCartProducts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartProducts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userSub: string;
  readonly quantity?: number | null;
  readonly option?: string | null;
  readonly productID: string;
  readonly product?: Product | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCartProducts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartProducts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userSub: string;
  readonly quantity?: number | null;
  readonly option?: string | null;
  readonly productID: string;
  readonly product: AsyncItem<Product | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CartProducts = LazyLoading extends LazyLoadingDisabled ? EagerCartProducts : LazyCartProducts

export declare const CartProducts: (new (init: ModelInit<CartProducts>) => CartProducts) & {
  copyOf(source: CartProducts, mutator: (draft: MutableModel<CartProducts>) => MutableModel<CartProducts> | void): CartProducts;
}