import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function SiteTelemetry(){
  return <><Analytics/><SpeedInsights/></>;
}
