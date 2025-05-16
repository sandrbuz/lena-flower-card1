import { useState } from "react";
import './CardForLena.css';

export default function CardForLena() {
  const [showFlowers, setShowFlowers] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient">
      <div className="card">
        <h1>Привет, Лена 😊</h1>
        <p>Сделал тебе маленькую открытку просто так.</p>
        <button onClick={() => setShowFlowers(true)}>
          Кликни сюда 🌸
        </button>
        {showFlowers && (
          <div className="flowers">
            🌸🌼🌺🌷🌻🌹🌼🌸🌺🌼
          </div>
        )}
      </div>
    </div>
  );
}