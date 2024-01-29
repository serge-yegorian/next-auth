import { connectMongoDB } from "@/lib/mongodb"
import User from "@/models/user"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export async function POST(req) {
    try {
      await connectMongoDB();
      const { name, email, password } = await req.json();
  
      // Check if the email is already registered
      const existingUser = await User.findOne({ email }).select('_id');
      if (existingUser) {
        return NextResponse.json({ message: 'User already exists', status: 401 });
      }
  
      // If the email is not registered, proceed to register the new user
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({ name, email, password: hashedPassword });
  
      return NextResponse.json({ message: 'User registered successfully!', status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error occurred while processing the request', status: 500 });
    }
  }
  