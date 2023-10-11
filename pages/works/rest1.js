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
      Restoration and Architectural Study/ Freelance 3D Presentation in Limnos <Badge>2022-</Badge>
      </Title>
      <Box mb={4}>
      <Paragraph>Throughout the restoration project of the destroyed/abandoned house, I closely collaborated with the office.
      </Paragraph>
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

<WorkImage src="https://drive.google.com/uc?id=10hihYNoBpXMtwDrIucJ3Asf4P3G0v5s2"/>
<WorkImage src="https://drive.google.com/uc?id=1bgXFgCKsepU9ZW8ObI4vsLJdlxlet_Ox"/>
<WorkImage src="https://drive.google.com/uc?id=1NVXrsbtRK73_tLn2YrEjHmZFc7v6QdsZ"/>
<WorkImage src="https://drive.google.com/uc?id=1CTK1-raFBdn0x2I5fwJMSjLBqw830bC8"/>
<WorkImage src="https://drive.google.com/uc?id=1F3mRLOLzaMAoP6581yW9Xqy-ev7ytfiA"/>


      <Box mb={4}>
    <Heading as="h2" fontWeight="bold" fontSize="lg" mt={4} mb={2}>
     <h2>AFTER:</h2> 
    </Heading>
    </Box>

<WorkImage src="https://drive.google.com/uc?id=1kiGphvhzR0HkF__RPUQO_D00YawVhtcW"/>
<WorkImage src="https://drive.google.com/uc?id=1wFuYoeGtg2knyHWVd4fsjWf3jhFXIR3V"/>
<WorkImage src="https://drive.google.com/uc?id=1lxI9HA7FNVXR7239XdPYzC6y0C6Wouos"/>
<WorkImage src="https://drive.google.com/uc?id=1wB7Rntta2jLHon-rOL-dmetzPubTlbJL"/>
<WorkImage src="https://drive.google.com/uc?id=1HIJ2cQc07jo8xcml820r1ZUkuHC5LfrR"/>
<WorkImage src="https://drive.google.com/uc?id=1lfvZIs0zPnslA0o3XoWpBHDUZ71outn4"/>
<WorkImage src="https://drive.google.com/uc?id=1CAlX0vaB8DMKjRRlWtbclBTDeHKC34FA"/>

      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
