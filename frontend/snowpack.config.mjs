import proxy from 'http2-proxy';

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    /* ... */
         // directory name: 'build directory'
         public: '/',
       src: '/dist'
  },
  plugins: [
    '@snowpack/plugin-react-refresh'
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
    {
      src: '/api/.*',
      dest: (req, res) => {
        req.url = req.url.replace(/^\/api/, '/'); // remove /api prefix

        return proxy.web(req, res, {
          hostname: 'localhost',
          port: 8080,
        });
      },
    },
],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 8081,
    open: 'none',
  },
  buildOptions: {
    /* ... */
  },
};
