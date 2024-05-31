import { Response, Request } from "express";

/**
 * Users controller
 */
class UserController {
  async test(req: Request, res: Response) {
    try {
      res.status(200).json({ message: "hello word!!" });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}

export default new UserController();
