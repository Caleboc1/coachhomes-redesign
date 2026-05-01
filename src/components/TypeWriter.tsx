// components/Typewriter.tsx
"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  delay?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function Typewriter({ 
  texts, 
  delay = 0, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000 
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const handleTyping = () => {
        const fullText = texts[currentTextIndex];
        
        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
          setIsWaiting(false);
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }
      };

      const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
      
      if (!isDeleting && currentText === texts[currentTextIndex] && !isWaiting) {
        setIsWaiting(true);
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
      
      return () => clearTimeout(timeout);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, isWaiting, texts, typingSpeed, deletingSpeed, pauseTime, delay]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}