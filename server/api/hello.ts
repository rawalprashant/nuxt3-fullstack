import type { IncomingMessage, ServerResponse } from "http";
import { UserService } from "./services/user.service";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const userService = new UserService();
  const users = await userService.findAll();
  console.log(users);
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.end(JSON.stringify(users));
};
