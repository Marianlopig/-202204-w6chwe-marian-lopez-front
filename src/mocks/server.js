import { robotsHandlers } from "./handlers";
import { setupServer } from "msw/node";

const server = setupServer(...robotsHandlers);

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});

export default server;
