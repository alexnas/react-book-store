import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import withBookstoreService from '../hoc/with-bookstore-service';

const App = ({ bookstoreService }) => {
  console.log(bookstoreService);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact route='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default withBookstoreService()(App);

// import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Home from '../pages/Home';

// class App extends Component {
//   state = {};
//   render() {
//     const { bookstoreService } = this.props;
//     console.log('bookstoreService', bookstoreService);
//     return (
//       <BrowserRouter>
//         <Switch>
//           <Route exact route='/' component={Home} />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }
// export default withBookstoreService()(App);
