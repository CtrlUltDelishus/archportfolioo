import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  Heading,
  Button
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import { IoLogoFacebook } from 'react-icons/io5'


const Work = () => (
  <Layout title="Restoration @ Limnos">
    <Container>
      <Title>
      Restoration and Architectural Study/ Freelance 3D Presentation in Limnos <Badge>2023-</Badge>
      </Title>
      <Box mb={4}>
      <Paragraph>Throughout the restoration project of the destroyed/abandoned house, I closely collaborated with the office.</Paragraph>
      </Box>

      <Box mb={4}>
      <Paragraph>They provided me with the AutoCAD files, which served as the basis for creating the 3D representation of the restored structure.</Paragraph>
      </Box>

      <Box mb={4}>
      <Paragraph>I maintained constant communication with the office, ensuring that any changes or differences were promptly discussed and incorporated into the project.</Paragraph>
      </Box>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>OFFICE</Meta>
          <Link href="https://www.facebook.com/anastasia.vassiliou.3">
          P&V Pantelaroudis Ch. & Vasileiou An. / Architecture and Engineering
          </Link>
        </ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Collaborated With</Meta>
          <Link href="https://www.facebook.com/anastasia.vassiliou.3">
          <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
          Αναστασια Βασιλειου 
          </Button>
          </Link>
        </ListItem>
      </List>

      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Programs Used</Meta>
          <Link href="">
            AutoCAD 2023, Sketchup 2021, Lumion 12.5, Photoshop 2023
          </Link>
        </ListItem>
      </List>

      <Box mb={4}>
    <Heading as="h2" fontWeight="bold" fontSize="lg" mt={4} mb={2}>
     <h2>BEFORE:</h2> 
    </Heading>
    </Box>

<WorkImage src="https://drive.google.com/uc?id=1sU1Gx0_DkJAQSpcdKMTT8Mg3ShA6fBzO"/>
<WorkImage src="https://drive.google.com/uc?id=1Y_LbHLnLQaL25V-SJCFSs0krpCOyOMr_"/>
<WorkImage src="https://drive.google.com/uc?id=1yxzJjaIhFz2p-CgKuUpalae46p-H-e9e"/>
<WorkImage src="https://drive.google.com/uc?id=1IMoigSC8Z_LBKISrOpIvrrrDtzzBmpVL"/>
<WorkImage src="https://drive.google.com/uc?id=1slYwUuqO7N6AX7gQXJQqpUa4nRhNzFnZ"/>
<WorkImage src="https://drive.google.com/uc?id=1dStTLUU6yKTIvrjVL0QOtHp4ZSUVI1zI"/>


      <Box mb={4}>
    <Heading as="h2" fontWeight="bold" fontSize="lg" mt={4} mb={2}>
     <h2>AFTER:</h2> 
    </Heading>
    </Box>

<WorkImage src="https://drive.google.com/uc?id=18bTcN8yk6OI4ggWUsZm6ae850TFbLsOU"/>
<WorkImage src="https://drive.google.com/uc?id=1MlP2pat5P-YZ_l9p3ANvQf9U78Oiszgb"/>
<WorkImage src="https://drive.google.com/uc?id=1wZiLz4rIB5ArgIUHSD9d6pqKcdwGrraz"/>
<WorkImage src="https://drive.google.com/uc?id=1-xo07skvhn9OMwdP6-erW7cYGCIjtqag"/>
<WorkImage src="https://drive.google.com/uc?id=1bA19f0RA8BL3cYAq2UmFDXLc5Z1gLtLV"/>
<WorkImage src="https://drive.google.com/uc?id=1CmEIItxFhOfEbltbAJg3_GnzBltwZt6_"/>
<WorkImage src="https://drive.google.com/uc?id=1BiynJKZxYdq4akYQxtNLIlV5EvEgUq3A"/>

      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
