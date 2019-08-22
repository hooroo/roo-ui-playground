import React, { Fragment } from 'react';
import { qantasHotels } from 'roo-ui/logos';
import {
  Container,
  Box,
  Heading,
  Paragraph,
  Button,
  Image,
} from 'roo-ui/components';

const App = () => (
  <Fragment>
    <Box bg="greys.porcelain" textAlign="center">
      <Container py={12}>
        <Image src={qantasHotels} inline mb={6} />
        <Heading.h1>Hello, Roo UI!</Heading.h1>
      </Container>
    </Box>

    <Box textAlign="center">
      <Container py={12}>
        <Paragraph fontSize="lg" mb={6}>
          Edit <code>src/App.js</code> and save to reload.
        </Paragraph>

        <Button
          as="a"
          href="https://github.com/hooroo/roo-ui/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Roo UI on Github
        </Button>
      </Container>
    </Box>
  </Fragment>
);

export default App;
