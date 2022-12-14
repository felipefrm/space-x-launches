import { AxiosError, AxiosResponse } from "axios";
import { Request, Response } from "express";

import { api } from "../services/api-client";

export class LaunchesController {
  async getAllPastLaunches(req: Request, res: Response) {
    try {
      const response = await api.get('v5/launches/past');
      res.json(response.data);
    } catch (error) {
      const err = error as AxiosError
      res.status(err.response?.status || 400).end();
    }
  }

  async getAllUpcomingLaunches(req: Request, res: Response) {
    try {
      const response = await api.get('v5/launches/upcoming');
      res.json(response.data);
    } catch (error) {
      const err = error as AxiosError
      res.status(err.response?.status || 400).end();
    }
  }

  async getNextLaunch(req: Request, res: Response) {
    try {
      const response = await api.get('v5/launches/next');
      res.json(response.data);
    } catch (error) {
      const err = error as AxiosError
      res.status(err.response?.status || 400).end();
    }
  }

  async getLatestLaunch(req: Request, res: Response) {
    try {
      const response = await api.get('v5/launches/latest');
      res.json(response.data);
    } catch (error) {
      const err = error as AxiosError
      res.status(err.response?.status || 400).end();
    }
  }

  async getLaunchDetails(req: Request, res: Response) {
    try {
      const { data } = await api.get(`v5/launches/${req.params.id}`);

      const promises = []

      if (data.launchpad) {
        promises.push(api.get(`v4/launchpads/${data.launchpad}`));
      }

      if (data.rocket) {
        promises.push(api.get(`v4/rockets/${data.rocket}`));
      }

      if (data.crew.length > 0) {
        data.crew.forEach((crew: any) => {
          promises.push(api.get(`v4/crew/${crew.crew}`));
        });
      }

      if (data.payloads.length > 0) {
        data.payloads.forEach((payload: any) => {
          promises.push(api.get(`v4/payloads/${payload}`));
        });
      }

      try {
        const responses: AxiosResponse[] = await Promise.all(promises);

        const response: any = {}
        responses.forEach((res: any) => {
          const key = res.config.url.split('/')[1];

          if (response[key]) {
            response[key].push(res.data);
          } else {
            response[key] = [res.data];
          }
        })

        res.json({
          launch: data,
          ...response
        });
      } catch (error) {
        const err = error as AxiosError
        res.status(err.response?.status || 400).end();
      }
    } catch (error) {
      const err = error as AxiosError
      res.status(err.response?.status || 400).end();
    }
  }
}
