import React from 'react';
import { Router } from 'react-router-dom';

// export default class RouterWrapper extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: []
//         }
//     }


//     render() {
//         return (
//             <Route>
//                 <Layout this.props>
//                     <Component />
//                 </Layout>
//             </Route>
//         )
//     }
// }

// function RouteWrapper({
//     component: Component,
//     layout: Layout,
//     ...rest
//   }) {
//     return (
//       <Route 
//         {...rest} 
//         render={(props) =>
//           <Layout {...props}>
//             <Component {...props} />
//           </Layout>
//         } />
//     )
//   }