/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  flavor: string,
  image?: Array< string | null > | null,
  options?: Array< string | null > | null,
  price: number,
  oldPrice?: number | null,
  quantity?: number | null,
  calories: number,
  avgRating?: number | null,
  _version?: number | null,
};

export type ModelProductConditionInput = {
  flavor?: ModelStringInput | null,
  image?: ModelStringInput | null,
  options?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  oldPrice?: ModelFloatInput | null,
  quantity?: ModelFloatInput | null,
  calories?: ModelIntInput | null,
  avgRating?: ModelFloatInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  flavor: string,
  image?: Array< string | null > | null,
  options?: Array< string | null > | null,
  price: number,
  oldPrice?: number | null,
  quantity?: number | null,
  calories: number,
  avgRating?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateProductInput = {
  id: string,
  flavor?: string | null,
  image?: Array< string | null > | null,
  options?: Array< string | null > | null,
  price?: number | null,
  oldPrice?: number | null,
  quantity?: number | null,
  calories?: number | null,
  avgRating?: number | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateCartProductsInput = {
  id?: string | null,
  userSub: string,
  quantity?: number | null,
  option?: string | null,
  productID: string,
  _version?: number | null,
};

export type ModelCartProductsConditionInput = {
  userSub?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  option?: ModelStringInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelCartProductsConditionInput | null > | null,
  or?: Array< ModelCartProductsConditionInput | null > | null,
  not?: ModelCartProductsConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CartProducts = {
  __typename: "CartProducts",
  id: string,
  userSub: string,
  quantity?: number | null,
  option?: string | null,
  productID: string,
  product?: Product | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCartProductsInput = {
  id: string,
  userSub?: string | null,
  quantity?: number | null,
  option?: string | null,
  productID?: string | null,
  _version?: number | null,
};

export type DeleteCartProductsInput = {
  id: string,
  _version?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  flavor?: ModelStringInput | null,
  image?: ModelStringInput | null,
  options?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  oldPrice?: ModelFloatInput | null,
  quantity?: ModelFloatInput | null,
  calories?: ModelIntInput | null,
  avgRating?: ModelFloatInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCartProductsFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  option?: ModelStringInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelCartProductsFilterInput | null > | null,
  or?: Array< ModelCartProductsFilterInput | null > | null,
  not?: ModelCartProductsFilterInput | null,
};

export type ModelCartProductsConnection = {
  __typename: "ModelCartProductsConnection",
  items:  Array<CartProducts | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  flavor?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  options?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  oldPrice?: ModelSubscriptionFloatInput | null,
  quantity?: ModelSubscriptionFloatInput | null,
  calories?: ModelSubscriptionIntInput | null,
  avgRating?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCartProductsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userSub?: ModelSubscriptionStringInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  option?: ModelSubscriptionStringInput | null,
  productID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCartProductsFilterInput | null > | null,
  or?: Array< ModelSubscriptionCartProductsFilterInput | null > | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    flavor: string,
    image?: Array< string | null > | null,
    options?: Array< string | null > | null,
    price: number,
    oldPrice?: number | null,
    quantity?: number | null,
    calories: number,
    avgRating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    flavor: string,
    image?: Array< string | null > | null,
    options?: Array< string | null > | null,
    price: number,
    oldPrice?: number | null,
    quantity?: number | null,
    calories: number,
    avgRating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    flavor: string,
    image?: Array< string | null > | null,
    options?: Array< string | null > | null,
    price: number,
    oldPrice?: number | null,
    quantity?: number | null,
    calories: number,
    avgRating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCartProductsMutationVariables = {
  input: CreateCartProductsInput,
  condition?: ModelCartProductsConditionInput | null,
};

export type CreateCartProductsMutation = {
  createCartProducts?:  {
    __typename: "CartProducts",
    id: string,
    userSub: string,
    quantity?: number | null,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      flavor: string,
      image?: Array< string | null > | null,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      quantity?: number | null,
      calories: number,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCartProductsMutationVariables = {
  input: UpdateCartProductsInput,
  condition?: ModelCartProductsConditionInput | null,
};

export type UpdateCartProductsMutation = {
  updateCartProducts?:  {
    __typename: "CartProducts",
    id: string,
    userSub: string,
    quantity?: number | null,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      flavor: string,
      image?: Array< string | null > | null,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      quantity?: number | null,
      calories: number,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCartProductsMutationVariables = {
  input: DeleteCartProductsInput,
  condition?: ModelCartProductsConditionInput | null,
};

export type DeleteCartProductsMutation = {
  deleteCartProducts?:  {
    __typename: "CartProducts",
    id: string,
    userSub: string,
    quantity?: number | null,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      flavor: string,
      image?: Array< string | null > | null,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      quantity?: number | null,
      calories: number,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    flavor: string,
    image?: Array< string | null > | null,
    options?: Array< string | null > | null,
    price: number,
    oldPrice?: number | null,
    quantity?: number | null,
    calories: number,
    avgRating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      flavor: string,
      image?: Array< string | null > | null,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      quantity?: number | null,
      calories: number,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      flavor: string,
      image?: Array< string | null > | null,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      quantity?: number | null,
      calories: number,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCartProductsQueryVariables = {
  id: string,
};

export type GetCartProductsQuery = {
  getCartProducts?:  {
    __typename: "CartProducts",
    id: string,
    userSub: string,
    quantity?: number | null,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      flavor: string,
      image?: Array< string | null > | null,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      quantity?: number | null,
      calories: number,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCartProductsQueryVariables = {
  filter?: ModelCartProductsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartProductsQuery = {
  listCartProducts?:  {
    __typename: "ModelCartProductsConnection",
    items:  Array< {
      __typename: "CartProducts",
      id: string,
      userSub: string,
      quantity?: number | null,
      option?: string | null,
      productID: string,
      product?:  {
        __typename: "Product",
        id: string,
        flavor: string,
        image?: Array< string | null > | null,
        options?: Array< string | null > | null,
        price: number,
        oldPrice?: number | null,
        quantity?: number | null,
        calories: number,
        avgRating?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCartProductsQueryVariables = {
  filter?: ModelCartProductsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCartProductsQuery = {
  syncCartProducts?:  {
    __typename: "ModelCartProductsConnection",
    items:  Array< {
      __typename: "CartProducts",
      id: string,
      userSub: string,
      quantity?: number | null,
      option?: string | null,
      productID: string,
      product?:  {
        __typename: "Product",
        id: string,
        flavor: string,
        image?: Array< string | null > | null,
        options?: Array< string | null > | null,
        price: number,
        oldPrice?: number | null,
        quantity?: number | null,
        calories: number,
        avgRating?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    flavor: string,
    image?: Array< string | null > | null,
    options?: Array< string | null > | null,
    price: number,
    oldPrice?: number | null,
    quantity?: number | null,
    calories: number,
    avgRating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    flavor: string,
    image?: Array< string | null > | null,
    options?: Array< string | null > | null,
    price: number,
    oldPrice?: number | null,
    quantity?: number | null,
    calories: number,
    avgRating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    flavor: string,
    image?: Array< string | null > | null,
    options?: Array< string | null > | null,
    price: number,
    oldPrice?: number | null,
    quantity?: number | null,
    calories: number,
    avgRating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCartProductsSubscriptionVariables = {
  filter?: ModelSubscriptionCartProductsFilterInput | null,
};

export type OnCreateCartProductsSubscription = {
  onCreateCartProducts?:  {
    __typename: "CartProducts",
    id: string,
    userSub: string,
    quantity?: number | null,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      flavor: string,
      image?: Array< string | null > | null,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      quantity?: number | null,
      calories: number,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCartProductsSubscriptionVariables = {
  filter?: ModelSubscriptionCartProductsFilterInput | null,
};

export type OnUpdateCartProductsSubscription = {
  onUpdateCartProducts?:  {
    __typename: "CartProducts",
    id: string,
    userSub: string,
    quantity?: number | null,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      flavor: string,
      image?: Array< string | null > | null,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      quantity?: number | null,
      calories: number,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCartProductsSubscriptionVariables = {
  filter?: ModelSubscriptionCartProductsFilterInput | null,
};

export type OnDeleteCartProductsSubscription = {
  onDeleteCartProducts?:  {
    __typename: "CartProducts",
    id: string,
    userSub: string,
    quantity?: number | null,
    option?: string | null,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      flavor: string,
      image?: Array< string | null > | null,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      quantity?: number | null,
      calories: number,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
