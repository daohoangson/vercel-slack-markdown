import { VercelRequest, VercelResponse } from "@vercel/node";
import slackifyMarkdown from "slackify-markdown";

export default function (req: VercelRequest, res: VercelResponse) {
  const { body } = req;
  if (typeof body !== "string") {
    return res.status(400).send("Please send plain text body.");
  }

  const output = slackifyMarkdown(body);
  return res.send(output);
}
