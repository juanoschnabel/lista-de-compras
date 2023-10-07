import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});
categorySchema.plugin(mongoosePaginate);
export const categoryModel = model("products", categorySchema);
