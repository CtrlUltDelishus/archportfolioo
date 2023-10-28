import React from 'react';
import Logo from './logo';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';
import { useTranslation } from 'next-i18next';
import 'flag-icons/css/flag-icons.min.css';
import { Icon } from '@iconify/react';
import ukFlag from '@iconify/icons-flag/gb-4x3';
import grFlag from '@iconify/icons-emojione-v1/flag-for-greece';



const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const MenuLink = React.forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

const Navbar = (props) => {
  const { path } = props;
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <Stack direction="row" alignItems="center">
            <LinkItem href="/contact" path={path}>
              Contact
            </LinkItem>
            <Button
              onClick={() => changeLanguage('en')}
              variant="link"
              color={i18n.language === 'en' ? 'primary.500' : undefined}
            >
              <Icon icon={ukFlag} width="1.5em" height="1.5em" />
            </Button>
            <Button
              onClick={() => changeLanguage('gr')}
              variant="link"
              color={i18n.language === 'gr' ? 'primary.500' : undefined}
            >
              <Icon icon={grFlag} width="1.8em" height="1.8em" />
            </Button>
          </Stack>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  HarrisK.
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} href="/posts">
                  Posts
                </MenuItem>
                <MenuItem as={MenuLink} href="/contact">
                  Contact
                </MenuItem>

                <MenuItem as={MenuLink} href="">
                
                <Button
              onClick={() => changeLanguage('en')}
              variant="link"
              color={i18n.language === 'en' ? 'primary.500' : undefined}
            >
              <Icon icon={ukFlag} width="1.5em" height="1.5em" />
            </Button>

                </MenuItem>

                <MenuItem href="">

                <Button
              onClick={() => changeLanguage('gr')}
              variant="link"
              color={i18n.language === 'gr' ? 'primary.500' : undefined}
            >
              <Icon icon={grFlag} width="1.8em" height="1.8em" />
            </Button>

               </MenuItem>

              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
