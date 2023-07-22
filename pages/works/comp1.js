import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="Athens Competition">
    <Container>
      <Title>
        ¨Λύχνος¨ - Monument in the Centre of Athens <Badge>2022-</Badge>
      </Title>
      <Box mb={4}>
      <Paragraph>      In collaboration with the esteemed Professor Michaelides Anthony and Charalampides Nikos, we present our concept for an architectural competition— a monument paying homage to the 1974 invasion of Cyprus.</Paragraph>
      </Box>

      <Box mb={4}>
      <Paragraph>      Situated in locale of Athanasiou Diakou, Athens, Greece, this design boasts a captivating silhouette resembling a human form, delineated by elegant glowing white lines. 
</Paragraph>
      </Box>

      <Box mb={4}>
      <Paragraph>Rising to a majestic height of 10-12 meters, this monument becomes a striking symbol of remembrance and reverence. </Paragraph>
      </Box>

      <Box mb={4}>
      <Paragraph>      
      With its meticulously crafted composition, the interplay of light and shadow further accentuates its profound presence, inviting contemplation and reflection.</Paragraph>
      </Box>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Collaborated With</Meta>
          <Link href="">
            Michaelides Anthony , Nikos Charalampides
          </Link>
        </ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Programs Used</Meta>
          <Link href="">
            Rhino 7, Grasshopper, Blender, Sketchup 2021, Lumion 12.5, Photoshop 2023
          </Link>
        </ListItem>
      </List>

<WorkImage src="https://drive.google.com/uc?id=1YF7m1Z9xv_tOBK9eCL6ONxzjKvc26hHT"/>
<WorkImage src="https://drive.google.com/uc?id=1XJgLxhyuw47n5VsnGavA2NcXbQQAYC_V"/>
<WorkImage src="https://drive.google.com/uc?id=1mtemmewWEL-2VCC9ZCwsggkufr766vCk"/>
<WorkImage src="https://drive.google.com/uc?id=1qGRhuiXOpmB_beNZCqLcKHJzEVafqGv_"/>
<WorkImage src="https://drive.google.com/uc?id=1nGnhtFu4K0Ff-c9jp2XK6lCYMHHrxvtS"/>
<WorkImage src="https://drive.google.com/uc?id=1en8aOZEXLRDLPNEtgH3D8tFBw1IUghYM"/>
<WorkImage src="https://drive.google.com/uc?id=1l7TsY_-79B8MvZNTJgHhUfsILZmAASUA"/>
<WorkImage src="https://drive.google.com/uc?id=1lHi6kY-glcYsQNaYrPz3N6oXsrxycP18"/>
<WorkImage src="https://drive.google.com/uc?id=17qXwH9yAGA758NTn13Q2N5XmVLrDPJaq"/>
<WorkImage src="https://drive.google.com/uc?id=1hmE9TTiyviyi69rOFwK53QIGlC4FjQEM"/>



    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
