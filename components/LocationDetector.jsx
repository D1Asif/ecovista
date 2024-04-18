"use client";

import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LocationDetector() {
    const [loading, setLoading] = useState();

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        const params = new URLSearchParams(searchParams);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                params.set('latitude', position.coords.latitude);
                params.set('longitude', position.coords.longitude);
                setLoading(false);
                router.push(`/current?${params.toString()}`)
            })
        }


    }, [pathname, searchParams]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-700 text-white">
            {
                loading && (
                    <>
                        <Image 
                            src="/images/network.gif"
                            alt="Loading gif"
                            height={500}
                            width={500}
                            className="border rounded-md my-4"
                        />
                        <p className="text-4xl text-center">Detecting location...</p>
                    </>
                )
            }
        </div>
    )
}
