// NotableSkills.js
import React from 'react';
import { Heading, Box, UnorderedList, ListItem, Flex, Progress } from '@chakra-ui/react';

const NotableSkills = () => {
  const skills = [
    { skill: 'Greek', proficiency: 100},
    { skill: 'English', proficiency: 100 },
    { skill: 'Serbian', proficiency: 100},
    { skill: 'AutoCAD 2023', proficiency: 100 },
    { skill: 'Photoshop 2023', proficiency: 100},
    { skill: 'Sketchup 2021 Pro', proficiency: 100 },
    { skill: 'Lumion 12.5', proficiency: 100 },
    { skill: 'Illustrator 2023', proficiency: 60 },
    { skill: 'ArchiCAD 26', proficiency: 50 },
    { skill: 'Rhino 7', proficiency: 40 },
    { skill: 'Blender', proficiency: 50 },
    { skill: 'Web Development', proficiency: 40 },

  ];

  return (
    <div>
      <Heading as="h3" variant="section-title">
        Notable Skills..
      </Heading>
      <Box mb={4}>
        <UnorderedList>
          {skills.map((item, index) => (
            <ListItem key={index} mb={2}>
              <Flex justify="space-between">
                {item.skill}
                <Box>{item.proficiency}%</Box>
              </Flex>
              <Progress value={item.proficiency} size="sm" colorScheme="gray" />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
};

export default NotableSkills;
