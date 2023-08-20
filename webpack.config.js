// https://github.com/angular/angular-cli/issues/23944
module.exports = (config, options) => {
  config.module.rules
    .find((x) => x.test.toString().indexOf(':css') > -1)
    .rules[0].oneOf.forEach((x) => {
      x.use
        .filter((y) => y.loader.indexOf('postcss') > -1)
        .forEach((postCssEl) => {
          postCssEl.options.postcssOptions.config = true
        })
    })
  return config
}
