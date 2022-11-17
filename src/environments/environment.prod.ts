export const environment = {
  production: true,
  microApps: {
    orderList: {
      url: "http://localhost:3000/order-list/package.js",
      tagName: "micro-app-order-list"
    },
    materialList: {
      url: "http://localhost:3000/material-list/package.js",
      tagName: "micro-app-material-list"
    },
  }
};
