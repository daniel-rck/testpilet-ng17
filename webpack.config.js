const extendWebpack = require('piral-ng/extend-webpack');

module.exports = config => {
  config = extendWebpack({
    ngOptions: {
      jitMode: true,
    },
  })(config);

  config.module.rules[0].oneOf = config.module.rules[0].oneOf.map(rule => {
    if (rule.test) {
      if (rule.test.toString() == /\.css$/i.toString()) {
        rule.use.push({
          loader: 'postcss-loader',
        });
      }
    }
    return rule;
  });

  return config;
};
