import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: [],
});
productSchema.plugin(mongoosePaginate);
export const productModel = model("products", productSchema);
