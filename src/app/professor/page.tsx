"use client";
import { LinkText } from "@/components/LinkText";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const ProfessorItem = (props: { name: string, image: string, url: string }) => {
    return (
        <Link href={props.url} target="_blank">
            <motion.div className="flex items-center hover:bg-(--hover-bg) transition-colors duration-200 py-3 w-70 cursor-pointer rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}>
                
                    <div className="overflow-hidden rounded-full w-15 h-15 lg:w-20 lg:h-20 ml-2 lg:ml-5">
                        <Image src={props.image} width={300} height={300} alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className="ml-8">
                        <div className="font-bold text-lg ml-2">
                            {props.name}
                        </div>
                        <div className="flex gap-1 items-center scale-[0.8] text-lg text-(--title)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>
                            <span>연구실</span>
                        </div>
                    </div>
                
            </motion.div>
        </Link>
    )
}

export default function Professor() {
    return (
        <div className="w-[80vw] lg:w-[70vw] mx-auto text-black">
            <div className="flex items-center gap-12 mt-27 lg:mt-31">
                <h1 className="text-(--title) text-4xl font-black">PROFESSORS</h1>
                <div className="hidden lg:block grow bg-(--title) h-1"></div>
            </div>
            <div className="mt-12 lg:grid lg:grid-cols-3 gap-y-5 flex flex-col mb-20">
                <ProfessorItem name="김진규" image="/professor/1.jpg" url="https://visionai.korea.ac.kr/"/>
                <ProfessorItem name="박성우" image="/professor/2.jpg" url="https://www.gi.korea.ac.kr/"/>
                <ProfessorItem name="서홍석" image="/professor/3.jpg" url="https://miil.korea.ac.kr/"/>
                <ProfessorItem name="문경식" image="/professor/4.jpg" url="https://www.vcai.korea.ac.kr/"/>
                <ProfessorItem name="강형엽" image="/professor/5.jpg" url="https://iiixr.korea.ac.kr/home"/>
            </div>
        </div>
    )   
}