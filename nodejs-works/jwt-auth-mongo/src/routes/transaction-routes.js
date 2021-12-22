import {
  addNewTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} from "../controllers/transaction-controller.js";

const routes = (app) => {
  app
    .route("/transaction")
    .get(getAllTransactions)
    .post((req, res, next) => {
      console.log("Request From ", req.originalUrl);
      console.log("Method is ", req.method);
      next();
    }, addNewTransaction);

  app
    .route("/transaction/:transactionId")
    .put(updateTransaction)
    .delete(deleteTransaction)
    .get(getTransactionById);
};

export default routes;
