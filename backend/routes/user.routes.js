import { Router } from "express";
import { registerUser } from '../controllers/user.controller.js';
import {upload} from '../middlewares/multer.middleware.js'; // Assuming you have a multer setup in utils

const router = Router();

router.route('/register').post(
  
  upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'coverImage', maxCount: 1 }
  ]),
  registerUser);

export default router;