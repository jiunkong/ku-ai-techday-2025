import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="flex justify-between h-15 border-t border-gray-500 ml-5 mr-10 mt-15">
            <div className="w-60 h-full">
                <Image src={"/logo.png"} width={938} height={226} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="h-full flex flex-col justify-center">
                <Link href={"https://mpij.korea.ac.kr/mpij/index.do"} target="_blank" rel="noreferrer">
                    <span className="text-gray-500">Copyright © </span>
                    <span className="text-orange-500">ICT Creative Consilience Foundation </span>
                    <span className="text-gray-500">2025</span>
                </Link>
            </div>
        </footer>
    )
}