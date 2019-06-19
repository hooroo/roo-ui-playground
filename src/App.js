import React, { Fragment } from 'react';
import { qantasHotels } from '@roo-ui/logos';
import { DateTime, Interval } from 'luxon';
import { Decimal } from 'decimal.js';
import _ from 'lodash';
import {
  Container,
  Box,
  Heading,
  Paragraph,
  Button,
  Flex,
  Text,
  Image,
  Card
} from '@roo-ui/components';

import styled from 'styled-components';

const SmallOnlyBox = styled(Box)`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`
const SmallOnlyText = styled(Text)`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`

const CalendarSpacer = styled(Box)`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

const LargeOnlyFlex = styled(Flex)`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`
const PastDay = ({date, cardHeight}) => {
  const dayNumber = date.toLocaleString({ day: 'numeric' });
  return (
  <LargeOnlyFlex flexDirection="column" alignItems="center" p={1} width={1/7}>
    <Card bg="grey.2" width={1} height={cardHeight} pl={4} pt={2} pb={2}>
      <Flex flexDirection="row" justifyContent="flex-start" pb={2} flexWrap="wrap">
        <Text textAlign="left" fontWeight="bold" mr={1}>{dayNumber}</Text>
      </Flex>
    </Card>
  </LargeOnlyFlex>);
};

const CalendarHeader = ({date}) => {
  return(
    <Flex flexDirection="column" mt={4} p={1} width={1}>
      <Text fontSize="large" fontWeight="bold">{date.toLocaleString({month: 'long', year: 'numeric'})}</Text>
      <LargeOnlyFlex flexDirection="row" justifyContent="space-around" mt={4} p={1} width={1}>
        <Text>Sun</Text>
        <Text>Mon</Text>
        <Text>Tue</Text>
        <Text>Wed</Text>
        <Text>Thur</Text>
        <Text>Fri</Text>
        <Text>Sat</Text>
      </LargeOnlyFlex>
    </Flex>
  );
};



const DayTile = ({date, rate, nights, cardHeight}) => {
  const dayNumber = date.toLocaleString({ day: 'numeric' });
  const dayMonth = date.toLocaleString({ month: 'long' });
  const day = date.toLocaleString({weekday: 'long' });
  const checkoutDayString = date.plus({days: nights}).toLocaleString({ month: 'short', day: 'numeric' });
  const formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  });
  const price = formatter.format(rate);

  return(
    <Flex flexDirection="column" alignItems="center" p={1} width={[1, 1, 1, 1/7]}>
      <Card width={1} height={cardHeight} pl={4} pt={2} pb={2}>
        <Flex flexDirection="row" justifyContent="flex-start" pb={1} flexWrap="wrap">
          <Flex width={1/2} justifyContent="flex-start" pb={1}>
            <Text textAlign="left" fontWeight="bold" mr={1}>{dayNumber}</Text>
            <SmallOnlyText textAlign="left" fontWeight="bold">{dayMonth}</SmallOnlyText>
          </Flex>
          <SmallOnlyBox width={1/2} textAlign="right" pb={1}>
            <Text fontWeight="bold">{day}</Text>
          </SmallOnlyBox>
          <Flex flexDirection="column" width={1/2} alignItems={["flex-start", "flex-start", "flex-start", "flex-end"]}>
            <Text>{nights} nights</Text>
          </Flex>
          <Flex width={[1/2, 1/2, 1/2, 1]} justifyContent={"flex-end"} textAlign="right">
            <Text color="brand.primary" fontWeight="bold" textAlign="right">{price}</Text>
          </Flex>
          <Flex flexDirection="column" width={1} alignItems="flex-end">
            <Text fontSize="small">Checkout {checkoutDayString}</Text>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  )
}


const App = () => {
  const today = DateTime.local().startOf('day');

  const validDates = Interval.fromDateTimes(today, today.endOf('month'))
    .splitBy({days: 1}).map(d => d.start);
  // Start of week is Monday, but we render the mapy from Sunday
  const invalidDates = Interval.fromDateTimes(today.startOf('week').minus({days: 1}), today)
    .splitBy({days: 1}).map(d => d.start);

  const basePrice = new Decimal(10380);
  const rates = Array(validDates.length).fill(basePrice).map(p => p.plus(Math.random() * 500));
  const dayPrices = _.zipWith(validDates, rates, (d, p) => { return {date: d, price: p} });

  const cardHeight = "90px";

  return (
    <Fragment>
      <Box bg="grey.3" textAlign="center">
        <Container py={12}>
          <Image src={qantasHotels} inline mb={6} />
          <Heading.h1>Qantas Packages</Heading.h1>
          <CalendarHeader date={today}/>
          <Flex flexDirection="row" alignItems="center" flexWrap="wrap" flex="1 1 auto">
            { /*_.times(spacers, () => { return <CalendarSpacer width={1/7}/>})*/}
            { invalidDates.map(d => <PastDay width={1/7} cardHeight={cardHeight} date={d}/>)}
            { dayPrices.map(d => <DayTile date={d.date} rate={d.price} nights={7} cardHeight={cardHeight}/>)}
          </Flex>
        </Container>
      </Box>

      <Box textAlign="center">
        <Container py={12}>
          <Paragraph fontSize="lg" mb={6} color="grey.2">
            Edit <code>src/App.js</code> and save to reload.
          </Paragraph>

          <Button
            is="a"
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
}

export default App;
