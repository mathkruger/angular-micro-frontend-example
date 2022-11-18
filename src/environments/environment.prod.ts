export const environment = {
  production: true,
  microApps: [
    {
      tagName: "micro-app-order-list",
      url: "http://localhost:5000/order-list/package.js",
      autoRender: true
    },
    {
      tagName: "micro-app-material-list",
      url: "http://localhost:5000/material-list/package.js",
      autoRender: true
    }
  ]
};
