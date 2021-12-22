import mongoose from "mongoose";
import { DeliveryRequestSchema } from "../models/deliveryrequest-model";
/**
 * @author Vaishali
 * @since december,18
 * @see "To Save Delivery Request To Database"
 * **/

const DeliveryRequest = mongoose.model("DeliveryRequest", DeliveryRequestSchema);

// Add new DeliveryRequest
export const addNewDeliveryRequest = async (req, res) => {
  let newDeliveryRequest = new DeliveryRequest(req.body);

  await newDeliveryRequest.save((err, DeliveryRequest) => {
    if (err) {
      res.send(err);
    }
    res.send(DeliveryRequest);
  });
};

// get all DeliveryRequests
export const getAllDeliveryRequests = async (req, res) => {
  // in {} you can pass condition
  await DeliveryRequest.find({}, (err, DeliveryRequests) => {
    if (err) {
      res.send("Err : " + err);
    }
    res.send(DeliveryRequests);
  }).clone().catch(function(err){ console.log(err)})
};

// get DeliveryRequest by id
export const getDeliveryRequestById = async (req, res) => {
  await DeliveryRequest.findById(req.params.DeliveryRequestID, (err, DeliveryRequest) => {
    if (err) {
      res.send("Err : " + err);
    }
    res.send(DeliveryRequest);
  });
};

// Update DeliveryRequest
export const updateDeliveryRequest = async (req, res) => {
  await DeliveryRequest.findOneAndUpdate(
    { _id: req.params.DeliveryRequestID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, DeliveryRequest) => {
      if (err) {
        res.send(err);
      }
      res.send(DeliveryRequest);
    }
  );
};

// Delete DeliveryRequest
export const deleteDeliveryRequest = async (req, res) => {
  await DeliveryRequest.remove(
    { _id: req.params.DeliveryRequestID },
    (err, DeliveryRequest) => {
      if (err) {
        res.send(err);
      }
      res.send({ message: "successfuly deleted DeliveryRequest" });
    }
  );
};
