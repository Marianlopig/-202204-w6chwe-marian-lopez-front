import { rest } from "msw";

export const robotsHandler = rest.get(
  "https://two02204-w6chwe-marian-lopez-back.onrender.com/robots",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Marian",
        },
      ])
    );
  }
);
