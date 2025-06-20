import React from "react";
import {
  AlertTriangle,
  ScrollText,
  Gavel,
  ShieldCheck,
  BookUser,
  Radio,
  FileText,
  BadgeCheck,
} from "lucide-react";
import BackButton from "../../../common/Components/BackButton";

const updates = [
  {
    title: "Radiation Reports and Health Warnings",
    icon: AlertTriangle,
    color: "#EF4444",
    content:
      "Recent tests conducted by independent agencies have revealed elevated radiation levels in certain areas close to the mining zones. Public health officials recommend limited exposure and increased health screenings for families residing nearby. It is advised to monitor symptoms and consult local clinics.",
  },
  {
    title: "Environmental Surveys and Water Testing",
    icon: ScrollText,
    color: "#10B981",
    content:
      "The latest water quality surveys in the region indicate the presence of heavy metals and radioactive particles beyond permissible limits in nearby rivers and groundwater. Efforts are being made to test alternate water sources and install filtration units.",
  },
  {
    title: "Legal Petitions and Court Orders",
    icon: Gavel,
    color: "#FBBF24",
    content:
      "Legal cases have been filed against UCIL for environmental negligence and health risks. The Jharkhand High Court recently issued a notice seeking detailed reports from UCIL on waste disposal practices and radiation control measures.",
  },
  {
    title: "Safety Inspection Outcomes",
    icon: ShieldCheck,
    color: "#0EA5E9",
    content:
      "Government safety inspectors recently visited Jaduguda mines and highlighted major safety lapses, including lack of warning signage, insufficient protective gear for workers, and improper waste storage. UCIL has been asked to address these issues by the next quarter.",
  },
  {
    title: "Community Awareness Drives",
    icon: BookUser,
    color: "#8B5CF6",
    content:
      "Several NGOs have started awareness campaigns on the rights of local residents and safe practices. Flyers, videos, and local meetings are helping spread awareness among the affected tribal population.",
  },
  {
    title: "Radiation Exposure Warnings",
    icon: Radio,
    color: "#EC4899",
    content:
      "The local panchayat has issued precautionary notices urging residents to avoid open defecation or farming in areas near mining waste dumps, citing increased Geiger readings and risk of radiation exposure.",
  },
  {
    title: "Right to Access Information",
    icon: FileText,
    color: "#06B6D4",
    content:
      "Under RTI (Right to Information) Act, you can request reports about UCIL's mining operations, safety audits, and radiation monitoring. NGOs are helping locals file RTI queries for greater transparency.",
  },
  {
    title: "Support from National Human Rights Bodies",
    icon: BadgeCheck,
    color: "#84CC16",
    content:
      "The National Human Rights Commission has taken suo moto cognizance of complaints and sent a team to review the impact of uranium mining on indigenous communities. A detailed public report is expected soon.",
  },
];

const LatestUpdates = () => {
  return (
    <div className="bg-[#000000] text-white px-4 sm:px-6 lg:px-20 py-10 min-h-screen">
      <BackButton />
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white-400 mb-6 sm:mb-8 text-center">
          Latest Updates
        </h1>
        <p className="text-sm sm:text-base leading-relaxed text-center mb-10">
          Stay updated with the latest developments in and around the uranium mining
          operations in Jaduguda and neighboring areas. This section provides key insights
          on health reports, legal updates, environmental assessments, and more to keep
          you informed and empowered.
        </p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {updates.map((update, index) => (
            <div
              key={index}
              className="bg-[#0b1120] rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <update.icon className="w-5 h-5" color={update.color} />
                <h2 className="text-lg sm:text-xl font-semibold text-sky-300">
                  {update.title}
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {update.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
