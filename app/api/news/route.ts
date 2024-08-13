// import { promises as fs } from 'fs';
// import path from 'path';
import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(request: Request) {

  // const jsonDirectory = path.join(process.cwd(), 'json', 'news.json');
  // const fileContents = await fs.readFile(jsonDirectory, 'utf8');
  // const data = JSON.parse(fileContents);

  return NextResponse.json({
    status: 200,
    message: '',
    data: {}
  });  

}
