import {
  addNewAlert,
  deleteAlert,
  getAlertById,
  getAllAlerts,
  updateAlert,
} from "../controllers/alert-controller.js";

const routes = (app) => {
  app
    .route("/alerts")
    .get(getAllAlerts)
    .post((req, res, next) => {
      next();
    }, addNewAlert);

  app
    .route("/alerts/:alertId")
    .put(updateAlert)
    .delete(deleteAlert)
    .get(getAlertById);
};

export default routes;

/**
 * @swagger
 *  /alerts:
 *   get:
 *     summary: Retrieve a list of Alerts.
 *     description: Retrieve a list of alerts from DB. Can be used to populate a list of fake alerts when prototyping or testing an API!
 *     responses:
 *       200:
 *         description: Returns an array of JSON from Alerts DB.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: integer
 *                     description: This is the alert ID.
 *                     example: 0
 *                   user:
 *                     type: object
 *                     description: The user's object to whom the alert is associated to.
 *                     example: Elliot Alderson
 *                   deliveryId:
 *                     type: string
 *                     description: This is the transaction that the alert belongs to.
 *                     example: 61bb17b9154c538d19ac8d8b,
 *                   type:
 *                     type: string
 *                     description: This is defining what type of alert is this.
 *                     example: info
 *                   alertFor:
 *                     type: string
 *                     description: This is the actual meaning or message of alert.
 *                     example: Payment Successful
 *                   level:
 *                     type: string
 *                     description: This defines the priority of said alert.
 *                     example: low
 *                   createdDate:
 *                     type: string
 *                     description: This is the date the alert was raised
 *                     example: 2021-12-16T19:54:15.063Z.
 */

/**
 * @swagger
 *  /alerts/{id}:
 *   get:
 *     summary: Retrieve a single alert.
 *     description: Retrieve a single alert. Can be used to populate a alert profile when prototyping or testing an API.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Returns an array of JSON from Alerts DB.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: integer
 *                     description: This is the alert ID.
 *                     example: 0
 *                   user:
 *                     type: object
 *                     description: The user's object to whom the alert is associated to.
 *                     example: Elliot Alderson
 *                   deliveryId:
 *                     type: string
 *                     description: This is the transaction that the alert belongs to.
 *                     example: 61bb17b9154c538d19ac8d8b,
 *                   type:
 *                     type: string
 *                     description: This is defining what type of alert is this.
 *                     example: info
 *                   alertFor:
 *                     type: string
 *                     description: This is the actual meaning or message of alert.
 *                     example: Payment Successful
 *                   level:
 *                     type: string
 *                     description: This defines the priority of said alert.
 *                     example: low
 *                   createdDate:
 *                     type: string
 *                     description: This is the date the alert was raised
 *                     example: 2021-12-16T19:54:15.063Z.
 */

/**
 * @swagger
 *  /alerts/:
 *   post:
 *     summary: Create an alert.
 *     description: Retrieve a single alert. Can be used to populate a alert profile when prototyping or testing an API.
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   user:
 *                     type: string
 *                     description: The user's object to whom the alert is associated to.
 *                     example: Elliot Alderson
 *                   deliveryId:
 *                     type: string
 *                     description: This is the transaction that the alert belongs to.
 *                     example: 61bb17b9154c538d19ac8d8b,
 *                   type:
 *                     type: string
 *                     description: This is defining what type of alert is this.
 *                     example: info
 *                   alertFor:
 *                     type: string
 *                     description: This is the actual meaning or message of alert.
 *                     example: Payment Successful
 *                   level:
 *                     type: string
 *                     description: This defines the priority of said alert.
 *                     example: low
 *                   createdDate:
 *                     type: string
 *                     description: This is the date the alert was raised
 *                     example: 2021-12-16T19:54:15.063Z.
 */

/**
 * @swagger
 *  /alerts/:
 *   post:
 *     summary: Create an alert.
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   user:
 *                     type: string
 *                     description: The user's object to whom the alert is associated to.
 *                     example: Elliot Alderson
 *                   deliveryId:
 *                     type: string
 *                     description: This is the transaction that the alert belongs to.
 *                     example: 61bb17b9154c538d19ac8d8b,
 *                   type:
 *                     type: string
 *                     description: This is defining what type of alert is this.
 *                     example: info
 *                   alertFor:
 *                     type: string
 *                     description: This is the actual meaning or message of alert.
 *                     example: Payment Successful
 *                   level:
 *                     type: string
 *                     description: This defines the priority of said alert.
 *                     example: low
 *                   createdDate:
 *                     type: string
 *                     description: This is the date the alert was raised
 *                     example: 2021-12-16T19:54:15.063Z.
 */
