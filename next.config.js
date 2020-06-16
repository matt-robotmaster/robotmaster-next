module.exports = {
  env: {
    PORT: 8080,
    AWS_ACCESS_KEY_ID: '0',
    AWS_SECRET_KEY: '0',
    AWS_REGION: 'us-east-1',
  },

  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  },
  experimental: {
    async redirects() {
      return [
        {
          source: "/:lang/products/whats-new-in-v5",
          destination: "/products",
          statusCode: 301
        }, {
          source: "/:lang/support",
          destination: "https://support.robotmaster.com",
          statusCode: 301
        }, {
          source: "/:lang/blog",
          destination: "/:lang/newsroom",
          statusCode: 301
        }, {
          source: "/:lang/products/whats-new-in-v6",
          destination: "/:lang/products#whats-new-v6",
          statusCode: 301
        }, {
          source: "/:lang/why-robotmaster/evolution-chart",
          destination: "/:lang/why-robotmaster#evolution-of-robot-programming",
          statusCode: 301
        }, {
          source: "/:lang/why-robotmaster/benefits",
          destination: "/:lang/why-robotmaster#solving-programming-challenges",
          statusCode: 301
        }, {
          source: "/:lang/resellers",
          destination: "/:lang/contact",
          statusCode: 301
        }, {
          source: "/:lang/v6-3",
          destination: "/:lang/whats-new",
          statusCode: 301
        }
      ];
    }
  },
}