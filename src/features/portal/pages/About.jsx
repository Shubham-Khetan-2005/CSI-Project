import React from "react";

const About = () => {
  return (
    <div className="bg-[#0b1120] text-white px-4 sm:px-6 lg:px-20 py-10 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-400 mb-8 text-center">
        About the Jaduguda UCIL Awareness Portal
      </h1>

      <div className="space-y-6 max-w-screen-lg mx-auto text-sm sm:text-base leading-relaxed">
        <p>
          The Jaduguda UCIL Awareness Portal is a digital initiative designed to
          educate and empower communities affected by uranium mining in India,
          particularly in and around Jaduguda, Jharkhand. This portal brings
          together verified information, legal resources, and voices from the
          ground to ensure that the concerns of local communities are heard and
          acted upon.
        </p>

        <p>
          Our goal is not just to inform, but also to encourage participation,
          awareness, and dialogue among citizens, researchers, journalists, and
          policymakers. Through this platform, we hope to foster a sense of
          accountability, responsibility, and justice for those affected by
          decades of uranium extraction.
        </p>

        <Section title="Who is UCIL?">
          <p>
            Uranium Corporation of India Limited (UCIL) is a public sector
            enterprise under the Department of Atomic Energy, Government of India.
            It was established in 1967 to mine and process uranium ore, which fuels
            India's nuclear power plants.
          </p>
          <p>
            UCIL operates several mines in Jharkhand, including Jaduguda,
            Narwapahar, Turamdih, and Bagjata. While it has played a crucial role
            in India's energy strategy, it has also drawn criticism for its impact
            on local communities and the environment.
          </p>
        </Section>

        <Section title="What's Happening in Jaduguda?">
          <p>
            Jaduguda is India's oldest uranium mining site and has been active for
            more than 50 years. The region is home to tribal communities who live
            close to mines and uranium tailing ponds, often without proper safety
            awareness or protection.
          </p>
          <p>
            Residents have reported health issues such as birth defects, cancer,
            miscarriages, and chronic illnesses. Radiation exposure and water
            contamination are major concerns. Yet, these issues remain poorly
            documented and inadequately addressed.
          </p>
        </Section>

        <Section title="Why This Portal?">
          <p>
            This portal was built to bridge the gap between affected communities and
            the resources they need — legal help, awareness about rights, health
            guidance, and access to real data. Most rural families don't have access
            to official reports or medical care.
          </p>
          <p>
            We combine satellite data, health studies, and personal stories to paint
            a complete picture of uranium’s impact — beyond what is usually reported
            in mainstream media.
          </p>
        </Section>

        <Section title="What You'll Find Here">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Environmental Reports:</strong> Pollution maps, deforestation,
              and water quality studies near mines.
            </li>
            <li>
              <strong>Legal Rights:</strong> Simplified content explaining the Forest
              Rights Act, land protection laws, and health compensation policies.
            </li>
            <li>
              <strong>Community Stories:</strong> Voices and testimonies from local
              villagers living near UCIL sites.
            </li>
            <li>
              <strong>Report Issues:</strong> Prototype tool for anonymous reporting
              of health, safety, or legal violations.
            </li>
            <li>
              <strong>News & Research:</strong> Verified articles, media reports, and
              academic studies about UCIL and uranium mining.
            </li>
          </ul>
        </Section>

        <Section title="Who Is This Portal For?">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Local Tribal Families:</strong> Who need awareness about
              radiation, health, land rights, and legal remedies.
            </li>
            <li>
              <strong>Students & Researchers:</strong> Studying nuclear energy,
              environmental law, or rural development.
            </li>
            <li>
              <strong>Journalists & Activists:</strong> Documenting the human cost of
              uranium mining and advocating for change.
            </li>
            <li>
              <strong>Policy Makers & NGOs:</strong> Supporting sustainable mining,
              accountability, and public health safety.
            </li>
          </ul>
        </Section>

        <Section title="Our Vision">
          <p>
            We envision a future where no community is left behind. A future where
            development is balanced with environmental and social justice. And a
            future where the voices of tribal and rural people are not ignored, but
            respected.
          </p>
          <p>
            This portal is not just a source of data — it's a call for awareness,
            justice, and action. Together, we can support safe practices, legal
            empowerment, and a healthier future for Jaduguda and beyond.
          </p>
        </Section>

        <Section title="Radiation: What People Don’t Know">
          <p>
            Radiation from uranium mining isn’t always visible—but its effects are real. Most
            people in Jaduguda and surrounding villages aren’t aware of what radiation is,
            how it spreads, and how it can affect their health.
          </p>
          <p>
            Lack of signage, protective measures, and awareness campaigns have led to daily
            exposure in drinking water, air, and even food. Children play near tailing ponds
            without realizing the danger. This portal helps spread scientific knowledge in a
            local language to bridge that information gap.
          </p>
        </Section>

        <Section title="Timeline of Jaduguda’s Uranium Legacy">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>1967:</strong> First uranium mine opened in Jaduguda.</li>
            <li><strong>1980s–1990s:</strong> Expansion into nearby mines like Narwapahar and Bhatin.</li>
            <li><strong>1999:</strong> First public reports of birth defects and health issues.</li>
            <li><strong>2012:</strong> Media and legal action begins highlighting UCIL’s impact.</li>
            <li><strong>2020 onwards:</strong> Villagers and NGOs increase demands for compensation and safety.</li>
            <li><strong>Now:</strong> Digital platforms like this amplify local voices nationwide.</li>
          </ul>
        </Section>

        <Section title="Voices from the Ground">
          <p>
            This portal does not speak for the people—it speaks **with** them. We collect and
            showcase firsthand accounts, interviews, and testimonials from families who’ve
            lived near the mines for decades.
          </p>
          <p>
            Their stories reveal a powerful truth: that the biggest experts on uranium’s
            impact are not in labs, but in villages. These voices drive our mission and shape
            everything we share here.
          </p>
        </Section>

        <Section title="Join the Movement">
          <p>
            Awareness is the first step. Action is the next. Whether you’re a student,
            lawyer, doctor, engineer, or villager—your contribution matters. Explore, share,
            question, and connect. Let’s make justice and transparency a reality in Jaduguda.
          </p>
        </Section>



      </div>
    </div>
  );
};

// Reusable Section component
const Section = ({ title, children }) => (
  <div>
    <h2 className="text-xl sm:text-2xl font-semibold text-sky-300 mt-8 mb-3">
      {title}
    </h2>
    <div className="space-y-3">{children}</div>
  </div>
);

export default About;
