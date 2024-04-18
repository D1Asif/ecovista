import { getWindData } from "@/lib/weather-info";
import Card from "./Card";
import Image from "next/image";


export default async function WindComponent({ lat, lon }) {
    const { speed, deg } = await getWindData(lat, lon);
    return (
        <Card>
            <h6 className="feature-name">Wind</h6>
            <div className="feature-main">
                <Image
                    className="max-w-20"
                    src="/icons/icon_wind.png"
                    alt="rain icon"
                    height={100}
                    width={100}
                />
                <h3 className="feature-title">{speed} m/s</h3>
                <span className="feature-name">{deg} Degrees</span>
            </div>
        </Card>
    )
}
