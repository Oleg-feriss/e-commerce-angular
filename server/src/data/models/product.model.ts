import { model, Schema } from 'mongoose';

import { Product } from '../../interfaces';

const reviewsSchema: Schema = new Schema({
  user: {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    photo: String,
  },
  rating: {
    type: Number,
    required: true,
  },
  feedback: {
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],
});

const productsSchema: Schema = new Schema({
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  colors: [
    {
      type: String,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
  images: [
    {
      type: String,
    },
  ],
  sizes: [
    {
      type: Number,
    },
  ],
  reviews: [reviewsSchema],
});

export default model<Product>('Products', productsSchema);
