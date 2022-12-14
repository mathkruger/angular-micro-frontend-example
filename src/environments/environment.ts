export const environment = {
  production: false,
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
    },
    {
      tagName: "micro-app-homepage",
      url: "http://localhost:5000/homepage/package.js",
      autoRender: true
    },
    {
      tagName: "micro-app-header",
      url: "http://localhost:5000/header/package.js",
      autoRender: false
    },
    // {
    //   tagName: "micro-app-footer",
    //   url: "http://localhost:5001/footer.js",
    //   autoRender: false
    // }
  ]
};