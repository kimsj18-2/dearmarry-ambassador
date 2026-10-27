import { useEffect, useRef, useState } from "react";
import "./App.css";

const LETTER_REVEAL_TIME = 5.08;

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
      <p className="invitation-belief">좋은 만남의 가치를 알아보는 당신과 함께라면, 디어메리의 진심이 더 멀리 닿을 수 있다고 믿습니다.</p>
      <span className="folio">DEAR MARRY · 01</span>
    </>
  );
}

function RightPage() {
  return (
    <>
      <span className="eyebrow">TOGETHER,</span>
      <span className="short-rule" />
      <h2 className="page-title"><span className="brand-inline">DEAR MARRY</span> 앰버서더로<br />당신을 초대합니다.</h2>
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
      <span className="eyebrow">WHO WE ARE LOOKING FOR</span>
      <Leaf className="page-leaf" />
      <h2 className="script">With sincerity</h2>
      <h3>이런 분과<br />함께하고 싶습니다.</h3>
      <p className="ambassador-region">디어메리 호주 앰버서더 · 호주 전역</p>
      <span className="short-rule" />
      <ul className="page-points ambassador-profile">
        <li>호주에 살고 있는 한인</li>
        <li>현지 한인 커뮤니티에서 활발히 활동하는 분</li>
        <li>진정성 있는 만남의 가치에 공감하는 분</li>
        <li>주변 사람의 이야기를 편하게 들어 주는 분</li>
      </ul>
      <span className="folio">DEAR MARRY · 02</span>
    </>
  );
}

function BenefitsRightPage() {
  return (
    <>
      <span className="eyebrow">AUSTRALIA AMBASSADOR</span>
      <h2 className="script">What you'll do</h2>
      <h3>하는 일</h3>
      <span className="short-rule" />
      <ul className="page-points ambassador-duties">
        <li>호주 한인 커뮤니티 · SNS에서 디어메리 소개</li>
        <li>현지 한인 모임 · 행사에서 디어메리 안내</li>
        <li>관심 있는 분을 상담 신청으로 연결</li>
        <li>현지 한인 사회의 분위기와 의견 전달</li>
      </ul>
      <div className="section-rule" />
      <span className="section-kicker">AMBASSADOR BENEFITS</span>
      <h3 className="section-heading">활동 혜택</h3>
      <ul className="page-points ambassador-rewards">
        <li>
          <strong>활동비 지급</strong>
          <small>금액 · 지급 기준 협의</small>
        </li>
        <li>
          <strong>멤버십 가입에 따른 인센티브 제공</strong>
          <small>금액 · 지급 기준 협의</small>
        </li>
      </ul>
      <span className="signature ambassador-signature">DEAR MARRY AMBASSADOR</span>
    </>
  );
}

function ApplicationLeftPage() {
  return (
    <>
      <span className="eyebrow">A LETTER FROM YOU</span>
      <Leaf className="page-leaf" />
      <h2 className="script">Tell us your story</h2>
      <h3>당신의 이야기를<br />들려주세요.</h3>
      <span className="short-rule" />
      <p>아래 내용을 중심으로 편안하게 작성해주세요.</p>
      <ul className="page-points application-points">
        <li>어떤 채널이나 커뮤니티에서 활동하고 있는지</li>
        <li>디어메리를 누구에게, 어떤 방식으로 소개하고 싶은지</li>
        <li>진정성 있는 만남의 가치에 왜 공감하는지</li>
      </ul>
      <p className="page-note">채널 규모보다 활동의 분위기와 브랜드에 대한 공감을 함께 봅니다.</p>
      <span className="folio">DEAR MARRY · 03</span>
    </>
  );
}

function ApplicationRightPage({ onSubmit, submissionState, submitError }) {
  const isSubmitting = submissionState === "submitting";

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
      <label><span>채널 URL</span><input name="url" placeholder="채널 주소나 이름을 적어주세요" /></label>
      <label><span>디어메리를 소개하고 싶은 이유</span><textarea name="message" rows="3" required placeholder="당신의 이야기를 들려주세요" /></label>
      <input className="form-honeypot" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <label className="consent"><input name="consent" type="checkbox" required /><span>신청 검토와 연락을 위한 정보 수집에 동의합니다.</span></label>
      {submitError && <p className="form-error" role="alert">{submitError}</p>}
      <button className="send-letter" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "편지를 보내는 중..." : "신청 편지 보내기"}
      </button>
    </form>
  );
}

function SpreadSide({ page, side, onSubmit, submissionState, submitError }) {
  if (page === 0) return side === "left" ? <LeftPage /> : <RightPage />;
  if (page === 1) return side === "left" ? <BenefitsLeftPage /> : <BenefitsRightPage />;
  return side === "left" ? <ApplicationLeftPage /> : (
    <ApplicationRightPage
      onSubmit={onSubmit}
      submissionState={submissionState}
      submitError={submitError}
    />
  );
}

function SubmissionComplete({ onEdit }) {
  return (
    <section className="submission-complete">
      <div className="completion-content">
        <span className="eyebrow">APPLICATION RECEIVED</span>
        <span className="completion-wordmark" aria-label="DEAR MARRY">DEAR MARRY</span>
        <div className="completion-status" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <path d="m8.5 16.5 5 5 10-11" />
          </svg>
        </div>
        <h2>당신의 편지가<br />디어메리에 도착했습니다.</h2>
        <p className="completion-lead">보내주신 이야기는 앰버서더 선정과 연락을 위해 소중히 확인하겠습니다.</p>
        <div className="completion-next">
          <span>NEXT STEPS</span>
          <ol>
            <li><small>01</small><strong>신청 내용 검토</strong></li>
            <li><small>02</small><strong>미팅 안내</strong></li>
            <li><small>03</small><strong>최종 결과 안내</strong></li>
          </ol>
        </div>
        <p className="completion-contact">미팅이 필요한 분께 남겨주신 이메일로 연락드리겠습니다.</p>
        <span className="completion-signature">Yours, Dear Marry</span>
      </div>
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
  const [submissionState, setSubmissionState] = useState("editing");
  const [submitError, setSubmitError] = useState("");
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
  const nextLabel = page === 0 ? "앰버서더 안내 보기 →" : "신청서 작성하기 →";

  const submitApplication = async (event) => {
    event.preventDefault();
    if (submissionState !== "editing") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const contact = String(formData.get("contact") || "").trim();
    const applicantName = String(formData.get("name") || "").trim();
    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);

    setSubmitError("");
    setSubmissionState("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/kimsj@letsdingco.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[디어메리 앰버서더] ${applicantName}님의 신청`,
          _template: "table",
          _captcha: "false",
          _honey: formData.get("_honey"),
          "이름 또는 활동명": applicantName,
          "연락처 또는 이메일": contact,
          "활동 채널": formData.get("channel"),
          "채널 URL": formData.get("url") || "미입력",
          "지원 동기": formData.get("message"),
          "개인정보 수집 동의": formData.get("consent") ? "동의함" : "동의하지 않음",
          "접수 페이지": window.location.href,
          ...(looksLikeEmail ? { email: contact } : {}),
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error("submission_failed");
      }

      form.reset();
      setSubmissionState("complete");
    } catch {
      setSubmissionState("editing");
      setSubmitError("전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  const isSubmitted = submissionState === "complete";
  const editApplication = () => {
    setSubmitError("");
    setSubmissionState("editing");
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

        <article className={`letter-overlay${turning ? ` is-turning is-${turnDirection}` : ""}${isSubmitted ? " is-submitted" : ""}`} aria-hidden={phase !== "open"}>
          {isSubmitted ? (
            <SubmissionComplete onEdit={editApplication} />
          ) : (
            <>
              <section className="video-page video-page-left">
                <SpreadSide page={baseLeftPage} side="left" onSubmit={submitApplication} submissionState={submissionState} submitError={submitError} />
                {page > 0 && !turning && (
                  <PageTurnControl onTurn={() => turnPage("previous")} direction="previous" number={`0${page}`} label={previousLabel} />
                )}
              </section>
              <section className="video-page video-page-right">
                <SpreadSide page={baseRightPage} side="right" onSubmit={submitApplication} submissionState={submissionState} submitError={submitError} />
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
        <article className={`mobile-pages${isSubmitted ? " is-submitted" : ""}`}>
          {isSubmitted ? (
            <SubmissionComplete onEdit={editApplication} />
          ) : (
            MOBILE_INVITATION_PAGES.map((mobilePage, index) => (
              <section
                className={`mobile-paper mobile-paper-${mobilePage.side}`}
                key={`${mobilePage.page}-${mobilePage.side}`}
                aria-label={`초대장 ${index + 1} / ${MOBILE_INVITATION_PAGES.length}`}
              >
                <SpreadSide page={mobilePage.page} side={mobilePage.side} onSubmit={submitApplication} submissionState={submissionState} submitError={submitError} />
              </section>
            ))
          )}
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
