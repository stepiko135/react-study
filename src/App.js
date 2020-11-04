import React from 'react';
import PropTypes from 'prop-types';

//   function App() {
//     return(
//       <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type='text' onChange={()=>{console.log("I'm clicked!")}}/>
//     </React.Fragment>
//   )
// }

const App = () => {
  const profiles = [
    {name:"Taro", age:10},
    {name:"Hanako" , age :5},
    {name:"Noname",},
  ]
  return (
    <div>
      {
        profiles.map((profile, index)=>{
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>I am {props.name},and {props.age} years old.</div>
}
User.propTypes = {
  name:PropTypes.string,
  age : PropTypes.number.isRequired,
}
export default App;
