import { NextRequest } from "next/server";
import { headers,cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  
  cookies().set('resultsperpage','20');
  console.log(headerList.get("Authorization"));
  console.log(requestHeaders.get("Authorization"));
  console.log(cookies().get('resultsperpage'))
  return new Response("<h1>Profile Api Data</h1>", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "theme=dark" },
  });
}
