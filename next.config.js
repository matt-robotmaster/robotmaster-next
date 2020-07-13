module.exports = {
  env: {
    PORT: 8080,
    AWS_ACCESS_KEY_ID: '0',
    AWS_SECRET_KEY: '0',
    AWS_REGION: 'us-east-1',
    CRM_URL: 'https://caw.maximizercrmlive.com/Webform.aspx?request=submitwebform&token=5F50535F174C4C4330591416151F47264D1209314B67696778414D7C0D7F2B58185452414D4B476458421E5D1D477E41180C634D676C677A494A7F5C79735D565453474648416D5B421218504474421D0A624C6C69697D42482E5A2C7C0A50565246444842365D4212111E4772471F5F66426F67687E464D7B5F78785F57525344144E4264094515114E4376444808314A3C6E697B474D785E797F5154575711454D44375D4616431A1177461E5C624E6F3F6F7D411B7D587F795850555347144947615E451211184573431A0B304C6C69697D42482E5E797A50550657134548446C591616121A4677421A0A624E6F6B6F79411E7B5E782B5F51555F45104E46625D4217161D457F44180D364A6C6E3D7E4548755E7D7A0E5153574B4049446C584316161A4572431B0D62196F686A79414D7D0A7F7E585D5551424C4942645E401111134671441F0D604C6A686B7C44482E597D7F5E51505243401F41305D4212111F11724C1E58624E6F6E6F7941487C587F72'
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