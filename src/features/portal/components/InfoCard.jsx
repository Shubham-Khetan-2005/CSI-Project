import React from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    icon: "🌿",
    title: "Environmental Impact",
    description: "How uranium mining affects forests, water, and air.",
    link: "/environmental-impact",
  },
  {
    icon: "📜",
    title: "Know Your Rights",
    description: "Legal protections for tribal communities.",
    link: "/know-your-rights",
  },
  {
    icon: "📰",
    title: "Latest Updates",
    description: "Recent news and official developments.",
    link: "/latest-updates",
  },
  {
    icon: "📢",
    title: "Report a Concern",
    description: "Raise your voice through our dummy tool.",
    link: "/grievance",
  },
  {
    icon: "🏢",
    title: "About UCIL",
    description: "Learn about UCIL and its operations.",
    link: "/about",
  },
  {
    icon: "📷",
    title: "Life Around the Mine",
    description: "Visual stories from affected communities.",
    link: "/life-around-mine",
  },
];

const InfoCard = () => {
  return (
    <>
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#1e293b] rounded-xl p-6 shadow-md hover:shadow-lg transition"
        >
          <div className="text-3xl mb-4">{card.icon}</div>
          <h3 className=" text-green-700 text-xl font-semibold mb-2">{card.title}</h3>
          <p className="text-sm text-gray-300 mb-4">{card.description}</p>
          <Link to={card.link} className="text-sky-400 font-medium hover:underline">
            Explore →
          </Link>
        </div>
      ))}
    </>
  );
};

export default InfoCard;
