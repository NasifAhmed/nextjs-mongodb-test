import connectDB from "@/app/lib/connectDB";
import { Test } from "../(model)/test";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        const test = await Test.find();

        return NextResponse.json(test, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const testData = body;

        await connectDB();
        await Test.create(testData);

        return NextResponse.json(
            { message: "Test data Created" },
            { status: 201 }
        );
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
}
