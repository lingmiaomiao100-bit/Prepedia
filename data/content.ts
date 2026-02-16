import { Topic, Category } from '../types';

export const TOPICS: Topic[] = [
  // --- Disasters ---
  {
    id: 'earthquake',
    title: 'Earthquake',
    category: Category.DISASTER,
    shortDescription: 'Sudden ground shaking caused by tectonic movement.',
    fullDescription: 'An earthquake is the shaking of the surface of the Earth. The Philippines lies along the Pacific Ring of Fire, making us prone to frequent seismic activities. Earthquakes can range in intensity, from weak tremors to violent shaking that destroys property.',
    keyPoints: ['Drop, Cover, and Hold on.', 'Stay away from windows and heavy furniture.', 'Be prepared for aftershocks.', 'Have an emergency kit ready.'],
    before: [
      'Identify safe spots in every room (under sturdy tables).',
      'Secure heavy furniture and appliances to walls.',
      'Prepare a "Go Bag" with 3 days of food and water.',
      'Know the school evacuation plan for Lantawan Pasonanca NHS.'
    ],
    during: [
      'DROP to the ground.',
      'COVER your head and neck (crawl under a table).',
      'HOLD ON until the shaking stops.',
      'If outdoors, move to an open area away from buildings and power lines.'
    ],
    after: [
      'Check yourself and others for injuries.',
      'Expect aftershocks; stay away from damaged structures.',
      'Check for fire hazards or gas leaks.',
      'Listen to official battery-operated radio for updates.'
    ],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Earthquake',
    youtubeUrl: 'https://www.youtube.com/results?search_query=earthquake+safety+for+students',
    citations: [
      { name: 'PHIVOLCS - Earthquake Preparedness', url: 'https://www.phivolcs.dost.gov.ph/' },
      { name: 'Official Gazette - Earthquake Safety', url: 'https://www.officialgazette.gov.ph/earthquake-safety/' }
    ],
    imageUrl: 'https://picsum.photos/800/600?grayscale&blur=2',
    color: 'bg-amber-600'
  },
  {
    id: 'tsunami',
    title: 'Tsunami',
    category: Category.DISASTER,
    shortDescription: 'Large sea waves triggered by underwater earthquakes.',
    fullDescription: 'A tsunami is a series of waves caused by the displacement of a large volume of water. Coastal areas in Zamboanga can be vulnerable if a strong earthquake occurs offshore.',
    keyPoints: ['Move to higher ground immediately.', 'Do not wait for a warning.', 'Stay away from the beach.'],
    before: [
      'Know if your home or school is in a tsunami hazard zone.',
      'Identify high ground (at least 30 meters above sea level).',
      'Practice your evacuation route on foot.'
    ],
    during: [
      'If you feel a strong earthquake near the coast, MOVE IMMEDIATELY.',
      'Run to high ground; do not wait for sirens or official orders.',
      'Stay away from rivers that lead to the ocean.'
    ],
    after: [
      'Stay on high ground until local authorities say it is safe.',
      'A tsunami is a series of waves; the first one may not be the largest.',
      'Avoid floodwaters as they may contain dangerous debris.'
    ],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Tsunami',
    youtubeUrl: 'https://www.youtube.com/results?search_query=tsunami+safety+explained',
    citations: [
      { name: 'PHIVOLCS - Tsunami Information', url: 'https://www.phivolcs.dost.gov.ph/index.php/tsunami/tsunami-infographics' },
      { name: 'International Tsunami Information Center', url: 'http://itic.ioc-unesco.org/' }
    ],
    imageUrl: 'https://picsum.photos/800/601?grayscale&blur=2',
    color: 'bg-blue-700'
  },
  {
    id: 'typhoon',
    title: 'Typhoon',
    category: Category.DISASTER,
    shortDescription: 'Strong tropical cyclone with heavy rain and winds.',
    fullDescription: 'A typhoon is a mature tropical cyclone. The Philippines is visited by an average of 20 typhoons every year. Heavy rains can cause flooding and landslides.',
    keyPoints: ['Monitor PAGASA updates.', 'Reinforce windows.', 'Stay indoors.'],
    before: [
      'Listen to PAGASA for public storm signals.',
      'Trim tree branches near your house.',
      'Store enough clean water and non-perishable food.',
      'Ensure flashlights and radios have fresh batteries.'
    ],
    during: [
      'Stay inside the sturdiest part of your home.',
      'Keep away from glass windows.',
      'Turn off the main electricity switch if flooding starts.',
      'Do not go outside even during the "eye" of the storm.'
    ],
    after: [
      'Watch out for live wires or fallen power lines.',
      'Boil water before drinking to prevent illness.',
      'Inspect your house for structural damage.',
      'Help neighbors who may need special assistance.'
    ],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Typhoon',
    youtubeUrl: 'https://www.youtube.com/results?search_query=typhoon+preparedness+guide',
    citations: [
      { name: 'PAGASA - Tropical Cyclone Information', url: 'https://bagong.pagasa.dost.gov.ph/' },
      { name: 'NDRRMO - Typhoon Preparedness', url: 'https://ndrrmc.gov.ph/' }
    ],
    imageUrl: 'https://picsum.photos/800/602?grayscale&blur=2',
    color: 'bg-slate-700'
  },
  {
    id: 'flood',
    title: 'Flood',
    category: Category.DISASTER,
    shortDescription: 'Overflow of water onto land that is normally dry.',
    fullDescription: 'Flooding often occurs due to heavy rainfall from typhoons. It can happen quickly in low-lying areas or near rivers in Pasonanca.',
    keyPoints: ['Turn off utilities.', 'Move to higher ground.', 'Avoid floodwater.'],
    before: [
      'Know the flood risk level in your barangay.',
      'Move valuable items and electronics to higher floors.',
      'Identify the nearest designated evacuation center.'
    ],
    during: [
      'Evacuate immediately if ordered by authorities.',
      'Avoid walking or driving through moving water.',
      'If trapped, move to the highest level of the building.'
    ],
    after: [
      'Wait for the "all-clear" before returning home.',
      'Throw away food that has come into contact with floodwater.',
      'Clean and disinfect everything that got wet.',
      'Watch out for snakes or animals that may have entered your home.'
    ],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Flood',
    youtubeUrl: 'https://www.youtube.com/results?search_query=flood+safety+measures',
    citations: [
      { name: 'ZCDRRMO - Zamboanga City Disaster Risk', url: 'https://zamboangacity.gov.ph/' },
      { name: 'PAGASA - Flood Forecasting', url: 'https://bagong.pagasa.dost.gov.ph/flood' }
    ],
    imageUrl: 'https://picsum.photos/800/603?grayscale&blur=2',
    color: 'bg-cyan-700'
  },
  {
    id: 'landslide',
    title: 'Landslide',
    category: Category.DISASTER,
    shortDescription: 'Movement of soil or rock down a slope.',
    fullDescription: 'Landslides occur when the stability of a slope changes. Heavy rain is a common trigger in Zamboanga.',
    keyPoints: ['Stay alert during rain.', 'Listen for cracking sounds.', 'Move away from the path.'],
    before: [
      'Avoid building on steep slopes or near drainage ways.',
      'Watch for tilting trees or new cracks in the ground.',
      'Have an evacuation plan ready for rainy seasons.'
    ],
    during: [
      'Move out of the path of debris immediately.',
      'If you cannot escape, curl into a tight ball and protect your head.',
      'Listen for loud noises like trees cracking or boulders knocking.'
    ],
    after: [
      'Stay away from the slide area; additional slides may occur.',
      'Check for injured persons near the slide without entering the danger zone.',
      'Report broken utility lines to the proper authorities.'
    ],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Landslide',
    youtubeUrl: 'https://www.youtube.com/results?search_query=landslide+safety+tips',
    citations: [
      { name: 'MGB - Landslide Hazard Mapping', url: 'https://mgb.gov.ph/' },
      { name: 'PHIVOLCS - Landslide Awareness', url: 'https://www.phivolcs.dost.gov.ph/' }
    ],
    imageUrl: 'https://picsum.photos/800/604?grayscale&blur=2',
    color: 'bg-stone-600'
  },
  {
    id: 'volcano',
    title: 'Volcanic Eruption',
    category: Category.DISASTER,
    shortDescription: 'Release of lava, ash, and poisonous gases.',
    fullDescription: 'While Zamboanga is distant from active volcanoes, ashfall can still pose risks.',
    keyPoints: ['Follow evacuation orders.', 'Protect from ash.', 'Wear a mask.'],
    before: [
      'Keep a supply of N95 masks for ashfall protection.',
      'Know the location of designated evacuation centers.',
      'Prepare goggles to protect your eyes from volcanic glass.'
    ],
    during: [
      'Stay indoors and close all windows and doors.',
      'Wear long sleeves and pants to protect skin.',
      'Use a damp cloth if you don\'t have a mask.',
      'Keep pets indoors.'
    ],
    after: [
      'Do not drive in heavy ashfall; it can stall engines.',
      'Carefully clean ash from roofs to prevent collapse.',
      'Continue wearing masks until the ash has settled.'
    ],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Volcanic_eruption',
    youtubeUrl: 'https://www.youtube.com/results?search_query=volcano+ashfall+safety',
    citations: [
      { name: 'PHIVOLCS - Volcano Updates', url: 'https://www.phivolcs.dost.gov.ph/index.php/volcano-hazard' },
      { name: 'DOH - Volcanic Ash Health Advice', url: 'https://doh.gov.ph/' }
    ],
    imageUrl: 'https://picsum.photos/800/605?grayscale&blur=2',
    color: 'bg-red-700'
  },
  {
    id: 'fire',
    title: 'Fire',
    category: Category.DISASTER,
    shortDescription: 'Uncontrolled fire causing damage.',
    fullDescription: 'Fires can spread quickly in residential areas. Prevention is key.',
    keyPoints: ['Stop, Drop, and Roll.', 'Crawl low under smoke.', 'Know escape plans.'],
    before: [
      'Install smoke alarms and check them monthly.',
      'Keep a fire extinguisher and know how to use it (P.A.S.S.).',
      'Never leave candles or cooking stoves unattended.'
    ],
    during: [
      'If your clothes catch fire: Stop, Drop, and Roll.',
      'Crawl low under smoke to find the exit.',
      'Touch doors with the back of your hand before opening.',
      'Call the Bureau of Fire Protection (BFP) immediately.'
    ],
    after: [
      'Do not re-enter a burned building until cleared by fire marshals.',
      'Check with the BFP for a "Fire Incident Report".',
      'Discard food and medicines exposed to heat or smoke.'
    ],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Fire',
    youtubeUrl: 'https://www.youtube.com/results?search_query=house+fire+safety+for+teens',
    citations: [
      { name: 'BFP - Bureau of Fire Protection', url: 'https://bfp.gov.ph/' },
      { name: 'Official Gazette - Fire Prevention', url: 'https://www.officialgazette.gov.ph/fire-prevention/' }
    ],
    imageUrl: 'https://picsum.photos/800/606?grayscale&blur=2',
    color: 'bg-orange-600'
  },

  // --- Health Risks ---
  {
    id: 'heatstroke',
    title: 'Heat Stroke',
    category: Category.HEALTH,
    shortDescription: 'Serious condition caused by overheating.',
    fullDescription: 'Heat stroke is serious, especially during the dry season in Zamboanga.',
    keyPoints: ['Stay hydrated.', 'Stay in shade.', 'Wear light clothing.'],
    before: [
      'Check the weather forecast for high heat index warnings.',
      'Drink water even if you are not thirsty.',
      'Schedule outdoor school activities for early morning or late afternoon.'
    ],
    during: [
      'If you feel dizzy or nauseous, move to a cool area immediately.',
      'Apply cool, wet cloths to the skin.',
      'Fan the person and give small sips of water if conscious.'
    ],
    after: [
      'Rest for several days after a heat-related illness.',
      'Avoid strenuous activity in the heat for a while.',
      'Consult a doctor for a follow-up checkup.'
    ],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Heat_stroke',
    youtubeUrl: 'https://www.youtube.com/results?search_query=preventing+heat+stroke+education',
    citations: [
      { name: 'DOH - Heat Stroke Advisory', url: 'https://doh.gov.ph/' },
      { name: 'WHO - Heat and Health', url: 'https://www.who.int/news-room/fact-sheets/detail/climate-change-heat-and-health' }
    ],
    imageUrl: 'https://picsum.photos/800/607?grayscale&blur=2',
    color: 'bg-orange-500'
  },
  {
    id: 'mental-health',
    title: 'Mental Health',
    category: Category.HEALTH,
    shortDescription: 'Includes emotional and social well-being.',
    fullDescription: 'It affects how we think, feel, and act. It is okay to ask for help.',
    keyPoints: ['Talk to a counselor.', 'Stay connected.', 'Practice self-care.'],
    before: [
      'Build a supportive network of friends and family.',
      'Learn to recognize your stress triggers.',
      'Maintain a healthy routine with enough sleep and exercise.'
    ],
    during: [
      'If feeling overwhelmed, take slow, deep breaths.',
      'Reach out to someone you trust and tell them how you feel.',
      'Take a break from social media and news if it causes anxiety.'
    ],
    after: [
      'Continue regular check-ins with your counselor or mentor.',
      'Join school clubs or groups that promote well-being.',
      'Help others by being a good listener and friend.'
    ],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Mental_health',
    youtubeUrl: 'https://www.youtube.com/results?search_query=mental+health+for+high+schoolers',
    citations: [
      { name: 'DOH - Mental Health Program', url: 'https://doh.gov.ph/national-mental-health-program' },
      { name: 'WHO - Mental Health Information', url: 'https://www.who.int/health-topics/mental-health' }
    ],
    imageUrl: 'https://picsum.photos/800/608?grayscale&blur=2',
    color: 'bg-purple-600'
  },
  {
    id: 'dengue',
    title: 'Dengue',
    category: Category.HEALTH,
    shortDescription: 'Mosquito-borne viral disease.',
    fullDescription: 'Dengue is common in tropical areas like the Philippines.',
    keyPoints: ['Remove stagnant water.', 'Use repellent.', 'Wear long sleeves.'],
    before: [
      'Practice the 4S: Search and destroy, Self-protection, Seek early consultation, Say no to indiscriminate fogging.',
      'Clear gutters and containers of stagnant water.',
      'Install screens on windows and doors.'
    ],
    during: [
      'If fever starts, consult a doctor immediately.',
      'Monitor for "Warning Signs": severe abdominal pain, persistent vomiting, bleeding gums.',
      'Keep hydrated and rest.'
    ],
    after: [
      'Continue to monitor platelet counts if advised by a doctor.',
      'Ensure the patient rests and avoids strenuous activity during recovery.',
      'Maintain the clean environment to prevent future outbreaks.'
    ],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Dengue_fever',
    youtubeUrl: 'https://www.youtube.com/results?search_query=dengue+prevention+philippines',
    citations: [
      { name: 'DOH - Dengue Prevention', url: 'https://doh.gov.ph/health-advisory/dengue' },
      { name: 'WHO - Dengue and Severe Dengue', url: 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue' }
    ],
    imageUrl: 'https://picsum.photos/800/609?grayscale&blur=2',
    color: 'bg-green-600'
  },
  {
    id: 'fever',
    title: 'Fever',
    category: Category.HEALTH,
    shortDescription: 'Temporary increase in body temperature.',
    fullDescription: 'A sign your body is fighting an infection.',
    keyPoints: ['Rest and fluids.', 'Take paracetamol.', 'Seek help if persistent.'],
    before: [
      'Eat a balanced diet to strengthen your immune system.',
      'Keep a digital thermometer in your first aid kit.',
      'Practice good hand hygiene.'
    ],
    during: [
      'Take a lukewarm sponge bath (avoid cold water).',
      'Wear lightweight clothing.',
      'Monitor temperature every 4 hours.'
    ],
    after: [
      'Continue drinking plenty of fluids.',
      'Gradually return to school activities as strength returns.',
      'Finish any prescribed medications fully.'
    ],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Fever',
    youtubeUrl: 'https://www.youtube.com/results?search_query=fever+care+basics',
    citations: [
      { name: 'DOH - Fever Management', url: 'https://doh.gov.ph/' },
      { name: 'Mayo Clinic - Fever Information', url: 'https://www.mayoclinic.org/diseases-conditions/fever/symptoms-causes/syc-20352759' }
    ],
    imageUrl: 'https://picsum.photos/800/610?grayscale&blur=2',
    color: 'bg-red-500'
  },
  {
    id: 'leptospirosis',
    title: 'Leptospirosis',
    category: Category.HEALTH,
    shortDescription: 'Bacterial infection from contaminated water.',
    fullDescription: 'Leptospirosis is caused by bacteria in animal urine. It spreads through floodwaters.',
    keyPoints: ['Avoid floodwater.', 'Wear boots.', 'Wash hands.'],
    before: [
      'Practice good rodent control around your house.',
      'Maintain clean surroundings to discourage rat nesting.',
      'Keep garbage bins covered.'
    ],
    during: [
      'If you must go through floodwater, wear rubber boots.',
      'Wash feet thoroughly with soap after wading in water.',
      'Do not swim in rivers or lakes after heavy rain.'
    ],
    after: [
      'See a doctor if fever, muscle pain, or headache develops within 2 weeks of flood exposure.',
      'Inform the doctor about your contact with floodwater.',
      'Complete the full course of antibiotics if prescribed.'
    ],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Leptospirosis',
    youtubeUrl: 'https://www.youtube.com/results?search_query=leptospirosis+prevention+guide',
    citations: [
      { name: 'DOH - Leptospirosis Health Advisory', url: 'https://doh.gov.ph/health-advisory/leptospirosis' },
      { name: 'WHO - Leptospirosis Information', url: 'https://www.who.int/health-topics/leptospirosis' }
    ],
    imageUrl: 'https://picsum.photos/800/611?grayscale&blur=2',
    color: 'bg-yellow-600'
  },
  {
    id: 'rabies',
    title: 'Rabies',
    category: Category.HEALTH,
    shortDescription: 'Deadly virus spread from infected animals.',
    fullDescription: 'Deadly virus spread by the saliva of infected animals.',
    keyPoints: ['Vaccinate pets.', 'Do not provoke strays.', 'Wash bites.'],
    before: [
      'Get your pets vaccinated annually.',
      'Do not allow your pets to roam freely outside.',
      'Educate yourself on how to approach strange animals safely.'
    ],
    during: [
      'If bitten, wash the wound with soap and running water for 15 minutes.',
      'Apply an antiseptic (like povidone-iodine).',
      'Go to the nearest Animal Bite Center immediately.'
    ],
    after: [
      'Observe the animal for 14 days (if possible).',
      'Complete all scheduled anti-rabies vaccine shots.',
      'Do not use "tandok" or traditional medicine for bites.'
    ],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Rabies',
    youtubeUrl: 'https://www.youtube.com/results?search_query=rabies+awareness+education',
    citations: [
      { name: 'DOH - Rabies Prevention Program', url: 'https://doh.gov.ph/national-rabies-prevention-and-control-program' },
      { name: 'WHO - Rabies Fact Sheet', url: 'https://www.who.int/news-room/fact-sheets/detail/rabies' }
    ],
    imageUrl: 'https://picsum.photos/800/612?grayscale&blur=2',
    color: 'bg-red-800'
  },
  {
    id: 'cardiac-arrest',
    title: 'Cardiac Arrest',
    category: Category.HEALTH,
    shortDescription: 'Sudden loss of heart function.',
    fullDescription: 'The abrupt loss of heart function. Immediate action is required.',
    keyPoints: ['Call for help.', 'Perform CPR.', 'Ask for an AED.'],
    before: [
      'Learn hands-only CPR (training is often free).',
      'Know the location of the nearest AED in school or your mall.',
      'Maintain a heart-healthy lifestyle with low-salt diet and exercise.'
    ],
    during: [
      'Check if the person is responsive.',
      'Call 911 immediately.',
      'Start chest compressions: push hard and fast in the center of the chest.',
      'Use an AED as soon as it arrives.'
    ],
    after: [
      'Stay with the patient until emergency responders take over.',
      'Follow up with a cardiologist if you were the patient.',
      'Debrief with a counselor if you were the rescuer; it can be stressful.'
    ],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Cardiac_arrest',
    youtubeUrl: 'https://www.youtube.com/results?search_query=how+to+perform+cpr+tutorial',
    citations: [
      { name: 'Philippine Red Cross - CPR Training', url: 'https://redcross.org.ph/' },
      { name: 'American Heart Association - CPR', url: 'https://cpr.heart.org/' }
    ],
    imageUrl: 'https://picsum.photos/800/613?grayscale&blur=2',
    color: 'bg-rose-600'
  }
];

export const FAQS = [
  {
    q: "Why is preparedness important?",
    a: "Being prepared ensures you know what to do when a disaster happens in Zamboanga or at school, keeping you and your family safe."
  },
  {
    q: "What should be in an emergency kit?",
    a: "Pack essentials like water, canned food, a flashlight, extra batteries, a first aid kit, and important documents. Keep a 'Go Bag' ready at home."
  },
  {
    q: "How often should I check my emergency supplies?",
    a: "Check your kit every six months. Replace expired food and water. Make sure flashlights work."
  },
  {
    q: "What are PAGASA Signals?",
    a: "PAGASA uses signals (1 to 5) to warn about Typhoons. Signal 1 means strong winds in 36 hours. Higher numbers mean stronger winds and less time to prepare."
  },
  {
    q: "What is the 'Drop, Cover, and Hold On' rule?",
    a: "For earthquakes: DROP to your hands and knees, COVER your head and neck (or crawl under a sturdy table), and HOLD ON until the shaking stops."
  },
  {
    q: "Is it safe to walk through floodwater?",
    a: "No. Floodwater in the city can be dirty and carry diseases like Leptospirosis. Stay out of the water!"
  },
  {
    q: "How can I prevent Dengue?",
    a: "Mosquitoes breed in clean, stagnant water. Empty flower pots and old tires around your house or school. "
  },
  {
    q: "What should i do if someone faints from the heat?",
    a: "Move them to a cool, shaded place. Loosen their uniform/clothes and apply cool wet cloths. Seek medical help at the school clinic or hospital."
  },
  {
    q: "How can I help my pet during a disaster?",
    a: "Include pet food and water in your kit. Never leave pets tied up if you evacuate."
  },
  {
    q: "Who should I call in an emergency?",
    a: "In the Philippines, dial **911** for general emergencies. You can also contact the Zamboanga City DRRMO or Barangay Pasonanca officials. If you are at Lantawan Pasonanca NHS, inform a teacher or guard immediately."
  }
];