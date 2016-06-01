#should be
npm > v3.6.0
node > v5.7.1

#run
npm install -g webpack
npm install
npm start

koa:
  src/koaTest.js
express:
  src/expressTest.js
es5+es6:(handlebars)
  src/detail.js
h5:
  src/h5.js
react+redux:
  src/reactTest.js
  src/actions/*
  src/components/*
  src/containers/*
  src/reducer/*
vue+vuex:
  src/vue.js
  src/vue/*
  src/vuex/*
test(mocha+chai+karma+sinon):
  test/*
  karma.conf.js

#run test
npm install -g karma
npm install
npm test
