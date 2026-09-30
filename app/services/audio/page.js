import ServiceCopyPage from '../../../components/ServiceCopyPage';

export const metadata={
  title:'Car Audio Upgrades & Installation in Houston | TTT',
  description:'Factory system upgrades, amplifiers, subwoofers, DSP tuning and custom installs, planned around how you listen and integrated with your vehicle.'
};

const data={
  eyebrow:'Automotive Audio',
  title:'Car audio built around how you listen',
  supporting:'Clearer vocals, tighter bass, sound that fills the cabin evenly. We plan, install and tune audio systems that work with your vehicle instead of around it.',
  primary:['Request an Audio Quote','/quote?service=audio'],
  secondary:['See Upgrade Paths','#upgrade-paths'],
  sections:[
    {title:'What do you want to hear?',intro:'Good audio starts with a conversation, not a parts list. Someone who wants podcasts to sound clear on the highway needs something very different from someone who wants bass they can feel.',paragraphs:['We’ll ask how you listen, what bothers you about the current system, which factory features you want to keep and how much space you’re willing to give up. The answers shape every recommendation that follows.'],bullets:['“The factory system sounds flat and muddy.”','“I want more bass without losing my trunk.”','“Vocals disappear when I turn it up.”','“I want a full system, done properly, that I won’t need to redo.”']},
    {title:'What makes up a system',cards:[
      {title:'Speakers',body:'Speakers turn the signal into sound. Better speakers usually bring clearer detail and less distortion, and they’re often the first upgrade that makes a real difference.'},
      {title:'Amplifiers',body:'Amplifiers supply clean power so speakers perform as intended. Factory head units usually provide limited power, which is why volume and clarity drop off together.'},
      {title:'Subwoofers',body:'Subwoofers handle the lowest frequencies, the part of music you feel. A well-matched sub lets your other speakers focus on what they do best.'},
      {title:'DSP + tuning',body:'Digital sound processors control how the whole system behaves in your specific cabin.'},
      {title:'Wiring + power',body:'Correct gauge, solid grounds and clean routing prevent noise, heat and reliability problems.'}
    ]},
    {title:'Keep what works in your vehicle',intro:'Many modern vehicles route audio through screens, safety chimes, parking sensors and driver-assist alerts. Replacing parts without planning for that can cost you features you use every day.',bullets:['Factory touchscreen, CarPlay or Android Auto','Steering-wheel audio controls','Warning and navigation chimes','Backup and surround-view cameras','Factory amplifier and speaker locations'],callout:'In many cases we can improve sound considerably while keeping the factory head unit. Where a feature can’t be retained, we’ll tell you before you decide.'},
    {title:'Why tuning matters as much as equipment',paragraphs:['A car is a difficult place to listen. You sit off-center, close to one set of speakers and far from another, surrounded by glass, plastic and fabric that reflect or absorb sound differently.','A DSP works like a sound engineer built into the system. It adjusts timing so sound from every speaker reaches you together, balances levels between left and right, and shapes frequencies to suit the cabin. The result is a clearer, more focused sound that seems to come from in front of you rather than from the door by your knee.','Equipment decides what a system is capable of. Tuning decides what you actually hear.']},
    {title:'Quieter panels, cleaner sound',paragraphs:['Doors and panels are thin metal. When speakers play, those panels vibrate and rattle, and road noise leaks in. Sound treatment adds damping and sealing material in the right places so the metal stays quiet.','The benefits are practical: tighter midbass from door speakers, fewer rattles, and a noticeably quieter cabin on the highway.']},
    {title:'Built to fit your vehicle',paragraphs:['Some systems need parts that don’t come in a box: speaker adapters for unusual openings, amplifier racks, enclosures shaped to a specific trunk or cargo area, and mounting that holds up to heat and vibration.','Our fabrication capability, including additive manufacturing, lets us design and produce these parts for your vehicle. The goal is an installation that looks deliberate and stays quiet, not one held together with universal brackets.'],link:['More on custom fabrication','/services/custom-fabrication']},
    {title:'Four common directions',eyebrow:'Upgrade paths',intro:'These aren’t fixed packages. They’re starting points to help you think about scope. Every system is quoted to your vehicle and goals.',cards:[
      {kicker:'01',title:'Factory system improvement',body:'For drivers who like their factory screen and want clearly better sound without major changes. Typically: upgraded speakers, sound treatment and, where needed, a compact amplifier or processor.'},
      {kicker:'02',title:'Balanced system upgrade',body:'For listeners who want full, even sound across all types of music. Typically: front speaker upgrade, amplifier, modest subwoofer, DSP and tuning.'},
      {kicker:'03',title:'Bass-focused system',body:'For people who want deep, strong low end. Typically: one or more subwoofers, dedicated amplification, a vehicle-specific enclosure and electrical support.'},
      {kicker:'04',title:'Comprehensive custom system',body:'For enthusiasts who want a complete, carefully planned build with speakers, amplifiers, DSP, sound treatment, fabrication and extensive tuning.'}
    ]},
    {title:'Audio work in detail',intro:'See how we’ve planned and installed systems in real vehicles, from factory upgrades to full custom builds.',link:['View Audio Projects','/portfolio?category=audio']}
  ],
  faqs:[
    ['Can you upgrade my factory audio without replacing the screen?','Often, yes. Many vehicles can take better speakers, amplification and processing while keeping the factory head unit and its features.'],
    ['Will I lose my steering-wheel controls or CarPlay?','We plan to keep them wherever possible and will tell you before you commit if a feature can’t be retained.'],
    ['Do I need an amplifier?','Not always. If you want more volume with clarity or are adding a subwoofer, an amplifier usually makes a clear difference.'],
    ['What does a DSP actually do?','It adjusts timing, balance and frequency response so the system sounds right from where you sit, not just louder.'],
    ['Will a subwoofer take up my whole trunk?','It doesn’t have to. Compact and vehicle-specific enclosures can keep most of your cargo space.'],
    ['Is sound deadening worth it?','For most upgrades, yes. It reduces rattles and road noise and helps speakers perform better.'],
    ['Will an audio upgrade drain my battery?','A properly designed and installed system shouldn’t. We size wiring and power correctly and check electrical load. If you already have a drain problem, SignalTrace may be the right starting point.'],
    ['Can you fix a system someone else installed?','In many cases. We’ll inspect it first and tell you what we find before recommending changes.'],
    ['Can I upgrade in stages?','Yes. We can plan a system so each stage builds on the last, without redoing earlier work.']
  ],
  final:{title:'Let’s plan a system that fits your vehicle.',body:'Tell us what you drive, what you listen to and what you’d like to change. We’ll suggest a direction and explain what’s involved.',primary:['Request an Audio Quote','/quote?service=audio'],secondary:['Ask Tessa','/faq#audio']}
,\n  visuals:{hero:'audioHero',sections:{1:'audioComponents',3:'audioFlow',5:'audioPlacement'}}\n};

export default function Page(){return <ServiceCopyPage data={data}/>;}
