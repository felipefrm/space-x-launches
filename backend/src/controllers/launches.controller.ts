import { Request, Response } from "express";
import { api } from "../services/api-client";

export class LaunchesController {

  async getAllPastLaunches(req: Request, res: Response) {
    const response = await api.get('v5/launches/past');
    res.json(response.data);
  }
  
  async getAllUpcomingLaunches(req: Request, res: Response) {
    const response = await api.get('v5/launches/upcoming');
    res.json(response.data);
  }
  
  async getNextLaunch(req: Request, res: Response) {
    const response = await api.get('v5/launches/next');
    res.json(response.data);
  }
  
  async getLatestLaunch(req: Request, res: Response) {
    const response = await api.get('v5/launches/latest');
    res.json(response.data);
  }

  async getLaunchById(req: Request, res: Response) {
    const response = await api.get(`v5/launches/${req.params.id}`);
    res.json(response.data);
  }
}
