import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  Button
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import { IoLogoFacebook } from 'react-icons/io5'

const Work = () => (
  <Layout title="Residential Building @ Limnos">
    <Container>
      <Title>
      Architectural Study/ Freelance 3D Presentation in Limnos <Badge>2023-</Badge>
      </Title>
      <Box mb={4}>
      <Paragraph>Throughout the architectural study of the project, I closely collaborated with the office.</Paragraph>
      </Box>

      <Box mb={4}>
      <Paragraph>They provided me with the AutoCAD files, which served as the basis for creating the 3D representation of the structure.</Paragraph>
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

<WorkImage src="https://drive.google.com/uc?id=1xVKgjAlKJCI6LdoC-Qi5IhOE-B6q2eRJ"/>


<WorkImage src="https://drive.google.com/uc?id=1Inp5A07DQBu_czGFA6HH5VHlkQn-Ca_6"/>


<WorkImage src="https://drive.google.com/uc?id=1gsUzKhWJ-2aMMKGsJ4Y8FcYclU1rbSvu"/>


<WorkImage src="https://drive.google.com/uc?id=19NHUSU1zV1rRqnu9zsQBJPK1lcnl0zzm"/>


<WorkImage src="https://drive.google.com/uc?id=1cA7mCMZwEdgicfy8Hs9b7qYPyhdERwcI"/>


<WorkImage src="https://drive.google.com/uc?id=1LtTuOX0n99KF6NhFCRUJ8BuCZ5d4Yhia"/>


<WorkImage src="https://drive.google.com/uc?id=1l5IjEtk0NcKabI68xdzeP8X9YbHAmhsG"/>

 
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'