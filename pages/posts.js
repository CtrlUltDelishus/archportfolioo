import { Container, Heading, SimpleGrid, Badge } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'




const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

<Badge> No Posts Yet</Badge>

    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
