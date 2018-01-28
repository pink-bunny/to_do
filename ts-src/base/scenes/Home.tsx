import * as React from 'react'

import UsersList from 'base/components/UsersList'

const Home = () => (
  <div>
    <div>Hello, world!</div>

    <button onClick={() => console.log('I am here!')}>
      Click me!
    </button>

    <UsersList />
  </div>
)

export default Home
