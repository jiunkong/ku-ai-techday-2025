const Row = (props: { start: string, end: string, program: string, organizer?: string, note?: string, center?: boolean }) => {
    return (
        <>
            <tr className={`${props.center ? "h-10" : "h-20"} lg:h-20`}>
                <td className="pl-2 text-sm lg:text-md w-24 lg:w-36 text-center lg:text-left">{props.start} - {props.end}</td>

                <td className={`hidden lg:table-cell pl-2 text-lg font-bold ${props.center ? "text-center text-(--title)" : ""}`}>{props.program}</td>
                <td className="hidden lg:table-cell pl-2">
                    <div>{props.organizer}</div>
                    { props.note && <span className="font-bold text-sm text-(--title) before:content-['•_']">{props.note}</span> }
                </td>

                <td className="lg:hidden">
                    <div className={`font-bold ${props.center ? "text-(--title)" : ""}`}>{props.program}</div>
                     { props.organizer && 
                        <div>
                            <span className="text-sm">{props.organizer}</span>
                            <span className="w-2 inline-block"></span>
                            { props.note && <span className="text-sm text-(--title) font-bold">{props.note}</span> }
                        </div>
                    }
                </td>
            </tr>
            <tr className="h-[1px] bg-(--delimiter)"><td colSpan={3}></td></tr>
        </>
    )
}

export default function Program() {
    return (
        <div className="w-screen pt-30 text-black">
            <h1 className="font-black text-4xl lg:text-5xl text-center text-(--title)">PROGRAM</h1>
            <table className="mx-auto mt-10 border-separate border-spacing-x-4 table-fixed pb-40">
                <thead className="text-lg text-left">
                    <tr className="hidden lg:table-row">
                        <th className="pl-2 w-36">시간</th>
                        <th className="pl-2 min-w-160">프로그램</th>
                        <th className="pl-2">연사</th>
                    </tr>
                    <tr className="h-3 hidden lg:table-row"></tr>
                    <tr className="h-[2px] bg-(--title)"><th colSpan={3}></th></tr>
                </thead>
                <tbody>
                    <Row start="10:00" end="10:10" program="개회사" organizer="한정현 사업단장" note="고려대 컴퓨터학과"/>
                    <Row start="10:10" end="10:40" program="K Intelligence: 한국적 AI로 여는 산업 혁신" organizer="배순민 AI Future Lab장" note="KT"/>
                    <Row start="10:40" end="11:00" program="K-Drive: AI 기반 미래 모빌리티 혁신" organizer="김진규 교수" note="고려대 컴퓨터학과"/>

                    <Row start="11:00" end="11:10" program="Break" center/>

                    <Row start="11:10" end="11:40" program="From Data to Agents: Scaling the GenAI Ecosystem" organizer="이문태 Superintelligence Lab장 상무" note="LG AI연구원"/>
                    <Row start="11:40" end="12:00" program="From Equations to Insights: AI-Driven Scientific Discovery" organizer="박성우 교수" note="고려대 컴퓨터학과"/>

                    <Row start="12:00" end="13:30" program="점심" center/>

                    <Row start="13:30" end="14:00" program="AX 2.0시대 우리의 준비" organizer="홍진배 원장" note="정보통신기획평가원"/>
                    <Row start="14:00" end="14:30" program="반도체 개발 및 제조를 위한 AI" organizer="최창규 DS AI 개발실장 부사장" note="삼성전자"/>

                    <Row start="14:30" end="14:40" program="Break" center/>

                    <Row start="14:40" end="15:10" program="Agentic AI on AWS" organizer="김경윤 솔루션아키텍트 매니저" note="AWS"/>
                    <Row start="15:10" end="15:30" program="Conversational Agentic AI: Clarifying Ambiguity for Intentional Actions" organizer="서홍석 교수" note="고려대 컴퓨터학과"/>

                    <Row start="15:30" end="16:00" program="Coffee Break 및 포스터 세션" center/>

                    <Row start="16:00" end="16:30" program="Towards Robust and Efficient Multi-modal AI" organizer="윤상두 AI Lab Research Director" note="네이버"/>
                    <Row start="16:30" end="16:50" program="Animating 3D Digital Humans from a Single Image to Any Motion: Bridging 3D Vision and Generative AI" organizer="문경식 교수" note="고려대 컴퓨터학과"/>

                    <Row start="16:50" end="17:00" program="Break" center/>

                    <Row start="17:00" end="17:30" program="AI X GAME - 크래프톤에서의 AI 적용 사례" organizer="성준식 AI Interactive Agent 실장" note="크래프톤"/>
                    <Row start="17:30" end="17:50" program="Embodied Agent in Digital World" organizer="강형엽 교수" note="고려대 컴퓨터학과"/>

                    <Row start="17:50" end="18:00" program="시상 및 폐회사 (포스터/데모)" organizer="한정현 사업단장" note="고려대 컴퓨터학과"/>
                </tbody>
            </table>
        </div>
    )
}