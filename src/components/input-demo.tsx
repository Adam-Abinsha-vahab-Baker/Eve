"use client";
import { useState } from "react";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's my blood pressure?",
    "When did i went to the doctor for tests?",
    "What is an ECG?"
   
  ];
  const [inputText, setInputText] = useState('')
  const [showCard, setShowCard] = useState(false)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputText.trim() !== '') {
      setShowCard(true)
    }
  }
  return (
    
    <PlaceholdersAndVanishInput
    placeholders={placeholders}
    onChange={handleInputChange}
    onSubmit={handleSubmit}
  />
    
  );
}
