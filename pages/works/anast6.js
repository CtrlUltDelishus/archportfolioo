import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  Heading,
  Button,
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

<WorkImage src="https://drive.google.com/uc?id=1N2vnczpyX5unYhWr8Yddy-iAYujkQLcY"/>

<WorkImage src="https://drive.google.com/uc?id=17CJYbhO7wdsUTdwACOj_20XaWsx4urZZ"/>

<WorkImage src="https://drive.google.com/uc?id=1f1Yqa5EcZjxAYLrGn2YGbBs8a4SAljTs"/>

<WorkImage src="https://drive.google.com/uc?id=1eifM3xZjEwaW2f6U_11_FOO__aWx0D3m"/>

<WorkImage src="https://drive.google.com/uc?id=1EOxOzMrAAzTlzHkaofSBtmevglfzOCi4"/>

<WorkImage src="https://drive.google.com/uc?id=1cZlOArrdASFv1v84tS9YCgY54O1AZ9O9"/>

      <Box mb={4}>
    <Heading as="h2" fontWeight="bold" fontSize="lg" mt={4} mb={2}>
     <h2>Structure #1 & #2:</h2> 
    </Heading>
    </Box>

<WorkImage src="https://drive.google.com/uc?id=1mwt5AnNGlN3SFAVubMKhB8_0O3d1cXRb"/>

<WorkImage src="https://drive.google.com/uc?id=1CmWZKHhyOr9AO2gj7gBTRirsATN627rH"/>

<WorkImage src="https://drive.google.com/uc?id=1V8vyjoO6emJQvkhDQFh37o1yEQBj_MdX"/>

<WorkImage src="https://drive.google.com/uc?id=1K2hF9FcRlZEjQroEYVJTR0vdW_dP_lBa"/>

<WorkImage src="https://drive.google.com/uc?id=11woHeBPUhjDYQD1i6k4TicvfGD3EAzLH"/>

<WorkImage src="https://drive.google.com/uc?id=1Yoh3gudbJfIm8GubFXd_K9SHsTQQthZj"/>

<WorkImage src="https://drive.google.com/uc?id=1SxZzDyssLoavFtEUeoTqMPJcH3SK3xks"/>

<Box mb={4}>
    <Heading as="h2" fontWeight="bold" fontSize="lg" mt={4} mb={2}>
     <h2>Structure #3:</h2> 
    </Heading>
    </Box>

<WorkImage src="https://drive.google.com/uc?id=1Mxwua2TKJ3xLJNcKaf_x2HylRjGOFP8o"/>

<WorkImage src="https://drive.google.com/uc?id=1v1MXg-FfINZng2hw_Hld-pza6F13UDDZ"/>

<WorkImage src="https://drive.google.com/uc?id=1-qrYdZJGwClpy3oFxaGvB9Av5LycAzuk"/>

<WorkImage src="https://drive.google.com/uc?id=1BCNZll4m-qjVSiROwXedCkmzN-13eqzE"/>

<WorkImage src="https://drive.google.com/uc?id=17Fa44o7pqSuNZJ4BLzXbia98IJUchbaZ"/>

<WorkImage src="https://drive.google.com/uc?id=1IK2jBIZ99ETH-MZr39BWcLWXPebmpoO9"/>

<WorkImage src="https://drive.google.com/uc?id=1RhFn7_sH-OYdyEsCzMEnMq74wX42JCKL"/>

    </Container>
  </Layout>
)
export default Work
export { getServerSideProps } from '../../components/chakra'