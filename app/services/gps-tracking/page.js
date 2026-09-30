import ServiceCopyPage from '../../../components/ServiceCopyPage';

export const metadata={
  title:'GPS Tracker Installation in Houston | TTT',
  description:'Professionally installed GPS tracking for personal and business vehicles. Location, alerts and geofencing, fitted discreetly by TTT in Houston.'
};

const data={
  eyebrow:'GPS Tracking',
  title:'Know where your vehicle is',
  supporting:'Professionally installed GPS tracking gives you location, alerts and history for one vehicle or several, fitted discreetly and powered reliably.',
  primary:['Request a Tracking Quote','/quote?service=gps'],
  secondary:['Talk Through Your Options','/contact'],
  sections:[
    {title:'Visibility when you need it',paragraphs:['Most of the time, a tracker sits quietly in the background. Its value shows up in specific moments: a vehicle that isn’t where it should be, a teenage driver heading home late, or a work truck that needs to be at a job site by eight.','Tracking gives you a reliable answer to a simple question: where is the vehicle, and what has it been doing? That visibility supports better decisions, whether you own one car or run a small fleet.']},
    {title:'What tracking can do',intro:'Features vary by device and service plan. Typical capabilities include:',cards:[
      {title:'Live location',body:'See where the vehicle is from your phone or computer.'},
      {title:'Alerts',body:'Get notified about events you choose, such as ignition on, movement or power disconnection.'},
      {title:'Geofencing',body:'Draw virtual boundaries around places like home, work or a job site and receive alerts when the vehicle enters or leaves.'},
      {title:'Trip history',body:'Review where the vehicle has been and when.'},
      {title:'Multi-vehicle view',body:'Monitor several vehicles from one account where the selected platform supports it.'}
    ]},
    {title:'For your own vehicles',bullets:['Theft response: location data can help you and law enforcement act quickly.','Family vehicles: check that a new driver arrived safely, or that a car loaned to a relative is where it should be.','Stored and project vehicles: get alerted if a classic, trailer or seasonal vehicle moves when it shouldn’t.','Everyday reassurance: find your car in a large lot, or confirm it’s still parked where you left it while traveling.']},
    {title:'For vehicles that work for your business',paragraphs:['For contractors, service companies and small fleets, tracking turns guesswork into information.'],bullets:['Confirm vehicles arrive at job sites and see how long they stay.','Review routes and mileage for scheduling and records.','Receive alerts for after-hours use.','Locate the nearest vehicle when a job comes in.'],link:['Fleet & Dealership Solutions','/fleet-dealership']},
    {title:'How we install trackers',intro:'A tracker is only useful if it keeps working and stays where it is. Our installation standards focus on three things:',cards:[
      {title:'Discretion',body:'Placement is chosen for each vehicle so the device isn’t obvious. We don’t publish or discuss installation details.'},
      {title:'Reliable power',body:'Connections are made correctly to avoid battery drain, electrical faults or intermittent reporting.'},
      {title:'Verification',body:'We confirm the device reports correctly and that alerts reach you before the vehicle goes back.'}
    ],callout:'Plug-in trackers are easy to find and easy to remove. Professional installation is intended to make the tracker harder to defeat and more dependable over time.'},
    {title:'Tracking shows where. Immobilization helps control whether it moves.',paragraphs:['Tracking and kill switches solve different parts of the same problem. A tracker helps you locate a vehicle. An immobilization solution adds a barrier to the vehicle being started or driven by someone who shouldn’t.','Many owners choose both. We’ll help you decide what makes sense for your vehicle and how you use it.'],link:['Learn about kill switches','/services/kill-switches'],callout:'GPS tracking supports recovery efforts, but no tracking system can guarantee a stolen vehicle will be recovered.'},
    {title:'Tracking the right way',paragraphs:['TTT installs tracking devices only on vehicles owned by the customer or operated under their authority, such as company vehicles or family vehicles registered to them.','We may ask for proof of ownership or authorization before installation.']}
  ],
  faqs:[
    ['Is professional installation better than a plug-in tracker?','Plug-in devices are simple but easy to spot and unplug. A professionally installed tracker is harder to find and can be powered more reliably.'],
    ['Will a tracker drain my battery?','A correctly installed tracker draws very little power while the vehicle is off. We make connections designed to avoid drain and verify the installation.'],
    ['Is there a monthly fee?','Subscription terms depend on the tracking platform selected. We’ll explain the hardware and recurring service terms before you approve anything.'],
    ['Can I see my vehicle on my phone?','Most tracking services include a mobile app. Exact app support depends on the platform selected.'],
    ['Will a tracker guarantee I get my vehicle back if it’s stolen?','No. Tracking can give you and law enforcement valuable location information, but recovery depends on many factors outside anyone’s control.'],
    ['Can I track more than one vehicle on one account?','Often, yes, depending on the platform. Ask us about multi-vehicle options.'],
    ['Can I track a vehicle I don’t own?','We only install trackers for vehicle owners or people authorized to act for them.'],
    ['Where will you put the tracker?','We choose a location suited to each vehicle and keep it confidential. We don’t share installation details publicly.'],
    ['Can tracking work with a kill switch?','Yes. Many owners combine the two for layered security. We plan both together so they don’t conflict.']
  ],
  final:{title:'Set up tracking that works when it matters.',body:'Tell us about your vehicle or vehicles and what you want to monitor. We’ll recommend an option and explain what it involves.',primary:['Request a Tracking Quote','/quote?service=gps'],secondary:['Fleet & Dealership Solutions','/fleet-dealership']}
};
export default function Page(){return <ServiceCopyPage data={data}/>;}
