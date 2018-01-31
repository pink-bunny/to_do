import React from 'react'

const Home = () => (
  <div>
    <div>Hello, world!</div>

    <button onClick={() => console.log('I am here!')}>
      Click me!
    </button>
  </div>
)

export default { component: Home }
