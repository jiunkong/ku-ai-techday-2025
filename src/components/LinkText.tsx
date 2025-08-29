"use client";

import { motion } from "motion/react";
import Link from "next/link";

export const LinkText = (props: { link: string, text: string, className?: string }) => {
    return (
        <motion.div className={props.className}
            whileHover={{ color: "var(--hover)" }}
            transition={{ duration: 0.2 }}>
            <Link href={props.link}>{props.text}</Link>
        </motion.div>
    )
}