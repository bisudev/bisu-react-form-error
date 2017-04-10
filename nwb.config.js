module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'BisuReactFormError',
      externals: {
        react: 'React'
      }
    }
  }
}
