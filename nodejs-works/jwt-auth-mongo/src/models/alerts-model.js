import { Schema } from "mongoose";

export const AlertSchema = new Schema({
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   autopopulate: true,
  //   required: "Please send the user",
  // },
  deliveryId: {
    type: Schema.Types.ObjectId,
    ref: "TransactionSchema",
    autopopulate: true,
  },
  type: {
    type: String,
    default: "Warning",
  },
  alertFor: {
    type: String,
    default: "delivery",
  },
  level: {
    type: String,
    default: "Low",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});
