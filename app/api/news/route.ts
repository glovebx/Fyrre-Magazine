// import { promises as fs } from 'fs';
// import path from 'path';
import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(request: Request) {

  // const jsonDirectory = path.join(process.cwd(), 'json', 'news.json');
  // const fileContents = await fs.readFile(jsonDirectory, 'utf8');
  // const data = JSON.parse(fileContents);

  const res = await fetch(
    "https://www.moco.co/wechat_mall/static/src/json/news.json?20240801", { signal: AbortSignal.timeout(30000) }
  );
  
  const data = await res.json();  

  return NextResponse.json({
    status: 200,
    message: '',
    data: data
  });  

}
