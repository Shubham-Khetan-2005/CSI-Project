import React from "react";
import BackButton from "../../../common/Components/BackButton";

const EnvironmentalImpact = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-white p-6">
      <BackButton/>
      <h1 className="text-3xl py-4 font-bold text-sky-400 mb-6">Environmental Impact</h1>

      {/* 1. Deforestation & Land Degradation */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <img
          src="/images/deforestation.jpg" // ✅ replace with actual path
          alt="Deforestation"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold text-sky-300 mb-2">Deforestation & Land Degradation</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            Large forest areas are cleared for mining. This leads to loss of biodiversity, erosion, and unusable farmland. In Jaduguda, what was once dense forest and tribal farmland has now turned into grey, dusty pits stretching for kilometers. Villagers recall how their ancestors lived in harmony with nature, gathering food, herbs, and firewood from the forests. Today, those same areas are fenced off, patrolled, and mined — leaving behind radiation, barren soil, and broken livelihoods. What's worse, many locals were displaced without proper compensation, and even those who stayed suffer from reduced farming output and health problems due to environmental degradation. The sounds of birds have faded, replaced by drilling machines and silence. This is the price Jaduguda pays every day — hidden beneath the glowing lights of India's nuclear dreams.

            <br /><br />

            Generations that once depended on this land for survival now walk miles to fetch clean water and breathe dust-filled air. Children grow up surrounded by abandoned tailing ponds and restricted zones, their playfields replaced by danger signs. Even local folklore, once rooted in nature and seasons, now speaks of disease, silence, and loss. Yet amidst the devastation, the spirit of the community survives — demanding recognition, justice, and a return to balance. Jaduguda is not just a place affected by mining; it is a voice silenced by development, waiting to be heard.
          </p>

        </div>
      </div>

      {/* 2. Water Contamination */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-6 mb-10">
        <img
          src="/images/water_pollution.jpg"
          alt="Water Pollution"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold text-sky-300 mb-2">Water Contamination</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            Mining waste doesn't just stay underground — it leaks into nearby rivers, ponds, and groundwater. In Jaduguda and surrounding villages, residents report that water which once flowed clear now carries a metallic taste and a yellowish tint. Women walk miles every day just to fetch water from cleaner areas, while children often bathe or play in radioactive runoff, unaware of its dangers. Health surveys have revealed alarming spikes in skin rashes, stomach infections, and even unexplained deformities in children. Crops irrigated by this contaminated water lose their vitality, and livestock often fall sick. While government officials claim safety standards are met, independent tests tell another story — one of invisible poisons and unheard cries. In the silence of these waters lies a deep, slow violence — claiming health, heritage, and hope from a community that only asked to be left unharmed.
          </p>

        </div>
      </div>

      {/* 3. Air Pollution */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <img
          src="/images/air_pollution.jpg"
          alt="Air Pollution"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold text-sky-300 mb-2">Air Pollution</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
             Dust hangs heavy in the air around uranium mines. Every blast, every truck movement stirs up particles laced with radioactive elements. In Jaduguda, the once clean, hilly breeze now carries the constant presence of radon gas and suspended dust — both silent killers. Villagers, especially elderly and children, suffer from chronic cough, breathlessness, and frequent infections. Some describe how white powder settles on their rooftops and fields every morning, much like invisible ash. With no public warnings, masks, or awareness drives, people continue life amidst exposure. The processing plants emit more than steam — they exhale danger. Birds have vanished from the treetops, and silence fills the space where the forest once hummed. The air, meant to be free, now serves as an unmonitored carrier of disease.
          </p>

        </div>
      </div>

      {/* 4. Waste Dumping */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-6 mb-10">
        
            <img
              src="/images/radioactive_waste.jpg"
              alt="Radioactive Waste"
              className="w-full md:w-1/2 h-full object-cover rounded-lg shadow-lg"
            />
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-sky-400 mb-2">Radioactive Waste</h2>
          <p className="text-gray-300">
            The waste generated from uranium extraction doesn't disappear — it's stored in open tailing ponds and leaking barrels that dot the landscape around the mines. In Jaduguda, these radioactive ponds are poorly fenced, often accessible to cattle, children, and even daily workers. During rains, the slurry overflows into nearby fields and drains. Residents speak of once-fertile land turning infertile, their skin itching after contact with wet soil. Over time, many families living closest to waste zones have reported birth defects and cancer-like symptoms. Despite repeated demands, UCIL's waste management remains opaque, with little transparency or independent audits. This is not just a technical failure; it's an ethical breakdown. The poison is buried but not gone — it creeps slowly into lives and generations.
            <br /><br />
            Some villagers recall how their relatives who once worked in the mines now suffer from rare illnesses that doctors in nearby clinics struggle to diagnose. The groundwater wells, once the lifeline of the village, now emit a strange metallic taste and smell. No warnings were issued. No safety instructions were provided. The fields, where once rice and vegetables grew, now lie abandoned due to fears of contamination. For the tribal communities, this isn't just an environmental crisis — it's a slow erasure of tradition, livelihood, and dignity.
            <br /><br />
            In the absence of independent oversight, radioactive waste management in Jaduguda has become a silent killer. Invisible, tasteless, and odorless, radiation finds its way into homes without knocking — affecting unborn children, altering DNA, and leaving behind stories of pain and resistance. Even today, while India chases nuclear power, the villagers of Jaduguda pay the hidden price, every single day.
            <br/><br/>
            In Jaduguda, radioactive waste is not a topic in reports — it's a reality people live with every day. The village school is barely 500 meters from one of the tailing ponds. Teachers avoid talking about radiation, but parents whisper about unexplained fatigue in their children and nosebleeds that won’t stop. Community elders speak of a time when festivals were vibrant, fields green, and water pure. Now, they light lamps for lost children and harvests that never came. What makes it worse is the silence — no one talks openly, no one listens honestly. Fear, fatigue, and forgotten promises linger in the air. Yet, these people endure. Their existence is a quiet resistance — demanding accountability, not sympathy. While the world debates clean energy and nuclear progress, Jaduguda bears the radiation silently, its people still waiting for justice.
          </p>

        </div>
      </div>

      {/* 5. Impact on Agriculture */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <img
          src="/images/farming_impact.jpg"
          alt="Impact on Farming"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
        
        {/* <img
          src="/images/livehood.jpg"
          alt="Impact on livehood"
          className="w-full md:w-1/2 rounded-lg shadow-lg" */}
      
        <div>
          <h2 className="text-2xl font-semibold text-sky-300 mb-2">Impact on Agriculture</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            Farming, once the lifeblood of tribal communities, has withered under the shadow of uranium mining. Contaminated water and degraded soil have drastically reduced crop yield. Paddy fields don't turn golden as often, and vegetables rot prematurely. Farmers say the land no longer "listens" to seeds — a sentiment that reflects deep pain. Even grazing lands have vanished, forcing cattle to wander further into unsafe zones. The cost of fertilizers and clean water has increased, but incomes have shrunk. In many households, the younger generation has migrated in search of labor jobs, leaving behind elders who cling to the land with fading hope. Agriculture here is no longer a livelihood — it's resistance, an act of survival against a system that turned fertile soil into fallout.
          </p>

        </div>
      </div>

      {/* Testimony */}
      <p className="mt-8 text-gray-400 italic text-center">
        “We used to drink water from the stream. Now we fear even touching it.”-Local resident, Jaduguda
      </p>
    </div>
  );
};

export default EnvironmentalImpact;
