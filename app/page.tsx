"use client";
import Image from "next/image";
import { useState } from "react";

// import styles from "./page.module.less";
import "./page.css";

const demoItems = [
  {
    text: "inspiration",
  },
  {
    text: "team syncs",
  },
  {
    text: "design systems",
  },
  {
    text: "visual assets ",
  },
  {
    text: "development",
  },
];

export default function Home() {
  const [headText, setHeadText] = useState("未移入");

  const onMouseEnter = (
    e: MouseEvent<HTMLDivElement, MouseEvent>,
    text: string
  ) => {
    setHeadText(text);
  };

  const onMouseLeave = () => {
    setHeadText("未移入");
  };

  return (
    <div>
      <div className="font-bold pageHead">{headText}</div>
      <div className="pageBody">
        {demoItems.map((item) => (
          <div
            className="pageText"
            onMouseLeave={onMouseLeave}
            onMouseEnter={(e) => onMouseEnter(e, item.text)}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
