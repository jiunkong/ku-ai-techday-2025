"use client";

import { useState } from "react";
import { LinkText } from "./LinkText"
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Background } from "./Background";

export const Header = () => {
    const [opened, setOpened] = useState<boolean>(false)
    const pathname = usePathname()

    const handleClick = () => setOpened(false)

    return (
        <div className="fixed top-0 w-screen h-fit z-50">
            <div className={`flex justify-between w-screen px-6 lg:px-8 py-5 relative z-50 ${pathname === '/' ? 'text-white bg-black/90' : "text-black bg-(--foreground) shadow-lg"}`}>
                <div className="font-bold text-xl">
                    <LinkText link="/" white>AI Tech Day 2025</LinkText>
                </div>
                <div className="hidden lg:flex gap-5">
                    <LinkText link="/" white>Home</LinkText>
                    <LinkText link="/program" white>프로그램</LinkText>
                    <LinkText link="/speaker" white>연사 소개</LinkText>
                    <LinkText link="https://docs.google.com/forms/d/1NYJZySgrFojTQgK7ud3m5jnqGBF0Gyg3_Ki0wWrQKiA" blank white>사전등록</LinkText>
                    <LinkText link="/location" white>오시는길</LinkText>
                </div>
                <div className="lg:hidden" onClick={() => setOpened(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <AnimatePresence>
                    { opened &&
                    <motion.div className="absolute top-0 left-0 w-screen h-80 bg-(--foreground) z-100 text-black shadow-lg"
                        initial={{ y: -150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -150, opacity: 0 }}
                        transition={{ duration: 0.2 }}>
                        <div className="absolute right-0 mt-3 mr-3" onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className="text-center mt-15 flex flex-col gap-5 text-xl font-bold items-start px-5">
                            <LinkText link="/" white onClick={handleClick}>Home</LinkText>
                            <LinkText link="/program" white onClick={handleClick}>프로그램</LinkText>
                            <LinkText link="/speaker" white onClick={handleClick}>연사 소개</LinkText>
                            <LinkText link="https://docs.google.com/forms/d/1NYJZySgrFojTQgK7ud3m5jnqGBF0Gyg3_Ki0wWrQKiA" white blank onClick={handleClick}>사전등록</LinkText>
                            <LinkText link="/location" white onClick={handleClick}>오시는길</LinkText>
                        </div>
                    </motion.div>
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}