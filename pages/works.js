
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { Container, Flex, Heading, SimpleGrid, Divider, Box, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { HStack } from '@chakra-ui/react'

import Th_Kiosk from '/public/images/projects/kiosk/kioskthumb.png'
import Th_School from '/public/images/projects/school/Th_School.png'
import Th_Arts from '/public/images/projects/arts/Th_Arts.jpg'
import Th_Work1 from '/public/images/projects/restoration1/Th_Work1.png'
import Th_Work2 from '/public/images/projects/restoration2/Th_Work2.png'
import Th_Work_3 from '/public/images/projects/restoration3/Th_Work_3.png'
import thu_comp from '/public/images/projects/comp1/thu_comp.jpg'


const downloadPdf = () => {
  const pdfUrl = '/pdfs/HK.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'HK.pdf';
  link.target = '_blank';
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Works = () => (
  <Layout title="Works">
    <Container>
    <Section>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            onClick={downloadPdf}
            >
            Complete Portfolio in PDF Format **in progress**
          </Button>
        </Box>
      </Section>
      <Heading as="h3" fontSize={20} mb={4}>
        DuTh/ University Projects
      </Heading>


    <HStack>
      <Flex direction='column' gap={0}>  {/* LEFT COLUMN */}

      <Section>
          <WorkGridItem 
          id="kiosk" 
          title="Kiosk/Mall in the Centre Of Xanthi" 
          thumbnail={Th_Kiosk}>
          2022, 3rd Year Project, 5th Semester, DuTh/
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="finearts"
            title="Fine Arts / Museum in the Centre of Xanthi"
            thumbnail={Th_Arts}>
            2023, 4th Year Project, 8th Semester DuTh/
          </WorkGridItem>
        </Section>
        
      </Flex> {/* RIGHT COLUMN */}
      <Flex direction='column' gap={6} justify='flex-start'>

        <Section>
          <WorkGridItem
            id="school"
            title="Primary School in Xanthi"
            thumbnail={Th_School}
            alt="School Thumbnail"
            className="thumbnail-school">

            2022, 3rd Year Project, 6th Semester DuTh/l
          </WorkGridItem>
        </Section>
        

      </Flex>
    </HStack>  

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Solo/ Freelance Works
        </Heading>

      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem 
          id="rest1" 
          thumbnail={Th_Work1} 
          title="Restoration and Architectural Study Work in Limnos Island">
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="rest2"
            thumbnail={Th_Work2}
            title="Restoration and Architectural Study Work in Limnos Island 2">
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="rest3" 
          thumbnail={Th_Work_3} 
          title="Restoration and Architectural Study Work in Limnos Island 3">
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Competitions/ Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="comp1" 
          thumbnail={thu_comp} 
          title="Monument Installation in Athens /Competition">
          Monument installation on the theme of the 1974 invasion in Cyprus.
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

