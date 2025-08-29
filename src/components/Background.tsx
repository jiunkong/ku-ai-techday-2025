"use client";

import Image from "next/image"
import { usePathname } from "next/navigation";

export const Background = () => {
    const pathname = usePathname()

    return (
        <div className="w-screen h-screen fixed top-0">
            <div className={`w-screen h-screen ${pathname === '/' ? "bg-(--background)" : "bg-(--foreground)"}`}></div>
            { pathname === '/' && 
                <Image className="opacity-30" src={"/background.jpg"} fill style={{ objectFit: "cover", objectPosition: "center" }} alt=""/>
            }
        </div>
    )
}