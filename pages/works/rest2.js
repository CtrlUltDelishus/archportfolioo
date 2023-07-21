import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Box,
  Heading
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="Restoration @ Limnos">
    <Container>
      <Title>
        Restoration and Architectural Study/ Freelance 3D Presentation in Limnos <Badge>2022-</Badge>
      </Title>
      <Box mb={4}>
      <Paragraph>Throughout the restoration project of the destroyed/abandoned house, I closely collaborated with the office.</Paragraph>
      </Box>

      <Box mb={4}>
      <Paragraph>They provided me with the AutoCAD file, which served as the basis for creating the 3D representation of the restored structure.</Paragraph>
      </Box>

      <Box mb={4}>
      <Paragraph>I maintained constant communication with the office, ensuring that any changes or differences were promptly discussed and incorporated into the project.</Paragraph>
      </Box>



      <List ml={4} my={4}>
        <ListItem>
          <Meta>Collaborated With</Meta>
          <Link href="https://www.facebook.com/anastasia.vassiliou.3">
          Αναστασια Βασιλειου
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

<WorkImage src="https://drive.google.com/uc?id=1yZeO6famljsLj9bCTwvzmDsBpgwpeFq1"/>
<WorkImage src="https://drive.google.com/uc?id=1ypKtRETJV4FmApdAdrQiB2Oix2suaM7v"/>
<WorkImage src="https://drive.google.com/uc?id=1cxKpaa2qBafs80s7TbuzuPUJ2q4aHKan"/>
<WorkImage src="https://drive.google.com/uc?id=1Nn_Ja-dpPGxe6jGA97GOofRHzS5cBnnV"/>


      <Box mb={4}>
    <Heading as="h2" fontWeight="bold" fontSize="lg" mt={4} mb={2}>
     <h2>AFTER:</h2> 
    </Heading>
    </Box>
    
<WorkImage src="https://drive.google.com/uc?id=1uhlguRGszbTe3OyXn5cMqbFqr3lpFQes"/>
<WorkImage src="https://drive.google.com/uc?id=1VoFdKmfvEgynaXQLZF9I9idP5dRO2yiv"/>
<WorkImage src="https://drive.google.com/uc?id=1DlZXu5LJYIaxn5h9vAfxmkyIyGYLKqBI"/>
<WorkImage src="https://drive.google.com/uc?id=1ITSDgKEV8JThC--EVB1bJpP2ftpMUAe4"/>
<WorkImage src="https://drive.google.com/uc?id=11fZlmTkmqeyF-xShuOlcXlLpsZJX2iuB"/>
<WorkImage src="https://drive.google.com/uc?id=1EFo02kuIMNCJLDPuu3FtH_OPo_GD8dW9"/>
<WorkImage src="https://drive.google.com/uc?id=1GMyvIo4hUjcb3jlMVzr3HVcamdTF9T1s"/>

      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
