import React from "react";
import BackButton from "../../../common/Components/BackButton";
import {
  Info, ShieldCheck, Radiation, Users, BookOpen, Megaphone,
  Map, Volume2, UserPlus, AlertCircle
} from "lucide-react";

const iconMap = {
  "About the Jaduguda UCIL Awareness Portal": Info,
  "Who is UCIL?": ShieldCheck,
  "What's Happening in Jaduguda?": Radiation,
  "Why This Portal?": Users,
  "What You'll Find Here": BookOpen,
  "Who Is This Portal For?": Megaphone,
  "Our Vision": Map,
  "Radiation: What People Don't Know": AlertCircle,
  "Timeline of Jaduguda's Uranium Legacy": Volume2,
  "Voices from the Ground": UserPlus,
  "Join the Movement": Megaphone
};

const iconColors = {
  "About the Jaduguda UCIL Awareness Portal": "#00AEEF",
  "Who is UCIL?": "#10B981",
  "What's Happening in Jaduguda?": "#F59E0B",
  "Why This Portal?": "#EC4899",
  "What You'll Find Here": "#6366F1",
  "Who Is This Portal For?": "#22D3EE",
  "Our Vision": "#8B5CF6",
  "Radiation: What People Don't Know": "#EF4444",
  "Timeline of Jaduguda's Uranium Legacy": "#F97316",
  "Voices from the Ground": "#0EA5E9",
  "Join the Movement": "#84CC16"
};

const sections = [
  {
    title: "About the Jaduguda UCIL Awareness Portal",
    content: [
      "The Jaduguda UCIL Awareness Portal is a digital initiative designed to educate and empower communities affected by uranium mining in India, particularly in and around Jaduguda, Jharkhand.",
      "This portal brings together verified information, legal resources, and voices from the ground to ensure that the concerns of local communities are heard and acted upon."
    ]
  },
  {
    title: "Who is UCIL?",
    content: [
      "Uranium Corporation of India Limited (UCIL) is a public sector enterprise under the Department of Atomic Energy, Government of India.",
      "Established in 1967 to mine and process uranium ore, UCIL operates several mines in Jharkhand — including Jaduguda, Narwapahar, Turamdih, and Bagjata — but has drawn criticism for its environmental and health impacts."
    ]
  },
  {
    title: "What's Happening in Jaduguda?",
    content: [
      "Jaduguda is India's oldest uranium mining site, active for over 50 years. Nearby tribal communities often lack proper safety awareness and protection.",
      "Residents have reported serious health issues — birth defects, cancer, miscarriages — caused by radiation and water contamination."
    ]
  },
  {
    title: "Why This Portal?",
    content: [
      "This platform bridges the gap between affected communities and vital resources — legal help, health rights, and scientific data.",
      "It goes beyond what's covered in the mainstream media using satellite data, reports, and local stories."
    ]
  },
  {
    title: "What You'll Find Here",
    content: [
      "Environmental Reports: Pollution maps, deforestation, and water studies.",
      "Legal Rights: Forest Rights Act, compensation laws, and more.",
      "Community Stories: Testimonies from villagers near UCIL sites.",
      "Report Issues: A prototype for reporting legal/safety violations.",
      "News & Research: Verified academic and media articles."
    ]
  },
  {
    title: "Who Is This Portal For?",
    content: [
      "Local Tribal Families: Needing awareness about rights and health.",
      "Students & Researchers: Exploring environmental and nuclear law.",
      "Journalists & Activists: Documenting mining's human cost.",
      "Policy Makers & NGOs: Driving sustainable and accountable mining."
    ]
  },
  {
    title: "Our Vision",
    content: [
      "A future where communities are not ignored, but respected.",
      "Where development coexists with justice, and local voices shape national action."
    ]
  },
  {
    title: "Radiation: What People Don't Know",
    content: [
      "Radiation is invisible, but dangerous. Most villagers don't know how it spreads or how it affects health.",
      "Lack of signage and awareness means daily exposure — in drinking water, air, food. This platform spreads scientific knowledge in simple language."
    ]
  },
  {
    title: "Timeline of Jaduguda's Uranium Legacy",
    content: [
      "1967: First uranium mine opened.",
      "1980s-1990s: Expansion to Narwapahar, Bhatin.",
      "1999: First birth defect reports.",
      "2012: Media/legal attention rises.",
      "2020+: Activism and demands grow.",
      "Now: Digital platforms amplify voices."
    ]
  },
  {
    title: "Voices from the Ground",
    content: [
      "This portal doesn't speak for people — it speaks with them.",
      "Real interviews and testimonies from families affected by mining, showing that true knowledge lies in their lived experience."
    ]
  },
  {
    title: "Join the Movement",
    content: [
      "Awareness is step one. Whether you're a student or a policymaker, your voice matters.",
      "Explore, share, and act — so Jaduguda can move toward justice."
    ]
  }
];

const About = () => {
  return (
    <div className="bg-[#000000] text-white px-4 sm:px-6 lg:px-20 py-10 min-h-screen">
      <BackButton />
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-400 mb-8 text-center">
        About the Jaduguda UCIL Awareness Portal
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {sections.map((section, index) => {
          const Icon = iconMap[section.title] || Info;
          const color = iconColors[section.title] || "#00AEEF";
          return (
            <div
              key={index}
              className="bg-[#0b1120] rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-5 h-5" color={color} />
                <h2 className="text-lg sm:text-xl font-semibold text-sky-300">
                  {section.title}
                </h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-200">
                {section.content.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
