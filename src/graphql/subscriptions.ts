/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateCartProducts = /* GraphQL */ `
  subscription OnCreateCartProducts(
    $filter: ModelSubscriptionCartProductsFilterInput
  ) {
    onCreateCartProducts(filter: $filter) {
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
export const onUpdateCartProducts = /* GraphQL */ `
  subscription OnUpdateCartProducts(
    $filter: ModelSubscriptionCartProductsFilterInput
  ) {
    onUpdateCartProducts(filter: $filter) {
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
export const onDeleteCartProducts = /* GraphQL */ `
  subscription OnDeleteCartProducts(
    $filter: ModelSubscriptionCartProductsFilterInput
  ) {
    onDeleteCartProducts(filter: $filter) {
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
