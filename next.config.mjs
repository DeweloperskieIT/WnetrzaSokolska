/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async headers() {
    // Define different policies for development and production
    const cspPolicy =
      process.env.NODE_ENV === "development"
        ? ""
        : `
          default-src 'self';
          script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com;
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
          img-src 'self' data: https://wnetrza.deweloperskie.pl;
          connect-src 'self' https://wnetrza.deweloperskie.pl;
          font-src 'self' https://fonts.gstatic.com;
          object-src 'none';
          frame-src 'self';
          base-uri 'self';
          form-action 'self';
        `;

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspPolicy,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
