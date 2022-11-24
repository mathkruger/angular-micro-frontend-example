export const environment = {
  production: false,
  microApps: [
    {
      tagName: "micro-app-order-list",
      url: "https://matheuskrugerdev.cf/angular-micro-frontend-example/order-list/package.js",
      autoRender: true
    },
    {
      tagName: "micro-app-material-list",
      url: "https://matheuskrugerdev.cf/angular-micro-frontend-example/material-list/package.js",
      autoRender: true
    },
    {
      tagName: "micro-app-homepage",
      url: "http://localhost:5000/homepage/package.js",
      autoRender: true
    }
  ]
};