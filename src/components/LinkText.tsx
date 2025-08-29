"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { PropsWithChildren } from "react";

export const LinkText = (props: PropsWithChildren<{ link: string, className?: string, white?: boolean, blank?: boolean, onClick?: () => void }>) => {
    return (
        <motion.div className={`${ props.white ? "" : "text-(--link)"} ${props.className}`} onClick={props.onClick}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}>
            <Link href={props.link} target={props.blank ? "_blank" : "_self"}>{props.children}</Link>
        </motion.div>
    )
}