import Router, { request, response } from "express";
import { SettingsController } from "./controllers/SettingsControllers";

const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);
export {routes};