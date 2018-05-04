import React from 'react';
import ReactDOM from 'react-dom'; 

// import $ from 'jquery';
// import {Router, Route, IndexRoute} from 'react-router';
// import {browserHistory} from 'react-router';

import './assets/css/bootstrap-grid.css';
import './assets/css/icons.css';
import './assets/css/animate.min.css';
import './assets/css/style.css';
//import './assets/css/responsive.css';
//import './assets/css/chosen.css';
import './assets/css/colors/colors.css';
import './assets/css/fonts/fontawesome-all.min.css';
//import './assets/css/heart.css';

import CandidateSingle from './components/candidate_single.js';
import ListItem from './components/ListItem.js';
import SideNav from './components/sidenav';
import Pagination from './components/pagination.js';

//import './assets/css/bootstrap-grid.css';
//import './assets/css/theme-layout.css';
//import './assets/css/list-items.css';
//import './assets/css/search.css';
//import './assets/css/checkbox.css';
//import './assets/css/pagination.css';

/*const routes = (
  <Router history={browserHistory}>
    <Route path="/listCV" component = {ListCV}></Route>
    <Route path="/Candidates" component = {Candidates}></Route>
  </Router>
)*/



class App extends React.Component {
  render() {
    return (
    /*<section>
        <div className="container">
          <div className="row no-gape">
            <SideNav />
            <ListItem />
          </div>
        </div>
        <div style={{margin: '0 auto'}}>
          <Pagination/>
        </div>
      </section>*/
     
     <section>
        <div>
          <CandidateSingle />
        </div>
      </section>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root') // eslint-disable-line no-undef
);
