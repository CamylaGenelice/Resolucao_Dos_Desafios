import { registrarUsuario } from "../controller/user";
import express from "express";

const router = express.Router();

router.post("/usuarios", registrarUsuario);

export default router;