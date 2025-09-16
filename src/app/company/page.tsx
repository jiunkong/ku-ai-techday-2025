"use client";

import Image from "next/image"
import { motion } from "motion/react";

export default function Company() {
    const makeLogos = () => {
        const result = []

        for (let i = 0; i < 12; i++) {
            result.push(
                <motion.div key={i} className="w-full h-16 lg:h-20 shadow-lg px-6 lg:px-12 py-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}>
                    <Image src={`/company/${i+1}.png`} alt={`logo${i+1}`} width={2000} height={1000} className="w-full h-full object-contain"/>
                </motion.div>
            )
        }

        return result
    }

    return (
        <div className="w-screen pt-35 lg:pt-40 text-black px-5 lg:px-20">
            <h1 className="font-black text-4xl lg:text-5xl text-center text-(--title) mb-15 lg:mb-20">참여 기관</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-12 gap-y-4 lg:gap-y-8 pb-20 lg:pb-43">
                {makeLogos()}
            </div>
        </div>
    )
}