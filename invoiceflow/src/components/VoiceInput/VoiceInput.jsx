import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./VoiceInput.css";

const VoiceInput = ({ onVoiceResult }) => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  const handleStop = () => {
    SpeechRecognition.stopListening();
    onVoiceResult(transcript);
  };

  return (
    <div className="voice-input">
      <h2>🎙️ Voice Invoice Creator</h2>
      <p>{listening ? "Listening..." : "Click start to speak"}</p>
      <p>
        <strong>Transcript:</strong> {transcript}
      </p>
      <div className="buttons">
        <button
          onClick={() =>
            SpeechRecognition.startListening({
              continuous: true,
              language: "en-IN",
            })
          }
        >
          Start
        </button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
    </div>
  );
};

export default VoiceInput;
