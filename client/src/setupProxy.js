const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3700',
      changeOrigin: true,
      secure: false,
    })
  );
};

// const proxy = {
//     target: 'http://localhost:3700',
//     changeOrigin: true
// }
// const proxy2 = {
//     target: 'http://localhost:3000',
//     changeOrigin: true
// }


// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware(proxy)
//   );
//   app.use(
//     '/api',
//     createProxyMiddleware(proxy2)
//   );
// };







// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(createProxyMiddleware('http://localhost:3000', { target: 'http://localhost:3700/' }));
// };