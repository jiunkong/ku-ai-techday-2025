"use client";
import { LinkText } from "@/components/LinkText";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface Speech {
    name: string,
    content: string
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
                <h1 className="text-(--title) text-4xl font-black">INVITED SPEAKERS</h1>
                <div className="hidden lg:block grow bg-(--title) h-1"></div>
            </div>
            <div className="flex flex-col lg:pl-8 mb-15">
                <SpeakerItem image="/speaker/6.png" name="배순민" desc="KT" career={[
                    "現) KT AI Future Lab장 (Chief Responsible AI Officer)",
                    "現) 한국공학한림원 컴퓨팅분과 정회원",
                    "現) KAIST 문화기술대학원 겸직교수",
                    "現) 서울대학교 국가미래전략원 자문위원",
                    "現) 공공데이터전략위원회 위원",
                    "現) KBS AI방송혁신자문위원회 위원",
                    "現) 금융보안자문위원회 디지털혁신분과 위원",
                    "現) 개인정보보호위원회 인공지능 프라이버시 민관 정책협의회 위원",
                    "現) 개인정보보호위원회 개인정보 기술포럼 기술분과 위원 ",
                    "現) 과학기술정보통신부 데이터분쟁조정위원회 위원 ",
                    "現) 과학기술정보통신부 국가전략기술 기술조정위원회 안전신뢰AI 책임위원",
                    "現) 행정안전부 재난안전정보 공동이용협의회 위원",
                    "現) 산업부 산업융합 규제특례심의위원회 위원",
                    "現) 서울혁신대학지원위원회 위원 ",
                    "現) 경기도 디지털 대전환 위원회 부위원장",
                    "現) 과실연 AI미래포럼 공동의장",
                    "現) 대한전자공학회 학회 협동부회장",
                    "現) 한국인공지능학회 이사",
                    "現) 한국정보과학회 CG&I 소사이어티 대외협력 부회장",
                    "現) 한국문화예술교육진흥원 인공지능 문화예술교육 정책자문단 위원 ",
                    "前) 대통령직속 디지털플랫폼정부위원회 위원",
                    "前) 고용노동부 인공지능과 고용노동의 미래 포럼 인공지능분야 포럼위원",
                    "前) 한국정보과학회 부회장 (‘22)",
                    "前) 과학기술정보통신부 전략기술기획자문단",
                    "前) 네이버 클로바AI 리더 (‘18~’20)",
                    "前) 삼성/한화테크윈 로봇사업부 AI개발팀장 (‘10~’17)",
                    "前) 서울특별시 4차 산업혁명위원회 위원",
                    "前) KAIST-KT 공동연구센터 공동연구소장"
                ]} academy={[
                    "MIT EECS/CSAIL (Media lab 부전공)석/박사(‘09)",
                    "KAIST 전산학과(응용수학,경영공학부전공)학사('03)"
                ]} speech={{
                    name: "K Intelligence: 한국적 AI로 여는 산업 혁신",
                    content: ""
                }} priority/>

                <SpeakerItem image="/speaker/4.png" name="이문태" desc="LG AI 연구소" academy={[
                    "2001-2006 서강대학교 졸업",
                    "2009-2012 스탠포드 석사 졸업",
                    "2012-2018 코넬 박사 졸업"
                ]} career={[
                    "2019-2022 Research Scientist, Microsoft Research",
                    "2018-현재 Assistant Professor, University of Illinois Chicago",
                    "2021-2022 Director, LG AI Research",
                    "2023-2024 Senior Director, LG AI Research",
                    "2025-현재 Vice President, LG AI Research"
                ]} speech={{
                    name: "From Data to Agents: Scaling the GenAI Ecosystem",
                    content: `파인튜닝이 반드시 필요한 도메인과 태스크들
학습 데이터를 어떻게 자동생성하고 품질의 자동검수를 진행할지
생성된 데이터로 어떤 에이전트들을 자동으로 학습하고 AI Transformation을 가속화 할지`
                }}/>

                <SpeakerItem image="/speaker/1.png" name="최창규" desc="삼성전자" career={[
                    "2025 삼성전자 DS AI 개발실장 부사장",
                    "2021 삼성전자 SAIT AI 연구센터장 전무",
                    "2020 삼성전자 SAIT Computing Platform Lab장 상무",
                    "2018 삼성전자 SAIT Computer Vision Lab장 상무",
                    "2015 삼성전자 SAIT SW Solution Lab 상무",
                    "1999 삼성전자 SAIT (옛 종합기술원) 입사"
                ]} academy={["1999 KAIST 전기및전자공학과 박사 "]} speech={{
                    name: "반도체 개발 및 제조를 위한 AI",
                    content: `인공지능이 기획, 설계, 제조, 검사, 패키징 등 반도체 산업의 전 과정에 걸쳐 어떻게 융합되고 있는지 살펴봅니다.
이러한 융합을 통해 수율 제고, 품질 향상, 시간 단축 등 실제적인 생산 효율성 증대가 가능함을 설명합니다.
반도체 분야의 주요 과제인 전문 지식 학습 및 활용, 제조 데이터 보안 및 활용, 도메인 전문가와 AI의 협업에 대한 논의를 진행합니다.`
                }}/>

                <SpeakerItem name="김경윤" image="/speaker/2.png" desc="AWS" academy={[
                    "2020-2021 알토대(구 헬싱키경제대) 경영학석사 졸업",
                    "1988-1992 서울대학교 자연대 계산통계학과 졸업"
                ]} career={[
                    "현재: 아마존웹서비스 솔루션아키텍트 매니저",
                    "2020-2021: 퀘스트글로벌 CTO",
                    "2005-2020: 마이크로소프트 솔루션 사업부 총괄",
                    "2003-2005 시벨시스템 컨설턴트",
                    "1999-2002 오원 (글로벌 온라인 투자은행 start-up) 기술이사",
                    "1995-1998 오라클 소프트웨어 엔지니어"
                ]} speech={{
                    name: "Agentic AI on AWS",
                    content: `생성형 인공지능 기술은 빠르게 발전하면서 다양한 인공지능 에이전트 출현하고 있고, 그 에이전트들이 연결되어 복잡한 문제를 처리하는 에이전트 인공지능 시스템으로 변화가 보입니다.
아마존웹서비스는 인공지능 에이전트 구현에 필요한 인프라스트럭처, 에이전트 프레임워크와 도구를 포함한 AWS AI Stack을 제공합니다.
인공지능 에이전트는 산업 분야 별로 초기 사례가 나오고 있고, 보안을 강화하면서 에이전트 마켓플레이스가 성장할 것을 예상합니다.`
                }}/>

                <SpeakerItem name="윤상두" desc="네이버" image="/speaker/5a.png" academy={[
                    "서울대학교 전기컴퓨터공학부 박사 (2017)",
                    "서울대학교 전기컴퓨터공학부 석사 (2013)",
                    "서울대학교 전기컴퓨터공학부 학사 (2010)"
                ]} career={[
                    "2023 - 현재 네이버 AI Lab Research Director",
                    "2022 - 현재 서울대학교 AI연구원 겸임 교수",
                    "2018 - 2022 네이버 AI Lab Research Scientist"
                ]} speech={{
                    name: "멀티모달 관련된 주제예정",
                    content: ``
                }}/>

                <SpeakerItem image="/speaker/3.png" name="성준식" desc="크래프톤" academy={["2012 서울대학교 박사 졸업"]}
                career={[
                    "2025년 크래프톤 AI Interactive Agent 실장, AI 제작혁신 실장(겸), AI 서비스 실장(겸)",
                    "2023년 크래프톤 응용 딥러닝실 실장",
                    "2016~2022년 삼성전자 무선사업부 AI팀 (빅스비 보이스 개발)",
                    "2013~2015년 삼성전자 무선사업부 S보이스 개발그룹"
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