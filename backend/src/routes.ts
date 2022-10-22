import { Router } from "express";

import { LaunchesController } from "./controllers/launches.controller";

const launchesController = new LaunchesController();

const router = Router()

router.get('/launches/latest', launchesController.getLatestLaunch);
router.get('/launches/next', launchesController.getNextLaunch);
router.get('/launches/upcoming', launchesController.getAllUpcomingLaunches);
router.get('/launches/past', launchesController.getAllPastLaunches);
router.get('/launches/:id', launchesController.getLaunchById);

export { router }