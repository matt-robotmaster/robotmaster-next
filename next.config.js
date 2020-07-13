module.exports = {
  env: {
    PORT: 8080,
    AWS_ACCESS_KEY_ID: '0',
    AWS_SECRET_KEY: '0',
    AWS_REGION: 'us-east-1',
    CONTACT_FORM_CRM_URL: 'https://caw.maximizercrmlive.com/Webform.aspx?request=submitwebform&token=5F50535F174C4C4330591416151F47264D1209314B67696778414D7C0D7F2B58185452414D4B476458421E5D1D477E41180C634D676C677A494A7F5C79735D565453474648416D5B421218504474421D0A624C6C69697D42482E5A2C7C0A50565246444842365D4212111E4772471F5F66426F67687E464D7B5F78785F57525344144E4264094515114E4376444808314A3C6E697B474D785E797F5154575711454D44375D4616431A1177461E5C624E6F3F6F7D411B7D587F795850555347144947615E451211184573431A0B304C6C69697D42482E5E797A50550657134548446C591616121A4677421A0A624E6F6B6F79411E7B5E782B5F51555F45104E46625D4217161D457F44180D364A6C6E3D7E4548755E7D7A0E5153574B4049446C584316161A4572431B0D62196F686A79414D7D0A7F7E585D5551424C4942645E401111134671441F0D604C6A686B7C44482E597D7F5E51505243401F41305D4212111F11724C1E58624E6F6E6F7941487C587F72',
    TRIAL_FORM_CRM_URL: 'https://caw.maximizercrmlive.com/Webform.aspx?request=submitwebform&token=5F50535F174C4C4330591416151F47264D1209314B67696778414D7C0D7F2B5818545E464D4D41625945135D1941734C130C634F6F6E6D7841487859787E5956515442474B416C50471719504470421B0A364C3A693B7D42482E5A2A7C5B50545217444A42675D4012161E4272461F0B66196F67687B464A7B5A78795F54525344174E10640E451011494372444A08634A6E6E3B7B474D785E7B7F5954555744454F44605D4416421A1677471E0A624A6F3F6F78411A7D5D7F78585355534717494C615B451711194577431C0B644C3A693B7D42482E5E7B7A5855005742454A4464591016151A4377431A5C624A6F6B6F7C41407B5B78285F52555F44144E45625E4216171D4373441D0D604A6F6B3B7B4948795E7D7F5C54545241454A4460584016101F4577111B59624F6A6F6F7E411A7D597F2B585555524211494D615945171413437444120B664C39693C7B124F7D5B767F5951015243401B41655C4710401A477717'
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