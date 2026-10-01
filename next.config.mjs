/** @type {import('next').NextConfig} */
const nextConfig={poweredByHeader:false,reactStrictMode:true,async redirects(){return[
 {source:'/start',destination:'/quote',permanent:true},
 {source:'/fleet-dealership',destination:'/solutions/fleet-dealership',permanent:true},
 {source:'/industries',destination:'/business',permanent:true},
 {source:'/industries/:path*',destination:'/business/:path*',permanent:true},
 {source:'/resources',destination:'/learn',permanent:true},
 {source:'/resources/faq',destination:'/faq',permanent:true},
 {source:'/resources/:path*',destination:'/learn',permanent:true},
 {source:'/portfolio',destination:'/projects',permanent:true},
 {source:'/solutions/dealership-technology',destination:'/solutions/fleet-dealership#dealerships',permanent:true},
 {source:'/solutions/fleet-intelligence',destination:'/solutions/fleet-dealership#fleets',permanent:true},
 {source:'/services/tracking',destination:'/services/gps-tracking',permanent:true},
 {source:'/services/security',destination:'/services/kill-switches',permanent:true},
 {source:'/services/cameras',destination:'/technology/vehicle-vision',permanent:true},
 {source:'/services/electronics',destination:'/solutions/custom-integration',permanent:true},
 {source:'/services/lighting',destination:'/solutions/custom-integration',permanent:true}
]}};
export default nextConfig;