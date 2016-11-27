import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './modules/App';

 // System.import('./modules/Home')
 //          .then((a) => console.log(a, a.default))
 //          .catch((er) => {console.log(er)}); 


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 


function errorLoading(err) {
 console.error('Dynamic page loading failed', err);
}


function loadRoute(cb) {
 return (module) => {
 	cb(null, module.default)};
}

const dynamicRoutes = {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
      	console.log(cb);
        System.import('./modules/Home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: '/filter-table',
      products : PRODUCTS,
      getComponent(location, cb) {
        System.import('./modules/filter_table/FilterTable.module')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
  },
      {
      path: '/repos',
      getComponent(location, cb) {
        System.import('./modules/Repos')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
      childRoutes: [
	      {
	      	path: '/repos/:userName/:repoName',
	      	getComponent(location, cb) {
	      		System.import('./modules/Repo')
	  			.then(loadRoute(cb))
	  			.catch(errorLoading)
	      	}
	      }
      ]
    },
    {
      path: '/about',
      getComponent(location, cb) {
        System.import('./modules/About')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
        {
      path: '/redux',
      getComponent(location, cb) {
        System.import('./modules/redux/Redux.module')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
  ]
};


render((
  <Router history={browserHistory} routes={dynamicRoutes}></Router>
), document.getElementById('app'))


// render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App} >
//     	<IndexRoute componnet="Home" />

// 	    <Route path="/repos" component={Repos}>
// 	     	<Route path="/repos/:userName/:repoName" component={Repo} />
// 	    </Route>
	   
// 	    <Route path="/about" component={About} />
//      </Route>

//   </Router>
// ), document.getElementById('app'))
