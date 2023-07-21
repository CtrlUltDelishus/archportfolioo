import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Box,
  Button,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons';


const SchoolPdf = () => {
  const downloadPdf = () => {
    const fileId = '1QeZiBC4L_ARf1anW9VCPRhyLwCHCnwII'; // Replace with the file ID of your PDF file
    const pdfUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;

    window.open(pdfUrl, '_blank');
  };

  return (
    <Button onClick={downloadPdf} rightIcon={<ChevronRightIcon />} colorScheme="teal">
      Download Complete PDF (Google Drive Link)
    </Button>
  );
};

const Work = () => (
  <Layout title="Primary School in Xanthi">
    <Container>
      <Title>
        Primary School in Xanthi <Badge>2022-</Badge>
      </Title>
      <Box mb={4}>
  <P>
    This is an "Open'' Primary School located in Xanthi, its land is located next to the river Kosynthos and the school is designed 'around' it as each building has its own view of it.
  </P>
</Box>
<Box mb={4}>
  <P>
    The main building consists of 6 Classes, 1st Grade, 2nd, 3rd, 4th, 5th, and 6th, Special Classes as in, English Class and Computers Class, a School Library, and Teachers/Principals Office.
  </P>
</Box>
<Box mb={4}>
  <P>
    Under them, there's an open restaurant which can be used by the neighborhood and hold events for parents, etc.
  </P>
</Box>
<Box mb={4}>
  <P>
    The School also has a Multiple Use Building, 2 ''Special'' Classes (Arts and Environments Class), and a shelter for Gymnastics. An interesting quality of the school is the small 'Tower' which can be used as a 'shortcut' from the classes to the main school yard.
  </P>
</Box>
<Box mb={4}>
  <P>
    This project was under our Professor, Theoni Xanthi.
  </P>
</Box>

<List ml={4} my={4}>
        <ListItem>
          <Meta>Collaborated With</Meta>
          <Link href="">
          Παπακυπαρίσση Ε. , Ταμπούρης Σ.
          </Link>
        </ListItem>
      </List>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Programs Used</Meta>
          <Link href="">
            AutoCAD 2022, Sketchup 2019, Lumion 11, Photoshop 2019
          </Link>
        </ListItem>
      </List>
      
      <Box align="center" my={4}>
        <SchoolPdf/>
      </Box>

<WorkImage src="https://drive.google.com/uc?id=15URI-fZVHTEcyr9wAzTi2uyOrvLwmDqF" />
<WorkImage src="https://drive.google.com/uc?id=191FENZEfBl2iz43u7CHnLV7J8OjhpfM_" />
<WorkImage src="https://drive.google.com/uc?id=16Mu6vBXVrfMcDp403lCKvwSmlyKzOidP" />

<SimpleGrid columns={[1, 2, 2]} gap={6}>
<WorkImage src="https://drive.google.com/uc?id=1iS67CiGW5C4YDOj6iSxUja0zNfnYTZom" />
<WorkImage src="https://drive.google.com/uc?id=1rVeNBEc6WGWaqhuodGA8AS8yddKf9gaN" />
<WorkImage src="https://drive.google.com/uc?id=1ahCa-YUeAyxV5IhfDVKHI1fHp5srNde7" />
<WorkImage src="https://drive.google.com/uc?id=11VxI73ASbrJfUYs7V-h5CmHrUg_1guXY" />
</SimpleGrid>

<WorkImage src="https://drive.google.com/uc?id=1455s3plxKJVuv76V36xc3ZAMhbJ0MDRM" />
<WorkImage src="https://drive.google.com/uc?id=1MAx589sA1Uc0cXaS8rLHBCveZ0xpBiVQ" />


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
