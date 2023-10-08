// import fs from "fs/promises";
// import path from "path";
// import { NextResponse } from "next/server";
// export async function GET(request: Request) {
//   const test = [];
//   for (const name of await fs.readdir(
//     path.resolve(process.cwd(), "app/blog/data_structure/tree")
//   )) {
//     test.push(name);
//   }
//   const result = {
//     code: 200,
//     test: test,
//   };
//   return NextResponse.json(result);
// }

// export async function POST(request: Request) {
//   return NextResponse.json({ data: true });
// }
