import { useEffect, useRef, useState } from "react";
import "./App.css";

const LETTER_REVEAL_TIME = 5.08;

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

function LeftPage() {
  return (
    <>
      <span className="eyebrow">DEAR YOU,</span>
      <Leaf className="page-leaf" />
      <h2 className="script">An invitation</h2>
      <h3>좋은 인연을 더 멀리<br />전해주실 당신에게.</h3>
      <span className="short-rule" />
      <p>좋은 인연은 때로 한 사람의<br />진심 어린 소개에서 시작됩니다.</p>
      <p>디어메리는 지역과 지인의 범위를 넘어 더 많은 사람이 진지한 인연을 만날 수 있도록 새로운 연결을 만들어가고 있습니다.</p>
      <span className="folio">DEAR MARRY · 01</span>
    </>
  );
}

function RightPage() {
  return (
    <>
      <span className="eyebrow">TOGETHER,</span>
      <span className="short-rule" />
      <h2 className="page-title">DEAR MARRY 앰버서더로<br />당신을 초대합니다.</h2>
      <p>이제 그 이야기를 당신의 시선과 언어로 더 많은 사람에게 전해주셨으면 합니다.</p>
      <p>당신의 채널에서 디어메리를 소개하고, 좋은 만남을 기다리는 사람에게 우리의 초대장을 건네주세요.</p>
      <p>당신의 소개가 실제 가입으로 이어지면 정해진 기준에 따라 감사의 마음을 담은 리워드를 전해드립니다.</p>
      <div className="section-rule" />
      <p className="closing">좋은 인연의 가능성을<br />우리와 함께 넓혀주시겠어요?</p>
      <span className="signature">Yours, Dear Marry</span>
      <Leaf className="corner-leaf" />
    </>
  );
}

function BenefitsLeftPage() {
  return (
    <>
      <span className="eyebrow">AMBASSADOR BENEFITS</span>
      <Leaf className="page-leaf" />
      <h2 className="script">A meaningful connection</h2>
      <h3>당신이 건넨 한 번의 소개가<br />새로운 인연의 시작이 됩니다.</h3>
      <span className="short-rule" />
      <p>디어메리의 가치와 이야기를 당신의 언어로 전해주세요. 진지한 만남을 기다리는 누군가에게 새로운 가능성을 건네는 일입니다.</p>
      <div className="benefit-flow" aria-label="앰버서더 활동 흐름">
        <span>SHARE</span><i>·</i><span>CONNECT</span><i>·</i><span>REWARD</span>
      </div>
      <span className="folio">DEAR MARRY · 02</span>
    </>
  );
}

function BenefitsRightPage() {
  return (
    <>
      <span className="eyebrow">HOW IT WORKS</span>
      <span className="short-rule" />
      <h2 className="page-title benefits-title">좋은 인연을 전하고<br />감사의 리워드를 받아보세요.</h2>
      <div className="benefit-list">
        <div><span>01</span><p><b>디어메리 소개하기</b><br />당신의 채널과 커뮤니티에 디어메리의 이야기를 전해주세요.</p></div>
        <div><span>02</span><p><b>새로운 가입 연결하기</b><br />전용 초대 경로를 통해 실제 가입으로 이어진 연결을 확인합니다.</p></div>
        <div><span>03</span><p><b>감사의 리워드 받기</b><br />정해진 기준을 충족한 소개에 대해 리워드를 전해드립니다.</p></div>
      </div>
      <p className="benefit-note">리워드 금액과 지급 기준은 최종 확정 후 별도로 안내됩니다.</p>
      <span className="signature">Dear Marry Ambassador</span>
    </>
  );
}

function ApplicationLeftPage() {
  return (
    <>
      <span className="eyebrow">A LETTER FROM YOU</span>
      <Leaf className="page-leaf" />
      <h2 className="script">Tell us your story</h2>
      <h3>당신만의 시선으로<br />디어메리를 소개해주세요.</h3>
      <span className="short-rule" />
      <p>정해진 답은 없습니다. 어떤 채널에서 어떤 이야기로 사람들과 만나고 있는지 편안하게 들려주세요.</p>
      <p>보내주신 내용은 앰버서더 선정과 연락을 위해서만 확인합니다.</p>
      <span className="folio">DEAR MARRY · 03</span>
    </>
  );
}

function ApplicationRightPage({ onSubmit }) {
  return (
    <form className="application-form" onSubmit={onSubmit}>
      <span className="eyebrow">AMBASSADOR APPLICATION</span>
      <span className="short-rule" />
      <h2 className="application-title">디어메리에게 보내는 편지</h2>
      <div className="form-row">
        <label><span>이름 또는 활동명</span><input name="name" required placeholder="성함을 적어주세요" /></label>
        <label><span>연락처 또는 이메일</span><input name="contact" required placeholder="연락 가능한 정보를 적어주세요" /></label>
      </div>
      <label><span>활동 채널</span><input name="channel" required placeholder="Instagram, YouTube, Blog 등" /></label>
      <label><span>채널 URL</span><input name="url" type="url" placeholder="https://" /></label>
      <label><span>디어메리를 소개하고 싶은 이유</span><textarea name="message" rows="3" required placeholder="당신의 이야기를 들려주세요" /></label>
      <label className="consent"><input type="checkbox" required /><span>신청 검토와 연락을 위한 정보 수집에 동의합니다.</span></label>
      <button className="send-letter" type="submit">신청 편지 보내기</button>
    </form>
  );
}

function SpreadSide({ page, side, onSubmit }) {
  if (page === 0) return side === "left" ? <LeftPage /> : <RightPage />;
  if (page === 1) return side === "left" ? <BenefitsLeftPage /> : <BenefitsRightPage />;
  return side === "left" ? <ApplicationLeftPage /> : <ApplicationRightPage onSubmit={onSubmit} />;
}

function SubmissionComplete({ onEdit }) {
  return (
    <section className="submission-complete">
      <span className="eyebrow">YOUR LETTER HAS BEEN SENT</span>
      <div className="completion-seal" aria-hidden="true"><span>DM</span></div>
      <h2>당신의 편지가<br />디어메리에 도착했습니다.</h2>
      <p>소중한 이야기를 천천히 확인한 뒤<br />남겨주신 연락처로 답장을 보내드릴게요.</p>
      <span className="completion-signature">Yours, Dear Marry</span>
      <button type="button" onClick={onEdit}>신청서 다시 보기</button>
    </section>
  );
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
      <section className="video-page turning-face turning-face-front"><SpreadSide page={frontPage} side="right" /></section>
      <section className="video-page turning-face turning-face-back"><SpreadSide page={backPage} side="left" /></section>
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
  const [submitted, setSubmitted] = useState(false);
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

  const resetInvitation = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    turnTimers.current.forEach(clearTimeout);
    turnTimers.current = [];
    setPage(0);
    setTurning(false);
    setTurnDirection("next");
    setFromPage(0);
    setTargetPage(0);
    setSubmitted(false);
    setPhase("idle");
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
  const previousLabel = page === 1 ? "← 초대장으로 돌아가기" : "← 혜택 페이지로 돌아가기";
  const nextLabel = page === 0 ? "혜택페이지보기 →" : "신청서 작성하기 →";

  const submitApplication = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

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

        <article className={`letter-overlay${turning ? ` is-turning is-${turnDirection}` : ""}${submitted ? " is-submitted" : ""}`} aria-hidden={phase !== "open"}>
          {submitted ? (
            <SubmissionComplete onEdit={() => setSubmitted(false)} />
          ) : (
            <>
              <section className="video-page video-page-left">
                <SpreadSide page={baseLeftPage} side="left" onSubmit={submitApplication} />
                {page > 0 && !turning && (
                  <PageTurnControl onTurn={() => turnPage("previous")} direction="previous" number={`0${page}`} label={previousLabel} />
                )}
              </section>
              <section className="video-page video-page-right">
                <SpreadSide page={baseRightPage} side="right" onSubmit={submitApplication} />
                {page < 2 && !turning && (
                  <PageTurnControl onTurn={() => turnPage("next")} number={`0${page + 2}`} label={nextLabel} />
                )}
              </section>
              {turning && <TurningLeaf direction={turnDirection} fromPage={fromPage} targetPage={targetPage} />}
            </>
          )}
        </article>
      </div>

      {phase === "open" && (
        <article className={`mobile-pages${turning ? ` is-turning is-${turnDirection}` : ""}${submitted ? " is-submitted" : ""}`}>
          {submitted ? (
            <SubmissionComplete onEdit={() => setSubmitted(false)} />
          ) : (
            <>
              <section className="mobile-paper mobile-paper-left">
                <SpreadSide page={page} side="left" onSubmit={submitApplication} />
                {page > 0 && !turning && (
                  <PageTurnControl onTurn={() => turnPage("previous")} direction="previous" number={`0${page}`} label={previousLabel} />
                )}
              </section>
              <section className="mobile-paper mobile-paper-turnable">
                <SpreadSide page={page} side="right" onSubmit={submitApplication} />
                {page < 2 && !turning && (
                  <PageTurnControl onTurn={() => turnPage("next")} number={`0${page + 2}`} label={nextLabel} />
                )}
              </section>
            </>
          )}
        </article>
      )}

      <footer className="dm-footer">
        {phase === "open" ? (
          <button type="button" onClick={resetInvitation}>다시 보기 ↺</button>
        ) : (
          <button type="button" onClick={playInvitation} disabled={phase === "playing"}>
            {phase === "playing" ? "초대장을 펼치는 중..." : "초대장 열어보기 ↗"}
          </button>
        )}
        <p aria-live="polite">
          {phase === "open" ? "Yours, Dear Marry" : phase === "playing" ? "A special invitation for you" : "DEAR MARRY"}
        </p>
      </footer>
    </main>
  );
}
