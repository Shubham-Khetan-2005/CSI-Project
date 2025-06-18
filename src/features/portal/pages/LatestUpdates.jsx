import React from "react";
import {
  Newspaper,
  AlertTriangle,
  ShieldCheck,
  ScrollText,
  BookUser,
  FileText,
  Search,
  Radio,
  Gavel,
  BadgeCheck,
} from "lucide-react";
import BackButton from "../../../common/Components/BackButton";

const Section = ({ title, Icon, strokeColor = "stroke-blue-400", children }) => (
  <div className="mb-10 sm:mb-12">
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-left">
      <Icon className={`w-5 h-5 ${strokeColor}`} />
      <span className="text-base sm:text-lg font-semibold">{title}</span>
    </div>
    <div className="mt-2 text-sm sm:text-base text-gray-200 leading-relaxed">
      {children}
    </div>
  </div>
);

const LatestUpdates = () => {
  return (
    <div className="bg-[#0b1120] text-white px-4 sm:px-6 lg:px-20 py-10 min-h-screen">
      <BackButton/>
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-sky-400 mb-6 sm:mb-8 text-center">
          Latest Updates
        </h1>
        <p className="text-sm sm:text-base leading-relaxed text-center mb-10">
          Stay updated with the latest developments in and around the uranium mining
          operations in Jaduguda and neighboring areas. This section provides key insights
          on health reports, legal updates, environmental assessments, and more to keep
          you informed and empowered.
        </p>

        <Section title="Radiation Reports and Health Warnings" Icon={AlertTriangle} strokeColor="stroke-red-500">
          <p>
            Recent tests conducted by independent agencies have revealed elevated radiation levels in certain
            areas close to the mining zones. Public health officials recommend limited exposure and increased
            health screenings for families residing nearby. It is advised to monitor symptoms and consult local clinics.
          </p>
        </Section>

        <Section title="Environmental Surveys and Water Testing" Icon={ScrollText} strokeColor="stroke-green-400">
          <p>
            The latest water quality surveys in the region indicate the presence of heavy metals and radioactive
            particles beyond permissible limits in nearby rivers and groundwater. Efforts are being made to test
            alternate water sources and install filtration units.
          </p>
        </Section>

        <Section title="Legal Petitions and Court Orders" Icon={Gavel} strokeColor="stroke-yellow-400">
          <p>
            Legal cases have been filed against UCIL for environmental negligence and health risks. The Jharkhand High Court
            recently issued a notice seeking detailed reports from UCIL on waste disposal practices and radiation control measures.
          </p>
        </Section>

        <Section title="Safety Inspection Outcomes" Icon={ShieldCheck} strokeColor="stroke-sky-500">
          <p>
            Government safety inspectors recently visited Jaduguda mines and highlighted major safety lapses,
            including lack of warning signage, insufficient protective gear for workers, and improper waste
            storage. UCIL has been asked to address these issues by the next quarter.
          </p>
        </Section>

        <Section title="Community Awareness Drives" Icon={BookUser} strokeColor="stroke-purple-400">
          <p>
            Several NGOs have started awareness campaigns on the rights of local residents and safe practices.
            Flyers, videos, and local meetings are helping spread awareness among the affected tribal population.
          </p>
        </Section>

        <Section title="Radiation Exposure Warnings" Icon={Radio} strokeColor="stroke-pink-500">
          <p>
            The local panchayat has issued precautionary notices urging residents to avoid open defecation or farming
            in areas near mining waste dumps, citing increased Geiger readings and risk of radiation exposure.
          </p>
        </Section>

        <Section title="Right to Access Information" Icon={FileText} strokeColor="stroke-cyan-400">
          <p>
            Under RTI (Right to Information) Act, you can request reports about UCIL's mining operations,
            safety audits, and radiation monitoring. NGOs are helping locals file RTI queries for greater transparency.
          </p>
        </Section>

        <Section title="Support from National Human Rights Bodies" Icon={BadgeCheck} strokeColor="stroke-lime-400">
          <p>
            The National Human Rights Commission has taken suo moto cognizance of complaints and sent a team to review
            the impact of uranium mining on indigenous communities. A detailed public report is expected soon.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default LatestUpdates;
