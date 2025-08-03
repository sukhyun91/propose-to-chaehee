import { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

const pages = [
  {
    type: "intro",
    content: [
      "To. 사랑하는 채희에게",
      "오늘은 특별한 하루야.",
      "우리의 미래에 대해 한 번 상상해볼래? 🌸",
    ],
  },
  { question: "내가 아침마다 커피 내려주면 좋겠어? ☕" },
  { question: "주말엔 같이 장보고 요리할래? 🧺🍳" },
  { question: "같이 보는 드라마, 나랑 끝까지 볼 자신 있어? 🎬" },
  { question: "1년에 한 번은 무조건 여행 가는 거 어때? ✈️" },
  { question: "네가 감기 걸리면 내가 간호해줄게. 괜찮아? 🤒💊" },
  { question: "아이 키우면서 서로 밤도 새줄 수 있겠지? 👶" },
  { question: "혹시 내가 삐져도 먼저 말 걸어줄 수 있어? 😗👉" },
  {
    type: "confess",
    content: [
      "이 모든 상상들이",
      "현실이 되기를 바래.",
      "나랑 결혼해줄래? 💍",
    ],
  },
  {
    type: "ending",
    content: [
      "💖 우리 이야기의 시작 💖",
      "다시 보고 싶다면 아래 버튼을 눌러줘!",
    ],
  },
];

function App() {
  const [page, setPage] = useState(0);
  const nextPage = () => {
    setPage((prev) => (prev < pages.length - 1 ? prev + 1 : 0));
  };

  const current = pages[page];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-pink-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-center px-6"
        >
          {current.type === "intro" && (
            <div>
              {current.content.map((line, i) => (
                <p key={i} className="text-xl mb-2">{line}</p>
              ))}
              <button onClick={nextPage} className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-full">
                시작하기 💌
              </button>
            </div>
          )}

          {current.question && (
            <div>
              <p className="text-2xl font-bold mb-6">{current.question}</p>
              <div className="flex gap-4 justify-center">
                <button onClick={nextPage} className="bg-green-400 px-5 py-2 rounded-full text-white">예</button>
                <button onClick={nextPage} className="bg-red-400 px-5 py-2 rounded-full text-white">아니오</button>
              </div>
            </div>
          )}

          {current.type === "confess" && (
            <div>
              {current.content.map((line, i) => (
                <p key={i} className="text-xl mb-2">{line}</p>
              ))}
              <button onClick={nextPage} className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-full">
                마지막으로 💖
              </button>
            </div>
          )}

          {current.type === "ending" && (
            <div>
              {current.content.map((line, i) => (
                <p key={i} className="text-lg mb-2">{line}</p>
              ))}
              <button onClick={nextPage} className="mt-6 bg-purple-500 text-white px-6 py-2 rounded-full">
                다시 보기 🔁
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
