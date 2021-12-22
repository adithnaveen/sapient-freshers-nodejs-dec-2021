import {
    addNewDeliveryRequest,
    getAllDeliveryRequests,
    getDeliveryRequestById,
    updateDeliveryRequest,
    deleteDeliveryRequest,
  } from "../controllers/DeliveryRequest-controller.js";
  
  const routes = (app) => {
    app
      .route("/DeliveryRequest")
      .get(getAllDeliveryRequests)
      .post((req, res, next) => {
        console.log("Request From ", req.originalUrl);
        console.log("Method is ", req.method);
        next();
      }, addNewDeliveryRequest);
  
    app
      .route("/DeliveryRequest/:DeliveryRequestId")
      .put(updateDeliveryRequest)
      .delete(deleteDeliveryRequest)
      .get(getDeliveryRequestById);
  };
  
  export default routes;
  