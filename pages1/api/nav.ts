import fs from "fs/promises";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const test = [];
    for (const name of await fs.readdir(
      path.resolve(process.cwd(), "app/blog/data_structure/tree")
    )) {
      test.push(name);
    }
    const result = {
      code: 200,
      test: test,
    };
    return res.json(result);
  } else if (req.method === "POST") {
    return res.json({ data: true });
  }
}
