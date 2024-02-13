import { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("თაკუს, იქნები ჩემი ვალენტინი?");
  const [noBtnText, setNoBtnText] = useState("არა");
  const [yesBtnText, setYesBtnText] = useState("კი");
  const [mainQuestionFontSize, setMainQuestionFontSize] = useState(32);
  const [refused, setRefused] = useState(0);
  const [agreed, setAgreed] = useState(false);

  const handleRefuseClick = (msg, refuseBtnText, agreeBtnText, fontSize) => {
    setQuestion(msg);
    setNoBtnText(refuseBtnText);
    setYesBtnText(agreeBtnText);
    setMainQuestionFontSize(fontSize);
    setRefused((prev) => prev + 1);
  };

  return (
    <div className={agreed ? "app-heart" : "app-default"}>
      {console.log(agreed)}
      {agreed ? (
        <h2>
          კაი ჰა, რადგან ეგრე ძალიან გინდა, იყავი ჩემი ვალენტინი. <br />
          🎉🎉🎉
        </h2>
      ) : (
        <div className="main-content">
          <h1
            className={refused === 5 ? "h1-show" : ""}
            style={{ fontSize: mainQuestionFontSize }}
          >
            {question}
          </h1>
          <div className="answers">
            <button
              onClick={() => setAgreed(true)}
              className={`yes-btn ${
                refused === 1
                  ? "big-1"
                  : refused === 2
                  ? "big-2"
                  : refused === 3
                  ? "big-3"
                  : refused === 4
                  ? "big-4"
                  : refused === 5
                  ? "big-5"
                  : ""
              }`}
            >
              {yesBtnText}
            </button>
            {refused === 1 ? (
              <button
                className="no-btn"
                onClick={() =>
                  handleRefuseClick(
                    "ვიცი რომ ჯიუტი ხარ, მაგრამ თაკო, რაიცი დღეს წინ რა გელოდება?",
                    "არათქო",
                    "კი",
                    28
                  )
                }
              >
                {noBtnText}
              </button>
            ) : refused === 2 ? (
              <button
                className="no-btn"
                onClick={() =>
                  handleRefuseClick(
                    "მგონი კიდევ ერთხელ უნდა დაფიქრდე, აბა პასუხი??",
                    "არა. slaaayyyy 💅",
                    "კი",
                    28
                  )
                }
              >
                {noBtnText}
              </button>
            ) : refused === 3 ? (
              <button
                className="no-btn"
                onClick={() =>
                  handleRefuseClick(
                    "თაკუს, საქმეები გადავდე დღეს რომ მენახე, ხომ იქნები ჩემი ვალენტინი?",
                    "მეზარება, 9ზე უნდა დავიძინო",
                    "კი",
                    28
                  )
                }
              >
                {noBtnText}
              </button>
            ) : refused === 4 ? (
              <button
                className="no-btn"
                onClick={() =>
                  handleRefuseClick(
                    "კარგი, საბოლოოა და არჩევანი შენზეა, მე არაფერს გაძალებ. იქნები თუ არა ჩემი ვალენტინი?",
                    "",
                    "კი, ვიქნები",
                    22
                  )
                }
              >
                {noBtnText}
              </button>
            ) : (
              <button
                className="no-btn"
                onClick={() =>
                  handleRefuseClick(
                    "რა არა გოგო, ნახე, თავიდან. თაკ, ტკბილო, იქნები ჩემი ვალენტინი?",
                    "მაინც არა",
                    "კი",
                    28
                  )
                }
              >
                {noBtnText}
              </button>
            )}
          </div>
        </div>
      )}
      <img src="" alt="" />
    </div>
  );
}

export default App;
