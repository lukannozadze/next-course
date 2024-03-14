import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  console.log(headerList.get("Authorization"));
  console.log(requestHeaders.get("Authorization"));
  
  return new Response("<h1>Profile Api Data</h1>", {
    headers: { "Content-Type": "text/html" },
  });
}
