// KnowYourRights.jsx
import React from "react";
import {
  ShieldCheck,
  BookUser,
  ScrollText,
  Hospital,
  FileText,
  Users,
  AlertTriangle,
  Globe2,
  Banknote,
  Lightbulb,
} from "lucide-react";
import BackButton from "../../../common/Components/BackButton";

const Section = ({ title, Icon, strokeColor = "stroke-blue-400", children }) => (
  <div className="mb-10 sm:mb-12">
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-lg font-semibold text-sky-500">
      <Icon className={`w-5 h-5 ${strokeColor}`} />
      <span className="text-base sm:text-lg font-semibold">{title}</span>
    </div>
    <div className="mt-2 text-sm sm:text-base text-gray-200 leading-relaxed">{children}</div>
  </div>
);

const KnowYourRights = () => {
  return (
    <div className="bg-[#0b1120] text-white px-4 sm:px-6 lg:px-20 py-10 min-h-screen">
      <BackButton/>
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-sky-400 mb-6 sm:mb-8 text-center">
          Know Your Rights
        </h1>
        <p className="text-sm sm:text-base leading-relaxed text-center mb-10">
          Many residents of Jaduguda and nearby villages face pollution, health
          problems, or land issues and don't know they have legal rights to
          protest, ask questions, and demand accountability. This section
          simplifies your rights in language that empowers you to act, share, and
          get justice.
        </p>

        <Section title="Land Rights (Forest Rights Act, 2006)" Icon={BookUser} strokeColor="stroke-orange-400">
          <ul className="list-disc list-inside space-y-1">
            <li>You have the right to protect your land from mining without your consent.</li>
            <li>UCIL or any company must get Gram Sabha approval before starting any project.</li>
            <li>You can claim land ownership under FRA if you've been using it for generations.</li>
          </ul>
        </Section>

        <Section title="Environmental Rights (EPA, 1986)" Icon={ScrollText} strokeColor="stroke-yellow-400">
          <ul className="list-disc list-inside space-y-1">
            <li>Right to live in a clean and safe environment.</li>
            <li>Right to be warned about radiation, leaks, or waste dumping.</li>
            <li>You can report UCIL if pollution rules are broken.</li>
          </ul>
        </Section>

        <Section title="Health Rights (Right to Health)" Icon={Hospital} strokeColor="stroke-green-400">
          <ul className="list-disc list-inside space-y-1">
            <li>You can demand access to health records and medical camps.</li>
            <li>Right to free healthcare in case of radiation-related illness.</li>
            <li>Right to ask UCIL for data on contamination in your village.</li>
          </ul>
        </Section>

        <Section title="Right to Information (RTI Act, 2005)" Icon={FileText} strokeColor="stroke-purple-400">
          <ul className="list-disc list-inside space-y-1">
            <li>You can file an RTI to ask UCIL for environmental and health data.</li>
            <li>Ask for radiation monitoring reports, compensation plans, or land acquisition notices.</li>
            <li>It's your right to demand transparency.</li>
          </ul>
        </Section>

        <Section title="Community Rights (PESA Act, 1996)" Icon={Users} strokeColor="stroke-pink-500">
          <ul className="list-disc list-inside space-y-1">
            <li>Villages have the right to self-govern through Gram Sabha.</li>
            <li>You can block or negotiate any project that affects your community.</li>
            <li>Gram Sabha decisions are legally binding under PESA.</li>
          </ul>
        </Section>

        <Section title="Radiation Safety Awareness" Icon={AlertTriangle} strokeColor="stroke-red-500">
          <ul className="list-disc list-inside space-y-1">
            <li>You have the right to ask about radiation safety measures in your area.</li>
            <li>UCIL must provide protective equipment and guidelines to workers and locals.</li>
            <li>Request regular radiation checks and demand transparency in results.</li>
          </ul>
        </Section>

        <Section title="Right to Clean Water and Livelihood" Icon={Globe2} strokeColor="stroke-cyan-400">
          <ul className="list-disc list-inside space-y-1">
            <li>You can demand clean drinking water if groundwater is polluted by mining.</li>
            <li>Right to alternate means of livelihood if your land becomes unproductive.</li>
            <li>Ask for compensation or rehabilitation if natural resources are damaged.</li>
          </ul>
        </Section>

        <Section title="Compensation and Rehabilitation Rights" Icon={Banknote} strokeColor="stroke-lime-400">
          <ul className="list-disc list-inside space-y-1">
            <li>If displaced, you're entitled to fair compensation and proper housing.</li>
            <li>Ask for livelihood restoration plans, not just cash settlements.</li>
            <li>Women and children have special rights during rehabilitation processes.</li>
          </ul>
        </Section>

        <Section title="Right to Awareness and Participation" Icon={Lightbulb} strokeColor="stroke-amber-400">
          <ul className="list-disc list-inside space-y-1">
            <li>You have the right to attend public hearings and express your views.</li>
            <li>Demand access to simplified documents in your local language.</li>
            <li>Every citizen has the right to be informed before any mining expansion.</li>
          </ul>
        </Section>

        <Section title="Why Knowing Your Rights Matters" Icon={ShieldCheck} strokeColor="stroke-blue-400">
          <p>
            Understanding your rights gives you the power to act. Whether it's demanding cleaner water, safer mining, or access to compensation — awareness is the first step toward justice. Share this information with your community.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default KnowYourRights;
