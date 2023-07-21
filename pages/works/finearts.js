import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Button,
  Flex,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Stack, HStack, VStack } from '@chakra-ui/react'


const ArtPDF = () => {
  const downloadPdf = () => {
    const fileId = '1Z9It3GnTVKY9AkeMaiM_vmyZRFGp7xcW'; // Replace with the file ID of your PDF file
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
  <Layout title="Fine Arts / Museum in the Centre of Xanthi">
    <Container>
      <Title>
      Fine Arts / Museum in the Centre of Xanthi <Badge>2022-</Badge>
      </Title>
      <Box mb={4}>
  <P>The building is a four-level structure with entrances from the park, the street, and an elevated park. The basement level (-4) contains parking areas and storage spaces. The ground floor level (-1) serves as the main entrance, while the +3 level entrance provides a view of two adjacent buildings: the workshop building on the left and the art and museum building on the right.</P>
  </Box>

  <Box mb={4}>
    <Heading as="h2" fontWeight="bold" fontSize="lg" mt={4} mb={2}>
     <h2>ART BUILDING:</h2> 
    </Heading>
  </Box>

<Box mb={4}>
  <P>The ground floor features a curved wall reception area, creating an inviting entrance experience, seminar rooms for business meetings, and a small shop.</P>
  </Box>

<Box mb={4}>
  <P>After obtaining tickets, visitors can choose between an outdoor exhibition area or take the elevator or stairs down to the -1 level. The outdoor exhibition area showcases sculptures, installations, or other artworks in an open-air setting. Alternatively, descending to the -1 level continues the exhibition experience, with additional galleries and exhibition spaces. A spacious foyer area on the -1 level provides a gathering space for visitors.</P>
  </Box>

<Box mb={4}>
  <P>After visiting the exhibition on the -1 level, visitors have the option to take the elevator or stairs up to the +7 level. As they ascend, they are greeted with a beautiful view of the park, adding to the overall experience.</P>
  </Box>

<Box mb={4}>
  <P>Upon reaching the +7 level, visitors have two options. They can choose to go to the library, which offers a space for quiet study, research, and exploration of various literary materials. The library may feature bookshelves, reading areas, and study tables, creating a serene environment for intellectual engagement.</P>
  </Box>

<Box mb={4}>
  <P>Alternatively, visitors can head to the café, which is designed with a nice outdoor area that provides a panoramic view of the entire project. The café offers a place for relaxation, socialization, and refreshments. The outdoor area may include seating arrangements, tables, and possibly even a terrace or rooftop garden, allowing visitors to enjoy the surrounding scenery while indulging in food and beverages.</P>
</Box>

<Box mb={4}>
  <P>Overall, the +7 level offers a library for study and research, a cafe with an outdoor area providing a panoramic view of the project, an administration office with the boss's office, meeting rooms, and toilet facilities.</P>
</Box>

<Box mb={4}>
  <P>On the -1 level of the museum part of the project, visitors can relax and socialize at the -1 Cafe while enjoying refreshments. Adjacent to the cafe, there is a dedicated cinema space for film screenings. The -1 level offers a diverse range of experiences, allowing visitors to engage with visual art exhibitions, socialize at the cafe, and enjoy film screenings at the cinema.</P>
  </Box>

  <Box mb={4}>
    <Heading as="h2" fontWeight="bold" fontSize="lg" mt={4} mb={2}>
     <h2>WORKSHOP BUILDING:</h2> 
    </Heading>
  </Box>

<Box mb={4}>
  <P>Starting from the +3 entrance, the workshop building offers a variety of specialized workshops, including the art workshop, book binding workshop, graphic design workshop, and ceramic workshop. Each workshop is equipped with dedicated workstations and tools tailored to the specific craft.</P>
  </Box>

<Box mb={4}>
  <P>Adjacent to the workshops, there are toilet facilities for convenience. At the end of the outdoor hall, there is a kids' entertainment room, providing a designated space for children to engage in creative activities and play.</P>
  </Box>

<Box mb={4}>
  <P>Stairs in the workshop building lead to the 1.5 entrance, connecting to the elevated park and providing access to the -1 level where the workshops continue.</P>
</Box>

<Box mb={4}>
  <P>On the -1 level of the workshop building, you can find specialized spaces such as the photography workshop, theater workshop, computers workshop, jewelry workshop, and music workshop. Each space is tailored to specific artistic disciplines and provides an environment conducive to artistic exploration and skill development.</P>
  </Box>

<Box mb={4}>
  <P>In addition, there is a restaurant located next to the photography workshop. The restaurant offers a dining experience for visitors and occupants of the workshop building, providing a menu of delicious food and beverages. It creates an opportunity for visitors to appreciate art while enjoying a culinary experience.</P>
</Box>

<Box mb={4}>
  <P>At the heart of the project is a well-designed central plaza, acting as a vibrant and inviting gathering point. This open space features trees, greenery, and seating areas for visitors to relax, socialize, and admire the surrounding architecture. The plaza serves as a hub, connecting different parts of the project, including the buildings, workshops, exhibition areas, cafe, library, and other amenities. With benches and walkways, it offers comfortable spaces for visitors to enjoy the outdoors and fosters a harmonious connection between nature, art, and architecture, enriching the overall project experience.</P>
  </Box>

<Box mb={4}>
  <P>Overall, the project encompasses a wide range of artistic, cultural, and creative spaces, including exhibition areas, workshops, seminar rooms, reception areas, shops, cafes, a library, administration offices, a restaurant, a print house, and a central plaza. The design aims to create connectivity, functionality, and aesthetic appeal, providing visitors with an immersive and enjoyable experience.</P>
  </Box>


  <List ml={4} my={4}>
        <ListItem>
          <Meta>Collaborated With</Meta>
          <Link href="">
          Παπακυπαρίσση Ε. , Ταμπούρης Σ. , Γιανναράκη Ε.
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
      
      <Box align="center" my={4}>
        <ArtPDF />
      </Box>
      
      <WorkImage/>
     <HStack> 
     <Flex direction='column' gap={0}>

<WorkImage src="https://drive.google.com/uc?id=1DAcIYU3WjKylvYxfCzFVq3TWRrgs5hk3" />
<WorkImage src="https://drive.google.com/uc?id=1sOKoa4oHmjI3Cj9xmIHANzt42RzUwbLY" />
<WorkImage src="https://drive.google.com/uc?id=12iQo1fjt62bb0dX3EsvxlITQud8IYetW" />
<WorkImage src="https://drive.google.com/uc?id=1et6hy_et1I2dI42pXR0Xxjt1sKS18WTG" />
<WorkImage src="https://drive.google.com/uc?id=1XRQu0XelKk07_WEhHxuZZ1oJhKsYAQKe" />
<WorkImage src="https://drive.google.com/uc?id=1Ey1Qc_8gb8Rrg1w_J7Uu--xUcdjFzlVi" />
<WorkImage src="https://drive.google.com/uc?id=1-Ek9iKXNpfW1HLtvI_W_zXxpYY-nXD4c" />
<WorkImage src="https://drive.google.com/uc?id=11UzhheroSnY6d2Q9jmQ7jZBxDQRZjcci" />
<WorkImage src="https://drive.google.com/uc?id=1i3IGEPpyaLw4FMqWSsAZVA2XUNEg4evB" />
<WorkImage src="https://drive.google.com/uc?id=1D2Wn5QFinwwYMnnsIJSsOgcYmpC9QkkV" />
<WorkImage src="https://drive.google.com/uc?id=1UjqTIYHQco4Qar_JF8DiTvI4agbfMsty" />

</Flex>
     </HStack>  


     <SimpleGrid columns={[1, 2, 2]} gap={6}>

<WorkImage src="https://drive.google.com/uc?id=1HQnuKXqYZ78XepDr3M552Qy746Q-j3ix" />
<WorkImage src="https://drive.google.com/uc?id=1-7YBVcvyk3MfGfYiy9_uDtHnDebmvttM" />
<WorkImage src="https://drive.google.com/uc?id=19yY_XWQE62_sBzC839b86oixyGxFd5ef" />
<WorkImage src="https://drive.google.com/uc?id=1lcNV1QIu9KHW-OeaY6zMIhipGmu4w5EE" />
<WorkImage src="https://drive.google.com/uc?id=1unzAwc3bw1yLpgCZ9KSaKqq4so-MoiWD" />
<WorkImage src="https://drive.google.com/uc?id=1aFkStDrIjNPXpHUv-ByU2xQJ_AoqDzNU" />
<WorkImage src="https://drive.google.com/uc?id=14_L42sW6MqPEaSyylGtTHaPoPFE7kLwj" />
<WorkImage src="https://drive.google.com/uc?id=12o3mQlf4YkDKGh4e9CjXMiyOnWynG-Z6" />
<WorkImage src="https://drive.google.com/uc?id=1yYkSoruNWBHvSVj4IW_QOxUcgKcShPQ7" />
<WorkImage src="https://drive.google.com/uc?id=1CG8mZdjKTpGinP33yMsSemxsCRyaxpG4" />
<WorkImage src="https://drive.google.com/uc?id=1-3EenbzkKKFgiHO3zK5m5AB-C-ViwE74" />
<WorkImage src="https://drive.google.com/uc?id=1xaMPRdUPUXX_cJRsTec_C1DZckmvbDHK" />
<WorkImage src="https://drive.google.com/uc?id=1X3ggNpeS1dddWzBxRN7JuGE2jxgtNYMk" />
<WorkImage src="https://drive.google.com/uc?id=1Tvg6ffUq_tWg1P325DW1VuBPQCBNs7bS" />
<WorkImage src="https://drive.google.com/uc?id=1B8eyL0UXQCAFrJtYEKr79cTVvPyDKRMC" />
<WorkImage src="https://drive.google.com/uc?id=1ytaT4RbmjYMTC8Ov_auVNZgDWwwWpKFp" />
<WorkImage src="https://drive.google.com/uc?id=1EHvsdw_qRChRs0O05Td-xwoo9W5IJE4j" />
<WorkImage src="https://drive.google.com/uc?id=1-zEPRWJjeIYvxIc6Es0BxDxcC1PIfRYJ" />
<WorkImage src="https://drive.google.com/uc?id=1Xtg8MhUpThgInvxZPoyhamtdiNm8omDg" />
<WorkImage src="https://drive.google.com/uc?id=1ebx6E9M_WERjdW3YlpjS_yAbJEPFbDoU" />
<WorkImage src="https://drive.google.com/uc?id=193pVDyIvybKKUwZ_AF1OlMda1cTyg4D5" />
<WorkImage src="https://drive.google.com/uc?id=1h-q8fdlOMiN8LIuOiry8Rg64JMHCPt24" />
<WorkImage src="https://drive.google.com/uc?id=1l_MISM5zkqhQZ9Djp-5U0ywwG5VDB5z5" />
<WorkImage src="https://drive.google.com/uc?id=1PYrK1qUj_mpfW39nRjkIYWEMrIfTae2a" />
<WorkImage src="https://drive.google.com/uc?id=1rMNVls9IwhCA3bixtopOyfOnD609lNX5" />
<WorkImage src="https://drive.google.com/uc?id=1ECZC5BbXT0CrglDRLcWwk021UYUwoNkG" />
<WorkImage src="https://drive.google.com/uc?id=1UDEr0v7oINYeELi9ngEeb2-rresaYsPs" />
<WorkImage src="https://drive.google.com/uc?id=1MvxmCi2s4ChWJIXm2KQarJlJ9IJ-NEGw" />
<WorkImage src="https://drive.google.com/uc?id=13UjGLHFkjlUr9Yn7zMA5hNalPG-CdQI0" />
<WorkImage src="https://drive.google.com/uc?id=1rr9DFmXhUrpOS6FXHZygtrp7f9RGmU4c" />
<WorkImage src="https://drive.google.com/uc?id=1aVNC_4P18qO9arZ7DyCqGmMow_CcYZ4s" />
<WorkImage src="https://drive.google.com/uc?id=1KF5e8kUcbe1QO9TpGV--Ds31ChxhSr_G" />
<WorkImage src="https://drive.google.com/uc?id=1Fwm9v0U2SqmeQfoHKOJLMu3pfDSeRlo8" />
<WorkImage src="https://drive.google.com/uc?id=11nAZpgNFjPiqfgQ2xw-k4O5aO9UOJVoH" />


    </SimpleGrid>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
