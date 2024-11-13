'use client'

import React from "react"
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

export default function TextRevealCardPreview() {
    return (
      <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
        <TextRevealCard
          text="Your Health in the dark!"
          revealText=" its clear as the sky now!" 
        >
          
      
        </TextRevealCard>
      </div>
    );
  }
  