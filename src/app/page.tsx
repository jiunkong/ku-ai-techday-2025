import { LinkText } from "@/components/LinkText";
import Image from "next/image";

export default function Home() {
    return (
        <>            
            <div className="px-5 lg:px-15 mt-30 w-screen">
                <h2 className="lg:text-2xl font-bold">
                    고려대학교 ICT명품인재양성사업단/초지능연구센터
                </h2>
                <h1 className="text-5xl lg:text-6xl font-bold mt-2 mb-15 lg:mb-25">
                    AI TECH DAY 2025
                </h1>
                <LinkText link="/program" className="origin-left">
                    <div className="flex gap-2 text-lg items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        <span>2025.10.15(수) 10:00 ~ 18:00</span>
                    </div>
                </LinkText>
                <LinkText link="/location" className="origin-left mt-2">
                    <div className="flex gap-2 text-lg items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span>고려대학교 하나스퀘어 (지하1층)</span>
                    </div>
                </LinkText>
                <LinkText link="https://docs.google.com/forms/d/1NYJZySgrFojTQgK7ud3m5jnqGBF0Gyg3_Ki0wWrQKiA" className="origin-left mt-2" blank>
                    <div className="flex gap-2 text-lg items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                        <span>사전등록 바로가기</span>
                    </div>
                </LinkText>
                <div className="text-(--subtext) mt-1 ml-8">사전등록하신 분들에게는 배지(네임택)와 행사 당일 사용가능한 쿠폰을 제공합니다.</div>
                <div className="mt-15">
                    <h3 className="font-bold text-2xl">연구 교류 및 성과 공유</h3>
                    <ul className="mt-1 text-sm">
                        <li>사업단 소속 교수진 연구개발 성과 발표</li>
                        <li>사업단 산하 연구실 포스터 전시 및 데모</li>
                        <li>AI 기업 연구개발 성과 및 미래 전략 발표</li>
                        <li>기업체 홍보 및 리크루팅</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-2xl mt-10">초청강연</h3>
                    <p className="mt-1">정보통신기획평가원, KT, LG AI 연구원, 삼성전자, AWS, 네이버, 크래프톤</p>
                    <h3 className="font-bold text-2xl mt-5">Recruiting 참여 기업</h3>
                    <p className="mt-1">루닛, 삼성전자, 업스테이지, 크래프톤, 퓨리오사 AI, 한화비전, AWS, KT, LG AI 연구원, SKT</p>
                </div>
                <div className="mt-15 lg:mt-0 lg:absolute lg:top-0 lg:right-10 flex flex-col lg:items-end">
                    <div className="w-50 h-50 overflow-hidden rounded-full mx-auto">
                        <Image src={"/picture.png"} width={200} height={200} alt="" className="w-full h-full object-cover object-[center_80%]"/>
                    </div>
                    <div className="lg:text-right mt-5">
                        <h3 className="font-bold text-2xl">인사말</h3>
                        <h4 className="text-lg mt-2">ICT명품인재양성사업단/초지능연구센터장</h4>
                        <h4 className="text-xl font-bold">한정현 교수</h4>
                    </div>
                    <p className="mt-3 w-full lg:w-105">
                        고려대학교 ICT명품인재양성사업단/초지능연구센터는 올해 10월 15일(수)에 제3회 AI Tech Day를 개최합니다.
                        본교 하나스퀘어에서 열리는 AI Tech Day 2025에서는 사업단 소속 교수들이 올해 발표한 top-tier conference 논문과
                        현재 진행 중인 연구를 결합하여 압축 발표하고, 정보통신기획평가원 원장과 KT, LG AI 연구원, 삼성전자, AWS, 네이버, 크래프톤의
                        AI 연구개발 책임자들이 AI 연구개발 성과와 미래 전략을 발표합니다.
                        여기에 더불어, 사업단 소속 연구실의 포스터와 데모 세션이 준비되고, 기업체 홍보 및 리크루팅 프로그램도 마련됩니다. 
                        AI의 현재와 미래를 보고자 하는 분들의 많은 참석 바랍니다.
                    </p>
                    <LinkText link="https://mpij.korea.ac.kr/mpij/index.do" className="origin-right mt-2 mb-20 lg:mb-0" blank>
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>
                            <span>사업단 홈페이지</span>
                        </div>
                    </LinkText>
                </div>
            </div>
        </>
    )
}
