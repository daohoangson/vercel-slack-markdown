import { escapeForSlackWithMarkdown } from "@clearfeed-ai/slack-to-html";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { NodeHtmlMarkdown } from "node-html-markdown";

export default function (req: VercelRequest, res: VercelResponse) {
  const { body } = req;
  if (typeof body !== "string") {
    return res.status(400).send("Please send plain text body.");
  }

  let output = escapeForSlackWithMarkdown(body);
  output = NodeHtmlMarkdown.translate(output);
  return res.send(output);
}
