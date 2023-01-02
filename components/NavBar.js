import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgb(28, 28, 28);
  display: flex;
  justify-content: center;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  color: white
`

const NavBar = () => {
  return (
    <Container>
      <LinkContainer>
        <Link href='/'> Home</Link>
        <Link href='/profile'> Profile</Link>
        <Link href='/about'> About</Link>
      </LinkContainer>
    </Container>
  )
}

export default NavBar