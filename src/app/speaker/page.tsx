"use client";
import { LinkText } from "@/components/LinkText";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface Speech {
    name: string,
    content: string
}

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

const SpeakerItem = (props: { image: string, name: string, desc: string, career: string[], academy: string[], speech: Speech, priority?: boolean, objectX?: number }) => {
    return (
        <div className="mt-15">
            <div className="lg:flex">
                <div className="w-50 h-50 rounded-xl overflow-hidden">
                    <Image src={props.image} width={600} height={600} priority={props.priority} className={"w-full h-full object-cover"} alt="" style={{ objectPosition: props.objectX ? `${props.objectX}% center` : undefined }}/>
                </div>
                <div className="mt-10 lg:ml-20 lg:mt-0">
                    <h2>
                        <span className="font-bold text-3xl">{props.name}</span>
                        <span className="ml-2 text-(--title) font-bold">{props.desc}</span>
                    </h2>
                    <div className="mt-3">
                        <h3 className="font-bold text-(--title) mb-1">학력</h3>
                        <ol>
                            { props.academy.map((item, i) => {
                                return (
                                    <li key={i} className="text-sm">
                                        {item}
                                    </li>
                                )
                            }) }
                        </ol>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-bold text-(--title) mb-1">경력</h3>
                        <ol className="max-h-[140px] overflow-y-auto">
                            { props.career.map((item, i) => {
                                return (
                                    <li key={i} className="text-sm">
                                        {item}
                                    </li>
                                )
                            }) }
                        </ol>
                    </div>
                </div>
            </div>
            <div className="mt-3 lg:mt-0">
                <h3 className="font-bold text-(--title) mb-1">강연</h3>
                <h4 className="font-bold mb-1">{props.speech.name}</h4>
                <p className="whitespace-pre-wrap text-sm max-w-[80vw]">{props.speech.content}</p>
            </div>
            <div className="hidden lg:block bg-(--title) h-1 w-32 mt-10"></div>
        </div>
    )
}

export default function Speaker() {
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
            <div className="flex items-center gap-12 mt-27 lg:mt-31">
                <h1 className="text-(--title) text-4xl font-black">INVITED SPEAKERS</h1>
                <div className="hidden lg:block grow bg-(--title) h-1"></div>
            </div>
            <div className="flex flex-col lg:pl-8 pb-35">
                <SpeakerItem image="/speaker/6.png" name="배순민" desc="KT" career={[
                    "2021 ~ 현재 KT AI Future Lab장 상무 (Chief Responsible AI Officer)",
                    "2018 ~ 2020 네이버 Lead Clova AI",
                    "2010 ~ 2017 Samsung/Hanwha Techwin AI Team Leader",
                ]} academy={[
                    "2009 MIT EECS/CSAIL (Media lab 부전공) 석/박사",
                    "2003 KAIST 전산학과 (응용수학,경영공학부전공) 학사"
                ]} speech={{
                    name: "K Intelligence: 한국적 AI로 여는 산업 혁신",
                    content: `KT는 K Intelligence를 통해 공공, 금융, 법률, 교육, 의료 등 핵심 산업에서 AI 혁신을 주도하고 있습니다.
믿:음 등 독자 모델로 한국어와 한국적 맥락을 강화하고 글로벌 협업을 확대하고 있습니다.
K Intelligence Suite(K RAI, K RAG, K Studio 등)를 통해 책임 있는 개발, 정밀한 지식 활용, 손쉬운 서비스 구축을 지원합니다.
이번 발표에서는 기술적 차별성과 더불어, 미래 인재가 주도할 수 있는 한국적 AI 혁신의 방향을 제시합니다.`
                }} priority/>

                <SpeakerItem image="/speaker/4.jpg" name="이문태" desc="LG AI연구원" academy={[
                    "2018 코넬대학교 컴퓨터공학 박사",
                    "2012 스탠포드대학교 컴퓨터공학 석사",
                    "2006 서강대학교 컴퓨터공학, 수학, 심리학 학사"
                ]} career={[
                    "2025 ~ 현재 Superintelligence Lab장 상무, LG AI Research",
                    "2023 ~ 2024 Senior Director, LG AI Research",
                    "2021 ~ 2022 Director, LG AI Research",
                    "2019 ~ 2022 Research Scientist, Microsoft Research",
                    "2018 ~ 현재 Assistant Professor, University of Illinois Chicago"
                ]} speech={{
                    name: "From Data to Agents: Scaling the GenAI Ecosystem",
                    content: `파인튜닝이 반드시 필요한 도메인과 태스크 식별
학습 데이터의 자동 생성 및 품질 자동 검수
데이터 생성에서 에이전트 학습까지, AI Transformation의 가속화`
                }}/>

                <SpeakerItem image="/speaker/7.png" name="홍진배" desc="정보통신기획평가원" academy={[
                    "2008 멘체스터대학교 기술경영학 박사",
                    "2005 런던정치경제대학교 정보경영학 석사",
                    "1995 고려대학교 무역학과 학사"
                ]} career={[
                    "2024 ~ 현재 정보통신기획평가원 원장",
                    "2022 ~ 2024 과학기술정보통신부 네트워크정책실장",
                    "2021 ~ 2022 과학기술정보통신부 정보보호네트워크정책관",
                    "2019 ~ 2021 과학기술정보통신부 통신정책관",
                    "1995 ~ 2019 과학기술정보통신부(옛 정보통신부) 공직",
                    "1994 행정고시 제38회 합격",
                ]} speech={{
                    name: "AX 2.0시대 우리의 준비",
                    content: `최근 급변하고 있는 AI 트렌드를 심층 분석하고, AX 2.0 시대를 주도할 핵심 주권 기술인 AI 모델, AI 반도체, 차세대 네트워크, 보안 기술의 발전 현황과 중요성을 공유합니다.
이와 함께, 우리나라가 글로벌 AI 경쟁에서 살아남기 위해 R&D 혁신 방향과 AI 시대의 새로운 기회를 포착하고, 미래를 선도할 방안을 함께 모색합니다.`
                }}/>

                <SpeakerItem image="/speaker/1.jpg" name="최창규" desc="삼성전자" career={[
                    "2025 ~ 현재 삼성전자 DS AI 개발실장 부사장",
                    "2021 ~ 2024 삼성전자 SAIT AI 연구센터장 전무",
                    "2020 ~ 2020 삼성전자 SAIT Computing Platform Lab장 상무",
                    "2018 ~ 2019 삼성전자 SAIT Computer Vision Lab장 상무",
                    "2015 ~ 2017 삼성전자 SAIT SW Solution Lab 상무",
                    "1999 ~ 2014 삼성전자 SAIT (옛 종합기술원) 전문연구원",
                ]} academy={["1987 ~ 1999  KAIST 전기및전자공학과 학/석/박사"]} speech={{
                    name: "반도체 개발 및 제조를 위한 AI",
                    content: `인공지능이 기획, 설계, 제조, 검사, 패키징 등 반도체 산업의 전 과정에 걸쳐 어떻게 융합되고 있는지 살펴봅니다.
이러한 융합을 통해 수율 제고, 품질 향상, 시간 단축 등 실제적인 생산 효율성 증대가 가능함을 설명합니다.
반도체 분야의 주요 과제인 전문 지식 학습 및 활용, 제조 데이터 보안 및 활용, 도메인 전문가와 AI의 협업에 대한 논의를 진행합니다.`
                }}/>

                <SpeakerItem name="김경윤" image="/speaker/2.png" desc="AWS" academy={[
                    "2021 알토대 (구 헬싱키경제대) 경영학 석사",
                    "1992 서울대학교 자연대 계산통계학과 학사"
                ]} career={[
                    "2022 ~ 현재 아마존웹서비스 Solution Architect Manager",
                    "2020 ~ 2022 퀘스트글로벌 CTO",
                    "2005 ~ 2020 마이크로소프트 솔루션 사업부 총괄",
                    "2003 ~ 2005 시벨시스템 컨설턴트",
                    "1999 ~ 2002 오원 (글로벌 온라인 투자은행 start-up) 기술이사",
                    "1995 ~ 1998 오라클 소프트웨어 엔지니어",
                ]} speech={{
                    name: "Agentic AI on AWS",
                    content: `생성형 인공지능 기술은 빠르게 발전하면서 다양한 인공지능 에이전트 출현하고 있고, 그 에이전트들이 연결되어 복잡한 문제를 처리하는 에이전트 인공지능 시스템으로 변화가 보입니다.
아마존웹서비스는 인공지능 에이전트 구현에 필요한 인프라스트럭처, 에이전트 프레임워크와 도구를 포함한 AWS AI Stack을 제공합니다.
인공지능 에이전트는 산업 분야 별로 초기 사례가 나오고 있고, 보안을 강화하면서 에이전트 마켓플레이스가 성장할 것을 예상합니다.`
                }}/>

                <SpeakerItem name="윤상두" desc="네이버" image="/speaker/5a.png" academy={[
                    "2017 서울대학교 전기컴퓨터공학부 박사",
                    "2013 서울대학교 전기컴퓨터공학부 석사",
                    "2010 서울대학교 전기컴퓨터공학부 학사"
                ]} career={[
                    "2023 ~ 현재 네이버 AI Lab Research Director",
                    "2022 ~ 현재 서울대학교 AI연구원 겸임 교수",
                    "2018 ~ 2022 네이버 AI Lab Research Scientist",
                ]} speech={{
                    name: "Towards robust and efficient multi-modal AI",
                    content: `AI research trends in the large foundation model era
NAVER AI's research on reliable and efficient multimodal AI
Discussion on the future direction of multimodal AI`
                }}/>

                <SpeakerItem image="/speaker/3.png" name="성준식" desc="크래프톤" academy={[
                    "2012 서울대학교 전기컴퓨터공학부 박사",
                    "2008 서울대학교 전기컴퓨터공학부 석사",
                    "2006 서울대학교 전기컴퓨터공학부 학사"
                ]}
                career={[
                    "2025 ~ 현재 크래프톤 AI Interactive Agent 실장, AI 제작혁신 실장(겸), AI 서비스 실장(겸)",
                    "2023 ~ 2024 크래프톤 응용 딥러닝실 실장",
                    "2016 ~ 2022 삼성전자 무선사업부 AI팀 (빅스비 보이스 개발)",
                    "2013 ~ 2015 삼성전자 무선사업부 S보이스 개발그룹",
                ]} speech={{
                    name: "AI X GAME - 크래프톤에서의 AI 적용 사례 ",
                    content: `Generative AI의 게임 제작 적용 가능성
대규모 유저 대상 AI 운용 사례 소개: PUBG Anti-Cheat
새로운 게임 경험을 구현하는 Co-Playable Character(CPC)`
                }} objectX={80}/>
            </div>
        </div>
    )   
}