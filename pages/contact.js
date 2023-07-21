import { Container, List, ListItem, Link, Button, Heading, Box } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import EmailForm from '../components/EmailForm';
import Section from '../components/section';
import { IoIosAt, IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLogoFacebook, IoLogoAmazon, IoLogoYahoo, IoLogoNpm, IoLogoChrome } from 'react-icons/io5';
import ReCAPTCHA from 'react-google-recaptcha';
const Contact = () => (
  <Layout title="Contact">

  <Container>
    <Box mt={15}>
      <Heading as="h3" variant="section-title">
        Contact Me!
      </Heading>
      <EmailForm />
    </Box>
   
    <Box mt={7}>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web:
        </Heading>
        <List>
          <ListItem>
            <Link href='https://www.gmail.com/' target= "_blank">
              <Button
               variant='ghost'
               colorScheme="teal"
               leftIcon={<IoLogoChrome/>}
               >
                Harris.k1452@gmail.com
               </Button>

            </Link>
          </ListItem>
        </List>
        <List>
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
      </Box>
    </Container>
  </Layout>
);

export default Contact;
export { getServerSideProps } from '../components/chakra';
