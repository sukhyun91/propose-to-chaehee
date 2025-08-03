
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const questions = [
  "아침에 출근 전에 내가 삶은 계란이랑 바나나 챙겨줄게. 채희의 허기 내가 책임져도 될까? 🍌🥚",
  "주말엔 같이 장 보고 내가 요리할게! 혹시 맛이 망해도 맛있게 먹어줄 수 있어? 🍳😆",
  "리버풀 경기할 땐 가끔 닭강정 시켜서 같이 보면 안 될까? 나 혼자 보기엔 아쉬워서... 🍗⚽❤️❤️",
  "퇴근하고는 같이 밥 먹으면서 오늘 어땠는지 얘기 나눠줄래? 채희 이야기 듣는 게 제일 좋거든 😆🍚",
  "재밌는 드라마 나오면 우리 같이 정주행 하는 거 어때? 근데 나 중간에 졸아도 이해해줄 거지? 😴📺",
  "채희가 힘든 날엔 아무 말 없이 꼭 안아줘도 괜찮을까? 말보단 포옹으로 위로하고 싶어 🤗🫂",
  "채희 눈에 내가 답답해 보여도 너무 뭐라하지 말고 상냥하게 대해줄 수 있어...?.. 호호 😅💗",
  "앞으로 평생 ‘채희 편’만 들 건데 각오돼 있지? 물론 이미 나는 채희만의 편이긴 해 😎❤️"
];

export default function Home() {
  const [step, setStep] = useState(0);

  const handleYes = () => {
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setStep("final");
    }
  };

  const renderContent = () => {
    if (step === 0) {
      return (
        <>
          <h1>To. 사랑하는 채희에게</h1>
          <p>오늘은 특별한 하루야.<br/>우리의 미래에 대해 한 번 상상해볼래? 🌸</p>
          <button onClick={handleYes}>시작하기</button>
        </>
      );
    } else if (typeof step === 'number' && step <= questions.length) {
      return (
        <>
          <Image src={`/images/q${step}.jpg`} layout="fill" objectFit="cover" className={styles.bg} alt={`q${step}`} />
          <div className={styles.overlay}>
            <p>{questions[step - 1]}</p>
            <button onClick={handleYes}>예</button>
          </div>
        </>
      );
    } else if (step === "final") {
      return (
        <>
          <h1>이 모든 상상들이<br/>현실이 되기를 바래.</h1>
          <p>나랑 결혼해줄래? 💍</p>
          <button onClick={() => setStep("retry")}>아니오</button>
        </>
      );
    } else {
      return (
        <>
          <p>다시 한 번 물어볼게,,<br/>이런 순간들을 너와 함께하고 싶어.<br/>나랑 결혼해줄래? 💍</p>
        </>
      );
    }
  };

  return (
    <div className={styles.container}>
      {renderContent()}
    </div>
  );
}
