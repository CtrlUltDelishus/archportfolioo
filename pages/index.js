import Image from 'next/image';
import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { IoLogoChrome, IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io5';
import NotableSkills from '../components/NotableSkills';
import { Flex } from '@chakra-ui/react';



const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const Home = () => {
  
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}

        >
       Hello, I&apos;m Harris, an architecture student based in Greece & Cyprus!

        </Box>


        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
            Harris Kountouresis
            </Heading>
            <p>Architecture Undergraduate</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="150px"
              h="150px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/takuya.jpg"
                alt="Profile image"
                borderRadius="full"
                width="150"
                height="150"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>

          <Box mb={4}>
            <Paragraph>
            I am an architecture student with extensive knowledge in various design programs, including AutoCAD, Sketchup, Lumion, Photoshop, and ArchiCAD. With a diploma in AutoCAD, I have honed my technical skills to produce accurate and precise drawings.
            </Paragraph>
          </Box>

          <Box mb={4}>
            <Paragraph>
              I am passionate about creating innovative and sustainable designs that enhance the built environment. I have experience working on a range of projects, from residential to commercial (university projects), as well as freelance works, and I am always eager to take on new challenges.
            </Paragraph>
          </Box>

          <Box mb={4}>
            <Paragraph>
              Thanks to my expertise in design programs, I am able to bring my ideas to life with 3D visualizations that capture the essence of my designs. I believe that good design should not only be functional but also aesthetically pleasing, and I always strive to achieve both in every project I work on.
            </Paragraph>
          </Box>
          
<Flex justify="space-between" spacing={4}>
  <Box align="left" my={4} id="confetti-container" flexGrow={1}>
    <Button
      as={NextLink}
      href="/works"
      scroll={false}
      rightIcon={<ChevronRightIcon />}
      colorScheme="teal"
      width="65%"
    >
      My Works
    </Button>
  </Box>

  <Box align="right" my={4} id="confetti-container" flexGrow={1}>
    <Button
      as={NextLink}
      href="/404"
      scroll={false}
      rightIcon={<ChevronRightIcon />}
      colorScheme="teal"
      width="70%"
    >
      My CV
    </Button>
  </Box>
</Flex>



          <section>
            <NotableSkills/>
          </section>

        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Limassol, Cyprus.
          </BioSection>

          <BioSection>
            <BioYear>2016</BioYear>
            Started a summer job in the renowned CrownePlaza Hotel in Limassol, Cyprus.
          </BioSection>

          <BioSection>
            <BioYear>2018</BioYear>
            Started working in RIO Cinema Limassol, Cyprus.
          </BioSection>

          <BioSection>
            <BioYear>2018</BioYear>
            Received High School Diploma (Architecture Focused) with an average grade.
          </BioSection>

          <BioSection>
            <BioYear>2018</BioYear>
            Have gone through a mandatory 14-month army service in the National Cypriot Army.
          </BioSection>

          <BioSection>
            <BioYear>2019</BioYear>
            Started studying in the Architecture Department of DuTh/ (Undergraduate+Master Integrated Diploma).
          </BioSection>

          <BioSection>
            <BioYear>2022 to present</BioYear>
            Doing Freelance Architectural Study and 3D Visualization for an office in Greece, Limnos, namely, P&V PANTELAROUDIS CH. & VASILEIOU AN.
          </BioSection>

          <BioSection>
            <BioYear>2023 to present</BioYear>
            Studying as a 5th-year student in the Architecture Department of DuTh/
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            I find inspiration in various forms of creativity. Sketching and painting ignite my imagination, fostering creativity and attention to detail. 
          </Paragraph>
          <Paragraph>
          Video games are my realm for strategic thinking, problem-solving, and boundless creativity. Through photography, I capture stories and moments from a distinct perspective, sharing narratives that words sometimes can&apos;t convey.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href='https://www.gmail.com/' target="_blank">
                <Button
                  variant='ghost'
                  colorScheme="teal"
                  leftIcon={<IoLogoChrome />}
                >
                  Harris.k1452@gmail.com
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.linkedin.com/in/harris-k-1077a1227/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @HarrisK
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.facebook.com/profile.php?id=100015222047789" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoFacebook />}
                >
                  @Haralambos Stefan
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/harris_hadj/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @harris.hadj
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
