import { NextResponse } from "next/server";

const signup = async (req: Request) => {
    const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }
    
}