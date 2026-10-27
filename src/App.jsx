import { useEffect, useRef, useState } from "react";
import "./App.css";

const LETTER_REVEAL_TIME = 5.08;
const AMBASSADOR_APPLICATION_URL = "https://claude.ai/artifact/PYy9GDcEWhATuJ6AhyTy7x#ambassador";

const MOBILE_INVITATION_PAGES = [
  { page: 0, side: "left" },
  { page: 0, side: "right" },
  { page: 1, side: "left" },
  { page: 1, side: "right" },
  { page: 2, side: "left" },
  { page: 2, side: "right" },
];

function Leaf({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path d="M18 104 C42 83 61 59 91 14" stroke="#77866d" strokeWidth="1.5" />
      {[
        "M40 83 Q13 70 18 52 Q40 57 40 83",
        "M51 72 Q80 72 83 51 Q61 49 51 72",
        "M62 55 Q40 42 47 25 Q66 34 62 55",
        "M74 38 Q96 39 105 19 Q84 17 74 38",
        "M87 20 Q75 5 83 0 Q97 9 87 20",
      ].map((d, index) => (
        <path
          key={d}
          d={d}
          fill={index % 2 ? "#8c9b80" : "#708469"}
          stroke="#63775d"
          strokeWidth=".8"
        />
      ))}
    </svg>
  );
}

function SpreadHeading({ eyebrow, script, kicker, children }) {
  return (
    <header className="spread-heading">
      <span className="eyebrow">{eyebrow}</span>
      <div className="spread-pretitle">
        {script && <h2 className="script">{script}</h2>}
        {kicker && <span className="section-kicker">{kicker}</span>}
      </div>
      <div className="spread-title-block">
        <h2 className="spread-title">{children}</h2>
      </div>
      <span className="short-rule" />
    </header>
  );
}

function LeftPage() {
  return (
    <>
      <Leaf className="page-leaf" />
      <SpreadHeading eyebrow="DEAR YOU," script="An invitation">
        좋은 인연을 더 멀리<br />전해주실 당신에게.
      </SpreadHeading>
      <p>좋은 인연은 때로 한 사람의<br />진심 어린 소개에서 시작됩니다.</p>
      <p>디어메리는 지역과 지인의 범위를 넘어 더 많은 사람이 진지한 인연을 만날 수 있도록 새로운 연결을 만들어가고 있습니다.</p>
      <p className="invitation-belief">좋은 만남의 가치를 알아보는 당신과 함께라면,<br />디어메리의 진심이 더 멀리 닿을 수 있다고 믿습니다.</p>
      <span className="folio">DEAR MARRY · 01</span>
    </>
  );
}

function RightPage() {
  return (
    <>
      <SpreadHeading>
        <span className="brand-inline">DEAR MARRY</span> 앰버서더로<br />당신을 초대합니다.
      </SpreadHeading>
      <p>디어메리는 한 번의 만남보다, 한 사람의 평생을 생각합니다.</p>
      <p>서류와 인터뷰로 회원을 확인하고, 전담 매니저가 생활과 바람을 들은 뒤 추천하는 이유와 함께 상대를 소개합니다.</p>
      <p>디어메리가 사람을 소개하는 방식처럼, 우리의 이야기도 진심을 담아 전해주실 분과 함께하고 싶습니다.</p>
      <p>당신의 채널과 커뮤니티에서 좋은 만남의 가능성을 전해주세요.</p>
      <div className="section-rule" />
      <p className="closing">좋은 인연의 가능성을<br />우리와 함께 넓혀주시겠어요?</p>
      <span className="signature ambassador-signature">DEAR MARRY AMBASSADOR</span>
      <Leaf className="corner-leaf" />
    </>
  );
}

function BenefitsLeftPage() {
  return (
    <>
      <Leaf className="page-leaf" />
      <SpreadHeading script="With sincerity">
        이런 분과 함께하고 싶습니다.
      </SpreadHeading>
      <ul className="page-points ambassador-profile">
        <li>호주에 살고 있는 한인</li>
        <li>현지 한인 커뮤니티에서 활발히 활동하는 분</li>
        <li>진정성 있는 만남의 가치에 공감하는 분</li>
        <li>주변 사람의 이야기를 편하게 들어 주는 분</li>
      </ul>
      <p className="page-note">좋은 만남의 가치에 공감하고,<br />진심을 담아 함께해 주실 분을 기다립니다.</p>
      <span className="folio">DEAR MARRY · 02</span>
    </>
  );
}

function BenefitsRightPage() {
  return (
    <>
      <SpreadHeading>
        함께하는 일
      </SpreadHeading>
      <ul className="page-points ambassador-duties">
        <li>호주 한인 커뮤니티 · SNS에서 디어메리 소개</li>
        <li>현지 한인 모임 · 행사에서 디어메리 안내</li>
        <li>관심 있는 분을 상담 신청으로 연결</li>
        <li>현지 한인 사회의 분위기와 의견 전달</li>
      </ul>
      <p className="duties-note">당신이 있는 곳에서, 좋은 인연의 시작을 함께 만들어주세요.</p>
      <span className="signature ambassador-signature">DEAR MARRY AMBASSADOR</span>
    </>
  );
}

function ApplicationLeftPage() {
  return (
    <>
      <Leaf className="page-leaf" />
      <SpreadHeading script="Tell us your story">
        당신의 이야기를 들려주세요.
      </SpreadHeading>
      <p>아래 내용을 중심으로 편안하게 작성해주세요.</p>
      <ul className="page-points application-points">
        <li>어떤 채널이나 커뮤니티에서 활동하고 있는지</li>
        <li>디어메리를 누구에게, 어떤 방식으로 소개하고 싶은지</li>
        <li>진정성 있는 만남의 가치에 왜 공감하는지</li>
      </ul>
      <p className="application-invite-note">함께하고 싶은 이야기를 디어메리에 들려주세요.</p>
      <span className="folio">DEAR MARRY · 03</span>
    </>
  );
}

function ApplicationRightPage() {
  return (
    <div className="application-cta-page">
      <SpreadHeading>
        활동 혜택
      </SpreadHeading>
      <span className="section-kicker benefits-list-kicker">AMBASSADOR BENEFITS</span>
      <ul className="page-points ambassador-rewards application-rewards">
        <li>
          <strong>활동비 지급</strong>
          <small>금액 및 지급 기준 협의</small>
        </li>
        <li>
          <strong>멤버십 가입 연계 인센티브</strong>
          <small>금액 및 지급 기준 협의</small>
        </li>
      </ul>
      <div className="section-rule" />
      <a
        className="send-letter application-link"
        href={AMBASSADOR_APPLICATION_URL}
        target="_blank"
        rel="noreferrer"
      >
        앰버서더 신청하기 →
      </a>
      <span className="signature ambassador-signature">DEAR MARRY AMBASSADOR</span>
    </div>
  );
}

function SpreadSide({ page, side }) {
  if (page === 0) return side === "left" ? <LeftPage /> : <RightPage />;
  if (page === 1) return side === "left" ? <BenefitsLeftPage /> : <BenefitsRightPage />;
  return side === "left" ? <ApplicationLeftPage /> : <ApplicationRightPage />;
}

function PageTurnControl({ onTurn, direction = "next", number, label }) {
  const isPrevious = direction === "previous";
  return (
    <button
      type="button"
      className={`page-turn-zone page-turn-zone--${isPrevious ? "left" : "right"}`}
      onClick={onTurn}
      aria-label={label}
    >
      <span className="turn-edge" aria-hidden="true" />
      <span className="turn-copy">
        <small>{isPrevious ? "PREVIOUS" : "NEXT"} · {number}</small>
        {label}
      </span>
    </button>
  );
}

function TurningLeaf({ direction, fromPage, targetPage }) {
  const frontPage = direction === "next" ? fromPage : targetPage;
  const backPage = direction === "next" ? targetPage : fromPage;
  return (
    <div className={`turning-leaf turning-leaf--${direction}`} aria-hidden="true">
      <section className={`video-page turning-face turning-face-front spread-page-${frontPage}`}><SpreadSide page={frontPage} side="right" /></section>
      <section className={`video-page turning-face turning-face-back spread-page-${backPage}`}><SpreadSide page={backPage} side="left" /></section>
    </div>
  );
}

export default function App() {
  const [phase, setPhase] = useState("idle");
  const [page, setPage] = useState(0);
  const [turning, setTurning] = useState(false);
  const [turnDirection, setTurnDirection] = useState("next");
  const [fromPage, setFromPage] = useState(0);
  const [targetPage, setTargetPage] = useState(0);
  const videoRef = useRef(null);
  const turnTimers = useRef([]);

  useEffect(() => () => {
    videoRef.current?.pause();
    turnTimers.current.forEach(clearTimeout);
  }, []);

  const playInvitation = async () => {
    if (phase === "playing") return;
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.currentTime = Math.max(0, (video.duration || 7.29) - 0.08);
      setPhase("open");
      return;
    }

    video.currentTime = 0;
    setPhase("playing");
    try {
      await video.play();
    } catch {
      setPhase("idle");
    }
  };

  const turnPage = (direction) => {
    if (turning) return;
    const nextPage = page + (direction === "next" ? 1 : -1);
    if (nextPage < 0 || nextPage > 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPage(nextPage);
      return;
    }
    setFromPage(page);
    setTargetPage(nextPage);
    setTurnDirection(direction);
    setTurning(true);
    turnTimers.current = [
      setTimeout(() => setPage(nextPage), 480),
      setTimeout(() => setTurning(false), 960),
    ];
  };

  const baseLeftPage = turning && turnDirection === "previous" ? targetPage : page;
  const baseRightPage = turning && turnDirection === "next" ? targetPage : page;
  const previousLabel = page === 1 ? "← 초대장으로 돌아가기" : "← 앰버서더 안내로 돌아가기";
  const nextLabel = page === 0 ? "앰버서더 안내 보기 →" : "활동 혜택 · 신청 안내 보기 →";

  return (
    <main className={`dm dm--${phase}`}>
      <div className="film-frame">
        <video
          ref={videoRef}
          className="envelope-film"
          src="./assets/envelope-opening.mp4"
          poster="./assets/envelope-poster.jpg"
          preload="auto"
          playsInline
          muted
          onTimeUpdate={(event) => {
            if (phase === "playing" && event.currentTarget.currentTime >= LETTER_REVEAL_TIME) {
              setPhase("open");
            }
          }}
          onEnded={() => setPhase("open")}
        />

        {phase === "idle" && (
          <button className="film-hit" type="button" onClick={playInvitation} aria-label="봉투를 열어 초대장 보기">
            <span>OPEN INVITATION</span>
          </button>
        )}

        <article className={`letter-overlay${turning ? ` is-turning is-${turnDirection}` : ""}`} aria-hidden={phase !== "open"}>
          <section className={`video-page video-page-left spread-page-${baseLeftPage}`}>
            <SpreadSide page={baseLeftPage} side="left" />
            {page > 0 && !turning && (
              <PageTurnControl onTurn={() => turnPage("previous")} direction="previous" number={`0${page}`} label={previousLabel} />
            )}
          </section>
          <section className={`video-page video-page-right spread-page-${baseRightPage}`}>
            <SpreadSide page={baseRightPage} side="right" />
            {page < 2 && !turning && (
              <PageTurnControl onTurn={() => turnPage("next")} number={`0${page + 2}`} label={nextLabel} />
            )}
          </section>
          {turning && <TurningLeaf direction={turnDirection} fromPage={fromPage} targetPage={targetPage} />}
        </article>
      </div>

      {phase === "open" && (
        <article className="mobile-pages">
          {MOBILE_INVITATION_PAGES.map((mobilePage, index) => (
            <section
              className={`mobile-paper mobile-paper-${mobilePage.side} spread-page-${mobilePage.page}`}
              key={`${mobilePage.page}-${mobilePage.side}`}
              aria-label={`초대장 ${index + 1} / ${MOBILE_INVITATION_PAGES.length}`}
            >
              <SpreadSide page={mobilePage.page} side={mobilePage.side} />
            </section>
          ))}
        </article>
      )}

      {phase !== "open" && (
        <footer className="dm-footer">
          <button type="button" onClick={playInvitation} disabled={phase === "playing"}>
            {phase === "playing" ? "초대장을 펼치는 중..." : "초대장 열어보기 ↗"}
          </button>
          <p aria-live="polite">
            {phase === "playing" ? "A special invitation for you" : "DEAR MARRY"}
          </p>
        </footer>
      )}
    </main>
  );
}
