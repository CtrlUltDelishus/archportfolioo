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
  <Layout title="Tourist Apt Complex @ Limnos">
    <Container>
      <Title>
      Architectural Study/ Freelance 3D Presentation in Limnos <Badge>2023-</Badge>
      </Title>
      <Box mb={4}>
      <Paragraph>Throughout the architectural study of the project, I closely collaborated with the office.</Paragraph>
      </Box>

      <Box mb={4}>
      <Paragraph>They provided me with the AutoCAD files, which served as the basis for creating the 3D representation of the structures.</Paragraph>
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
     <h2>MASTERPLAN:</h2> 
    </Heading>
    </Box>

<WorkImage src="https://drive.google.com/uc?id=10djvmCwV9n1Fy8nIxNZTrh98hx8M6xpS"/>

<WorkImage src="https://drive.google.com/uc?id=1hk9HdW_dgHSPHyzEEVaSFEvtHYc2lEvg"/>

<WorkImage src="https://drive.google.com/uc?id=1qmwKqG7VJa-CCfvVLCuVjJm0aWdCnqTd"/>

<WorkImage src="https://drive.google.com/uc?id=18oofHqfqJJgRC0ILc0nqRqiv32qmXdPK"/>


      <Box mb={4}>
    <Heading as="h2" fontWeight="bold" fontSize="lg" mt={4} mb={2}>
     <h2>Structure #1:</h2> 
    </Heading>
    </Box>

    <WorkImage src="https://drive.google.com/uc?id=17LbK49wOrTtZso5m5yqPf_dw_L19wSZe"/>

    <WorkImage src="https://drive.google.com/uc?id=1d7L3bo6dXc3gl5HjLZJLR7DjLbVd6FR"/>

    <WorkImage src="https://drive.google.com/uc?id=1jD_aG1wzMH7FEdgj2mCtL6Sl3z2w2YHx"/>

    <WorkImage src="https://drive.google.com/uc?id=1id1N7MwSUwQ1rlvOC3FUKv2YYsfqHN_T"/>

    <WorkImage src="https://drive.google.com/uc?id=1JfvXx2HKousIiAud_IesbxxhoZEsx4hq"/>

    <WorkImage src="https://drive.google.com/uc?id=1VZKipqaxetVYAacFosJNAWY44UpImsjk"/>

    <WorkImage src="https://drive.google.com/uc?id=15B1wb94711isupGZ1d1FrWXSMULYDLGv"/>


<Box mb={4}>
    <Heading as="h2" fontWeight="bold" fontSize="lg" mt={4} mb={2}>
     <h2>Structure #2:</h2> 
    </Heading>
    </Box>

<WorkImage src="https://drive.google.com/uc?id=1yRLYcg1ypwvlHCg0JRh2us_X3DhwdWMQ"/>

<WorkImage src="https://drive.google.com/uc?id=1hvrZKHMDFeqNaB-B3JuQcOe4VakbRsVW"/>

<WorkImage src="https://drive.google.com/uc?id=1mdTtXY2fxiJ5cuQXIOA9dALwsN5nTaRY"/>
 
<WorkImage src="https://drive.google.com/uc?id=1UHyRpui5VqLBWIi-6HjK8pZ4dOwbMn_7"/>

<WorkImage src="https://drive.google.com/uc?id=11a7mMjQT3cmigNfDiPBFG4v89Ixsrz9a"/>

<WorkImage src="https://drive.google.com/uc?id=1CotbdpQSfronDM4t2ANQgLSUzU8181xt"/>

<WorkImage src="https://drive.google.com/uc?id=1ohGBXojfk-7R6w_rDavKTlCrsEfoKBLo"/>

    </Container>
  </Layout>
)
export default Work
export { getServerSideProps } from '../../components/chakra'