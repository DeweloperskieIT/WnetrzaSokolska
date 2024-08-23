// const cspHeader = `
//     default-src 'self' ;
//     script-src 'self' 'unsafe-eval' 'unsafe-inline' 192.168.10.27 https://www.googletagmanager.com https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/ https://va.vercel-scripts.com/v1/speed-insights/script.debug.js;
//     style-src 'self' 'unsafe-inline'  https://fonts.googleapis.com https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/ https://www.googletagmanager.com/;
//     img-src 'self'  https://i.ytimg.com/ https://www.googletagmanager.com/ blob: data:;
//     font-src 'self'  https://fonts.gstatic.com;
//     object-src 'none';
//     base-uri 'self' ;
//     form-action 'self' ;
//     frame-ancestors 'none';
//     frame-src 'self' https://www.youtube-nocookie.com/embed/ https://www.youtube.com/ https://youtu.be/;
//     upgrade-insecure-requests;
// `;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value: cspHeader.replace(/\n/g, ""),
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
