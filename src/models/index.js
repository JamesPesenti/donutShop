// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, CartProducts } = initSchema(schema);

export {
  Product,
  CartProducts
};