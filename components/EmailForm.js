import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Textarea, Input } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send('service_69', 'template_69', { name: name, message: message, from_name: name }, 'fVuz1FmuTVJkyV-OB');
      setName('');
      setMessage('');
      setSuccessMessage('Email sent successfully!');
      setErrorMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      setSuccessMessage('');
      setErrorMessage('Error sending email. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="name" mb={4}>
        <FormLabel>Name</FormLabel>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          isResizable={false}
          required
        />
      </FormControl>

      <FormControl id="message" mb={4}>
        <FormLabel>Message</FormLabel>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </FormControl>

      <Button type="submit" colorScheme="teal">
        Send Email
      </Button>

      {successMessage && <Box color="green">{successMessage}</Box>}
      {errorMessage && <Box color="red">{errorMessage}</Box>}
    </form>
  );
};

export default EmailForm;
