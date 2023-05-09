import { Request, Response } from 'express';
import type { RouteParameters } from 'express-serve-static-core';

type Id = ':id';
type RequestWithId = Request<RouteParameters<Id>>;

export class UserController {
  async create(req: Request, res: Response) {
    throw new Error('Method not implemented.');
  }
  async index(_: unknown, res: Response) {
    throw new Error('Method not implemented.');
  }
  find(req: RequestWithId, res: Response) {
    throw new Error('Method not implemented.');
  }
  update(req: RequestWithId, res: Response) {
    throw new Error('Method not implemented.');
  }
  destroy(req: RequestWithId, res: Response) {
    throw new Error('Method not implemented.');
  }
}
