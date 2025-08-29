import { LinkText } from "./LinkText"

export const Header = () => {
    return (
        <div className="flex justify-between w-screen px-6 py-4">
            <div className="font-bold text-xl">AI Tech Day 2025</div>
            <div className="flex gap-4">
                <LinkText link="" text="Home"/>
                <LinkText link="" text="프로그램"/>
                <LinkText link="" text="교수소개"/>
                <LinkText link="" text="연사소개"/>
                <LinkText link="" text="오시는길"/>
            </div>
        </div>
    )
}