import { Schema, model } from "mongoose";
import paginate from "mongoose-paginate-v2";
const listSchema = new Schema({
  products: {
    type: [
      {
        _id: false,
        id_prod: {
          type: Schema.Types.ObjectId,
          ref: "products",
        },
        quantity: Number,
      },
    ],
    default: [],
  },
});
listSchema.plugin(paginate);
export const cartModel = model("carts", listSchema);
