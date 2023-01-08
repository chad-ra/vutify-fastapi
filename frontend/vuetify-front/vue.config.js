module.exports = {
  devServer: {
    proxy: 'http://localhost:8000',
    disableHostCheck: true,
},
publicPath: "/",
  transpileDependencies: ["vuetify"],
  lintOnSave: false,
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== "production",
  },

};



// module.exports = {
//   devServer: {
//     host: 'localhost',
// },
//   publicPath: "/",
//   transpileDependencies: ["vuetify"],
//   lintOnSave: false,
//   css: {
//     // Enable CSS source maps.
//     sourceMap: process.env.NODE_ENV !== "production",
//   },

// };
