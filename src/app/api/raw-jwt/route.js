import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const token = await getToken({ 
        req: request, 
        raw: true,
        secret: process.env.NEXTAUTH_SECRET // Pass it explicitly
    });
    if (!token) {
      return new NextResponse(
        JSON.stringify({ error: "Authentication failed or token retrieval error." }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const payload = { jwt: token };

    return new NextResponse(JSON.stringify(payload), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in raw-jwt GET handler:", error);
    return new NextResponse(
      JSON.stringify({
        error: "Internal Server Error during token retrieval or response building.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

