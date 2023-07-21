import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Box,
  Button
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';

const KioskPdf = () => {
  const downloadPdf = () => {
    const fileId = '1h_cXrfkBsuTFPIqgOlowE4S_9WzAPtIA'; // Replace with the file ID of your PDF file
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
  <Layout title="Kiosk/Mall in the Centre of Xanthi">
    <Container>
      <Title>
        Kiosk/Mall in the Centre of Xanthi <Badge>2021-22</Badge>
      </Title>
      <Box mb={4}>
  <P>
    This is a small 'Kiosk' - Mall. It's located in the center of Xanthi, next to the Bazaar of Xanthi specifically.
  </P>
</Box>
<Box mb={4}>
  <P>
    Our idea was to 'bring' the Local Bazaar inside our Mall, where people will be able to set up their stands and shops.
    The northern part of the building consists of the Citizen Service Center, and right next to it, an Info center, in which you can learn different aspects of culture, architecture, and history of Xanthi, as well as a stage for events next to it.
  </P>
</Box>
<Box mb={4}>
  <P>
    Continuing the path will lead us to the sloped roof building. Its primary use is for the locals to set up their stands and shops and to be covered. Right in front of it, there are 6 more shop/stands as well.
  </P>
</Box>
<Box mb={4}>
  <P>
    Another interesting quality is the fact that we used our sloped roof to make seats for an outdoor cinema, which can be accessed through the stairs inside the building. We placed a bridge to connect the two buildings so we can make a Cinema Canteen and the Ticket Counter, as well as the toilets for it.
    Next to the sloped roof building, we placed a Coffee shop & Restaurant (Up and Below) where people can sit, eat, and enjoy the view. Behind the restaurant, we placed the public toilets, which also include Muslim Baths.
  </P>
</Box>
<Box mb={4}>
  <P>
    Going back to the main northern building, if people choose to stay the night, we also included some Hostel / BnB type rooms, which they can book at the reception of our info kiosk.
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
            AutoCAD 2023, Sketchup 2021, Lumion 12, Photoshop 2022
          </Link>
        </ListItem>
        <ListItem>
        </ListItem>
        <ListItem>
        </ListItem>
        <ListItem>
        </ListItem>
      </List>
            <Box align="center" my={4}>
        <KioskPdf />
      </Box>
      <WorkImage src="https://drive.google.com/uc?id=15AtvsFHS9htX5Leu4pr0rff85HTb_3br" />
      <WorkImage src="https://drive.google.com/uc?id=1tqxBeMftbyQ4H6uktrYXpqxUmzq8QxEi" />
      <WorkImage src="https://drive.google.com/uc?id=14mGB0nJzknGn9Pyk2vjqmzFMKQJCN7ma" />
      <WorkImage src="https://drive.google.com/uc?id=1EBBy4M4MpQpacSHzMhCiuCM_0aAmp_6l" />
      <WorkImage src="https://drive.google.com/uc?id=18fooAaqFNrkOdzsyRaU3tNFzmPwWflWt" />

    </Container>
  </Layout>

);


export default Work;
export { getServerSideProps } from '../../components/chakra';
