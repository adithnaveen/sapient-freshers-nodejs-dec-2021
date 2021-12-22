import { Schema } from "mongoose";
import mongoose from "mongoose";

export const DeliveryRequestSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  to: {
    type: String,
    required: "Please send the reciever name",
  },
  phone: {
    type: Number,
    required: "Please send phone number",
  },
  address: {
    type: String,
    required: "Please provide address",
  },
  addressType: {
    type: String,
    enum : ['home','work'],
    default: 'home'
  },
  nearestLandmark: {
    type: String
  },
  deliveryLocation: {
    type: String,
    required: "Please send Delivery address",
  },
  pickupLocation: {
    type: String,
    required: "Please send reciever address",
  },
  parcelWeight: {
    type: Number,
    required: "Please enter weight",
  },
  noOfItems: {
    type: Number,
  },
  category: {
    type: String,
  },
  departureDate: {
    type: Date,
    default: Date.now(),
  },
  arrivalDate: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    default: "Pending",
  },
  charge: {
    type: Number,
    default: 0,
  },
  paymentMode: {
    type: String,
    enum : ['paytm','cash on delivery'],
    default: 'cash on delivery'
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
