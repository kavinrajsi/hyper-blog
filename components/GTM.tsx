'use client';

import { useEffect } from 'react';

export default function GTM() {
//   useEffect(() => {
//     function initGTM() {
//       if (window.gtmDidInit) return;
//       window.gtmDidInit = true;

//       const script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.async = true;
//       script.onload = () => {
//         window.dataLayer?.push({
//           event: 'gtm.js',
//           'gtm.start': new Date().getTime(),
//           'gtm.uniqueEventId': 0,
//         });
//       };
//       script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-K8PBTTFP';
//       document.head.appendChild(script);
//     }

//     document.addEventListener('DOMContentLoaded', () => {
//       setTimeout(initGTM, 3500);
//     });
//     document.addEventListener('scroll', initGTMOnEvent);
//     document.addEventListener('mousemove', initGTMOnEvent);
//     document.addEventListener('touchstart', initGTMOnEvent);

//     function initGTMOnEvent(event: Event) {
//       initGTM();
//       (event.currentTarget as EventTarget).removeEventListener(event.type, initGTMOnEvent);
//     }

//     window.dataLayer = window.dataLayer || []; 
//     window.dataLayer.push({
//       originalLocation:
//         document.location.protocol +
//         '//' +
//         document.location.hostname +
//         document.location.pathname +
//         document.location.search,
//     });
//   }, []);

//   return null;
}
