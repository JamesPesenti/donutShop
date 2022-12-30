/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      flavor
      image
      options
      price
      oldPrice
      quantity
      calories
      avgRating
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      flavor
      image
      options
      price
      oldPrice
      quantity
      calories
      avgRating
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      flavor
      image
      options
      price
      oldPrice
      quantity
      calories
      avgRating
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCartProducts = /* GraphQL */ `
  mutation CreateCartProducts(
    $input: CreateCartProductsInput!
    $condition: ModelCartProductsConditionInput
  ) {
    createCartProducts(input: $input, condition: $condition) {
      id
      userSub
      quantity
      option
      productID
      product {
        id
        flavor
        image
        options
        price
        oldPrice
        quantity
        calories
        avgRating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCartProducts = /* GraphQL */ `
  mutation UpdateCartProducts(
    $input: UpdateCartProductsInput!
    $condition: ModelCartProductsConditionInput
  ) {
    updateCartProducts(input: $input, condition: $condition) {
      id
      userSub
      quantity
      option
      productID
      product {
        id
        flavor
        image
        options
        price
        oldPrice
        quantity
        calories
        avgRating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCartProducts = /* GraphQL */ `
  mutation DeleteCartProducts(
    $input: DeleteCartProductsInput!
    $condition: ModelCartProductsConditionInput
  ) {
    deleteCartProducts(input: $input, condition: $condition) {
      id
      userSub
      quantity
      option
      productID
      product {
        id
        flavor
        image
        options
        price
        oldPrice
        quantity
        calories
        avgRating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
