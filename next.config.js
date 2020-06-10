module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  },
  env: {
    PORT: 8080,
    AWS_ACCESS_KEY_ID: '0',
    AWS_SECRET_KEY: '0',
    AWS_REGION: 'us-east-1',
  }
}