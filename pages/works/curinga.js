import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Box,
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title, Meta } from '../../components/work'
  import Paragraph from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Athens Competition">
      <Container>
        <Title>
          Reuse The Thermae <Badge>2023-</Badge>
        </Title>
        <Box mb={4}>
        <Paragraph>This design incorporates lighting within rods to gently diffuse light, reducing glare and providing sufficient illumination. The rods alternate between cool and warm tones, emitting a cool tone in the morning and a warmer hue after dusk, serving as a beacon of heritage in Curinga. </Paragraph>
        </Box>
        
        <Box mb={4}>
            <Paragraph>Arranged in a wedge-shaped pattern around the monument, the white-colored rods, made of recycled frosted acrylic, vary in height and cross-section, mimicking the monument's facades and creating a mysterious atmosphere that invites exploration. The arrangement provides shade in summer and shelter from wind in winter, while the varying heights and cross-sections evoke the impression of a naturally placed forest, guiding visitors along a path towards the monument's core.</Paragraph>
        </Box>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Collaborated With</Meta>
            <Link href="">
              Παπακυπαρίσση Ε. , Ιωαννίδου Χ. , Κιουπτσή Ε. 
            </Link>
          </ListItem>
        </List>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Programs Used</Meta>
            <Link href="">
              Sketchup 2021, Lumion 12.5, Photoshop 2023
            </Link>
          </ListItem>
        </List>
  
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  