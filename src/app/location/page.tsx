"use client";

import { LinkText } from "@/components/LinkText";
import useKakaoLoader from "@/hooks/useKakaoLoader"
import Image from "next/image";
import { Map, MapMarker } from "react-kakao-maps-sdk"

const Title = (props: { text: string }) => {
    return (
        <div className="flex w-full items-center justify-center mt-10">
            <div className="h-[3px] bg-(--title) w-16 lg:w-32"></div>
            <div className="text-(--title) font-bold text-xl mx-4">{props.text}</div>
            <div className="h-[3px] bg-(--title) w-16 lg:w-32"></div>
        </div>
    )
}

export default function Location() {
    useKakaoLoader()

    return (
        <div className="w-[80vw] lg:w-[70vw] mx-auto text-black flex flex-col items-center mb-20">
            <div className="mt-35">
                <div className="flex items-center w-fit mx-auto">
                    <span className="text-(--title)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="size-6">
                            <path 
                                fillRule="evenodd" 
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0ZM15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" 
                                clipRule="evenodd" 
                            />
                        </svg>
                    </span>
                    <span className="font-bold ml-1">서울 성북구 고려대로22길 6-7</span>
                </div>
                <div className="text-xl font-bold mt-2 ml-1">고려대학교 하나스퀘어 (지하1층)</div>
            </div>
            <Title text="지도"/>
            <LinkText blank className="mt-4 mb-2"
                link="https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,505738,1134818&rt1=&rt2=%EA%B3%A0%EB%A0%A4%EB%8C%80%ED%95%99%EA%B5%90%20%ED%95%98%EB%82%98%EC%8A%A4%ED%80%98%EC%96%B4&rtIds=,17564816">
                <div className="flex gap-2 items-center font-bold text-center w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span>지도 바로가기</span>
                </div>
            </LinkText>
            <div className="w-80 h-80 lg:w-85 lg:h-85">
                <Map id="map"
                    center={{
                        x: 505738, 
                        y: 1134818
                    }}
                    style={{ width: "100%", height: "100%" }}
                    level={3} // 지도의 확대 레벨
                >
                    <MapMarker position={{
                        x: 505738, 
                        y: 1134818
                    }}></MapMarker>
                </Map>
            </div>
            <Title text="행사장 도면"/>
            <div className="w-80 h-80 lg:w-100 lg:h-100 mt-5">
                <Image src={"/image.png"} width={988} height={1300} className="w-full h-full object-contain" alt=""/>
            </div>
        </div>
    )
}