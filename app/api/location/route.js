import { getLocations } from "./location-util";
import { NextResponse } from "next/server";

export async function GET() {
    const locationData = getLocations();

    return NextResponse.json(locationData);
}