import { robotsHandler } from "./handlers";
import { setupServer } from "msw/node";

const server = setupServer(robotsHandler);

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});

export default server;
