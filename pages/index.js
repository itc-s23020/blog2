import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
const Home = () => {
  return (
    <Container>
      <Meta pageTitle='ブログ' />
      <Hero title='CUBE' subtitle='アウトプットしていくサイト' imageOn />
    </Container>
  )
}
export default Home
