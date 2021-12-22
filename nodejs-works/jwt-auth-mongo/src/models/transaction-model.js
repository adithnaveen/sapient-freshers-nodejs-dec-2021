import { Schema } from "mongoose";

export const TransactionSchema = new Schema({
  from: {
    type: String,
    required: "Please send the sender user",
  },
  to: {
    type: String,
    required: "Please send the recieving user",
  },
  status: {
    type: String,
    default: "Pending",
  },
  deliveryLocation: {
    type: String,
    required: "Please send Delivery address",
  },
  pickupLocation: {
    type: String,
    required: "Please send reciever address",
  },
  charge: {
    type: Number,
    required: "Please send Amount",
  },
  paymentMode: {
    type: String,
    required: "Please select a payment mode",
  },
  deliveryDate: {
    type: Date,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});
