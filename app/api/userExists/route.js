import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { removeRequestMeta } from "next/dist/server/request-meta";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const {email} = await req.json();
        const user = await User.findOne({email}).select("_id")
        return NextResponse.json({user}.email, {message: 'user exists'}, {satus: 401})
    } catch (error) {
        console.log(error)
    }
}