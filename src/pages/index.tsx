import Link from 'next/link'
import styled from "styled-components"

const Home = () => {
  return (
    <Main>
      <h1>State Management</h1>
      <span>Choose the state manager:</span>
      <Link href='/redux'>Redux</Link>
      <Link href='/mobx'>Mobx</Link>
      <Link href='/context'>Context</Link>
    </Main>
  )
}

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #131313;
  color: white;
  font-size: 2rem;

  h1 {
    font-size: 8rem;
  }
`

export default Home
