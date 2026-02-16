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
    imageUrl: 'https://picsum.photos/800/600?grayscale&blur=2',
    color: 'bg-amber-600'
  },
  {
    id: 'tsunami',
    title: 'Tsunami',
    category: Category.DISASTER,
    shortDescription: 'Large sea waves triggered by underwater earthquakes.',
    fullDescription: 'A tsunami is a series of waves caused by the displacement of a large volume of water. Coastal areas in Zamboanga can be vulnerable if a strong earthquake occurs offshore.',
    keyPoints: ['Move to higher ground immediately if you feel a strong quake near the coast.', 'Do not wait for an official warning if you see the sea recede.', 'Stay away from the beach.'],
    imageUrl: 'https://picsum.photos/800/601?grayscale&blur=2',
    color: 'bg-blue-700'
  },
  {
    id: 'typhoon',
    title: 'Typhoon',
    category: Category.DISASTER,
    shortDescription: 'Strong tropical cyclone with heavy rain and winds.',
    fullDescription: 'A typhoon is a mature tropical cyclone. The Philippines is visited by an average of 20 typhoons every year. Heavy rains can cause flooding and landslides, especially in mountainous areas like Pasonanca.',
    keyPoints: ['Monitor PAGASA updates for signals.', 'Reinforce windows and doors.', 'Prepare an emergency kit with food and water.', 'Stay indoors during the storm.'],
    imageUrl: 'https://picsum.photos/800/602?grayscale&blur=2',
    color: 'bg-slate-700'
  },
  {
    id: 'flood',
    title: 'Flood',
    category: Category.DISASTER,
    shortDescription: 'Overflow of water onto land that is normally dry.',
    fullDescription: 'Flooding often occurs due to heavy rainfall from typhoons or monsoons (Habagat). It can happen quickly in low-lying areas or near rivers.',
    keyPoints: ['Turn off utilities at main switches.', 'Move to higher ground.', 'Do not walk or drive through floodwaters.', 'Avoid contact with floodwater (risk of Leptospirosis).'],
    imageUrl: 'https://picsum.photos/800/603?grayscale&blur=2',
    color: 'bg-cyan-700'
  },
  {
    id: 'landslide',
    title: 'Landslide',
    category: Category.DISASTER,
    shortDescription: 'Movement of soil or rock down a slope.',
    fullDescription: 'Landslides occur when the stability of a slope changes. Heavy rain is a common trigger in Zamboanga. Areas near steep slopes are at higher risk.',
    keyPoints: ['Stay alert during heavy rain.', 'Listen for unusual sounds like trees cracking.', 'Move away from the path of a landslide immediately.', 'Curl into a tight ball and protect your head if trapped.'],
    imageUrl: 'https://picsum.photos/800/604?grayscale&blur=2',
    color: 'bg-stone-600'
  },
  {
    id: 'volcano',
    title: 'Volcanic Eruption',
    category: Category.DISASTER,
    shortDescription: 'Release of lava, ash, and poisonous gases.',
    fullDescription: 'A volcano is a rupture in the crust of a planetary-mass object. While Zamboanga City is relatively safe from direct eruption, ashfall from distant volcanoes can still pose respiratory risks.',
    keyPoints: ['Follow evacuation orders immediately.', 'Protect yourself from falling ash.', 'Avoid river valleys and low-lying areas.', 'Wear a mask to protect respiratory health.'],
    imageUrl: 'https://picsum.photos/800/605?grayscale&blur=2',
    color: 'bg-red-700'
  },
  {
    id: 'fire',
    title: 'Fire',
    category: Category.DISASTER,
    shortDescription: 'Uncontrolled fire causing damage and risk to life.',
    fullDescription: 'Fires can spread quickly in residential areas. They produce toxic smoke which is often more dangerous than the flames themselves. Prevention is key.',
    keyPoints: ['Stop, Drop, and Roll if clothes catch fire.', 'Crawl low under smoke.', 'Know your school or home escape plan.', 'Call the Bureau of Fire Protection (BFP) immediately.'],
    imageUrl: 'https://picsum.photos/800/606?grayscale&blur=2',
    color: 'bg-orange-600'
  },

  // --- Health Risks ---
  {
    id: 'heatstroke',
    title: 'Heat Stroke',
    category: Category.HEALTH,
    shortDescription: 'Serious condition caused by overheating.',
    fullDescription: 'Heat stroke is serious, especially during the dry season in Zamboanga. It occurs when the body can no longer control its temperature.',
    keyPoints: ['Stay hydrated, drink plenty of water.', 'Stay in cool, shaded areas during midday.', 'Wear loose, light-colored clothing.', 'Seek medical help if temperature is high and skin is hot/dry.'],
    imageUrl: 'https://picsum.photos/800/607?grayscale&blur=2',
    color: 'bg-orange-500'
  },
  {
    id: 'mental-health',
    title: 'Mental Health',
    category: Category.HEALTH,
    shortDescription: 'Includes emotional, psychological, and social well-being.',
    fullDescription: 'Mental health includes our emotional and psychological well-being. It affects how we think, feel, and act. School stress and personal issues can affect students. It is okay to ask for help.',
    keyPoints: ['Talk to your school guidance counselor.', 'Stay connected with friends and family.', 'Practice self-care and stress management.', 'Understand that asking for help is a sign of strength.'],
    imageUrl: 'https://picsum.photos/800/608?grayscale&blur=2',
    color: 'bg-purple-600'
  },
  {
    id: 'dengue',
    title: 'Dengue',
    category: Category.HEALTH,
    shortDescription: 'Mosquito-borne viral disease.',
    fullDescription: 'Dengue is common in tropical areas like the Philippines. It is transmitted by Aedes mosquitoes, often during the rainy season. Severe cases can be dangerous.',
    keyPoints: ['Remove stagnant water (flower pots, tires) where mosquitoes breed.', 'Use insect repellent.', 'Wear long-sleeved shirts.', 'Seek medical care for high fever and body pain.'],
    imageUrl: 'https://picsum.photos/800/609?grayscale&blur=2',
    color: 'bg-green-600'
  },
  {
    id: 'fever',
    title: 'Fever',
    category: Category.HEALTH,
    shortDescription: 'Temporary increase in body temperature.',
    fullDescription: 'A fever is a temporary increase in your body temperature, often due to an illness. It is a sign your body is fighting an infection.',
    keyPoints: ['Rest and drink plenty of fluids.', 'Take medication (paracetamol) if uncomfortable.', 'Seek help if fever is very high or persistent.', 'Monitor for other symptoms.'],
    imageUrl: 'https://picsum.photos/800/610?grayscale&blur=2',
    color: 'bg-red-500'
  },
  {
    id: 'leptospirosis',
    title: 'Leptospirosis',
    category: Category.HEALTH,
    shortDescription: 'Bacterial infection often from contaminated water.',
    fullDescription: 'Leptospirosis is caused by bacteria in animal urine (often rats). It spreads through floodwaters. It is very dangerous if untreated.',
    keyPoints: ['Avoid swimming or wading in floodwater.', 'Wear protective footwear (boots).', 'Cover cuts and wounds.', 'Wash hands after contact with animals or soil.'],
    imageUrl: 'https://picsum.photos/800/611?grayscale&blur=2',
    color: 'bg-yellow-600'
  },
  {
    id: 'rabies',
    title: 'Rabies',
    category: Category.HEALTH,
    shortDescription: 'Deadly virus spread to people from infected animals.',
    fullDescription: 'Rabies is a deadly virus spread by the saliva of infected animals (dogs, cats). In the Philippines, dog bites are the most common cause.',
    keyPoints: ['Vaccinate your pets.', 'Do not provoke stray animals.', 'Wash animal bites immediately with soap and water.', 'Go to an Animal Bite Center immediately for shots.'],
    imageUrl: 'https://picsum.photos/800/612?grayscale&blur=2',
    color: 'bg-red-800'
  },
  {
    id: 'cardiac-arrest',
    title: 'Cardiac Arrest',
    category: Category.HEALTH,
    shortDescription: 'Sudden loss of heart function.',
    fullDescription: 'Sudden cardiac arrest is the abrupt loss of heart function. Immediate action is required to save a life.',
    keyPoints: ['Call for help immediately.', 'Perform CPR (Cardiopulmonary Resuscitation).', 'Ask for an AED if available.', 'Learn CPR to be prepared.'],
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
    q: "What should I do if someone faints from the heat?",
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