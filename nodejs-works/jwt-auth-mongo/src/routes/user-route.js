import { addNewUser, authenticate, getAllUsers, forgotPassword, myFunction} from "../controllers/user-controller";
import { authenticateToken } from "../services/auth";
/**
 * @swagger
 * /user:
 *   get:
 *     description: Get all the users
 *     responses:
 *       200:
 *         description: Returns users.
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Save a user
 *     consumes: 
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: user to create
 *     schema:
 *       type: object
 *       required:
 *         - userName
 *         - email
 *         - password
 *         - phone
 *         - role
 *       properties:
 *         userName:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         phone:
 *           type: string
 *         role: 
 *           type: string
 *       responses:
 *         200:
 *         description: Returns user.
 */

const routes = (app) => {
  app
    .route("/user")
    .post(addNewUser);

    app.route("/authenticate")
    .post(authenticate);

    app.route("/forgot")
    .post(forgotPassword);
    
    app.get("/user", authenticateToken,getAllUsers);
    app.get("/somesecurelink", authenticateToken, myFunction);
};

export default routes;
