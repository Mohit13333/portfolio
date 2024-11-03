import contactForm from "../Controller/contact.js";
import { Router } from "express";

const router = Router();

router.route("/").post(contactForm);

export default router;