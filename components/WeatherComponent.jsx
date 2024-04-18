import { getWeatherData } from "@/lib/weather-info"
import Card from "./Card";
import Image from "next/image";


export default async function WeatherComponent({ lat, lon }) {
    const { main, description } = await getWeatherData(lat, lon);
    return (
        <Card>
            <h6 className="feature-name">Current Weather</h6>
            <div className="feature-main">
                <Image
                    className="max-w-20"
                    src="/icons/icon_rain.png"
                    alt="rain icon"
                    height={100}
                    width={100}
                />
                <h3 className="feature-title">{main}</h3>
                <span className="feature-name">{description}</span>
            </div>
        </Card>
    )
}
