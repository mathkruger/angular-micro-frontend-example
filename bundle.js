var concat = require('concat-files');
var project = process.argv[2];

concat([
    `./dist/${project}/polyfills.js`,
    `./dist/${project}/runtime.js`,
    `./dist/${project}/main.js`
], `./dist/${project}/package.js`, function(err) {
    if (err) throw err
    console.log(`Bundle for ${project} done! package.js created.`);
});