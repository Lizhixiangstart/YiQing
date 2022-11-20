const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
   host:'localhost',
   port:8080,
   proxy:{
    "/":{
      ws:true,
      target:'http://localhost:8081',
      pathRewrite:{'^/':''}
      changeOrigin:true,
    }
   }
},
  transpileDependencies: true,

})
