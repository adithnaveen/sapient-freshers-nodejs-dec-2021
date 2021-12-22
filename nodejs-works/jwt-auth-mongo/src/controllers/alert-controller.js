import mongoose from "mongoose";
import { AlertSchema } from "../models/alerts-model";

/**
 * @author Vivek
 * @since december,21
 * @see "To Save Alerts To Database"
 * **/

const Alert = mongoose.model("Alert", AlertSchema);

// Add new Alert
export const addNewAlert = async (req, res) => {
  let newAlert = new Alert(req.body);
  newAlert.save((err, Alert) => {
    if (err) {
      res.send(err);
    }
    res.json(Alert);
  });
};

// get all Alerts
export const getAllAlerts = async (req, res) => {
  Alert.find({}, (err, Alerts) => {
    if (err) {
      res.send("Err : " + err);
    }
    res.json(Alerts);
  });
};

// get Alert by id
export const getAlertById = async (req, res) => {
  Alert.findById(req.params.AlertID, (err, Alert) => {
    if (err) {
      res.send("Err : " + err);
    }
    res.json(Alert);
  });
};

// Update Alert
export const updateAlert = async (req, res) => {
  Alert.findOneAndUpdate(
    { _id: req.params.AlertID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, Alert) => {
      if (err) {
        res.send(err);
      }
      res.json(Alert);
    }
  );
};

// Delete Alert
export const deleteAlert = async (req, res) => {
  Alert.remove({ _id: req.params.AlertID }, (err, Alert) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "successfuly deleted Alert" });
  });
};
