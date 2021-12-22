import mongoose from "mongoose";
import { TransactionSchema } from "../models/transaction-model";
/**
 * @author Vivek
 * @since december,21
 * @see "To Save Transaction To Database"
 * **/

const Transaction = mongoose.model("Transaction", TransactionSchema);

// Add new Transaction
export const addNewTransaction = async (req, res) => {
  let newTransaction = new Transaction(req.body);

  await newTransaction.save((err, Transaction) => {
    if (err) {
      res.send(err);
    }
    res.send(Transaction);
  });
};

// get all Transactions
export const getAllTransactions = async (req, res) => {
  // in {} you can pass condition
  await Transaction.find({}, (err, Transactions) => {
    if (err) {
      res.send(err);
    }
    res.send(Transactions);
  }).clone().catch(function(err){ console.log(err)});
};

// get Transaction by id
export const getTransactionById = async (req, res) => {
  await Transaction.findById(req.params.TransactionID, (err, Transaction) => {
    if (err) {
      res.send("Err : " + err);
    }
    res.send(Transaction);
  });
};

// Update Transaction
export const updateTransaction = async (req, res) => {
  await Transaction.findOneAndUpdate(
    { _id: req.params.TransactionID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, Transaction) => {
      if (err) {
        res.send(err);
      }
      res.send(Transaction);
    }
  );
};

// Delete Transaction
export const deleteTransaction = async (req, res) => {
  await Transaction.remove(
    { _id: req.params.TransactionID },
    (err, Transaction) => {
      if (err) {
        res.send(err);
      }
      res.send({ message: "successfuly deleted transaction" });
    }
  );
};
