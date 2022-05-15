import { rest } from "msw";

export const robotsHandlers = [
  rest.get(
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
  ),
  rest.delete(
    "https://two02204-w6chwe-marian-lopez-back.onrender.com/robots/delete/3",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          _id: "3",
        })
      );
    }
  ),
];
