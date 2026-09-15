import React from 'react'
import { Container, Card, Text, Group, Stack, Title, Rating, useMantineTheme, Anchor } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel'
import './goodreads.css'

const readBooks = [
  {
    title: 'The Odyssey',
    author: 'Homer',
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1711957706l/1381._SY75_.jpg',
    rating: 5,
    review: "Good book, movie missed some parts. Overall great message and story; the father/son narrative is superb.",
    link: 'https://www.goodreads.com/review/show/8581742743'
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1608059811l/56302573._SY75_.jpg',
    rating: 5,
    review: null,
    link: 'https://www.goodreads.com/review/show/8028748581'
  },
  {
    title: 'The Third Rule of Time Travel',
    author: 'Philip Fracassi',
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1721739711l/215748787._SY75_.jpg',
    rating: 5,
    review: "Twists and turns I didn't see coming; great pacing and payoff.",
    link: 'https://www.goodreads.com/review/show/8028748181'
  },
  {
    title: 'Mickey7',
    author: 'Edward Ashton',
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1636369192l/57693457._SY75_.jpg',
    rating: 4,
    review: null,
    link: 'https://www.goodreads.com/review/show/8028260534'
  }
]

const toReadBooks = [
  {
    title: 'Blitzed: Drugs in Nazi Germany',
    author: 'Norman Ohler',
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1461531937l/29429893._SY75_.jpg',
    rating: 0,
    review: null,
    link: 'https://www.goodreads.com/review/show/8889011061'
  },
  {
    title: '1984',
    author: 'George Orwell',
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1657781256l/61439040._SX50_.jpg',
    rating: 0,
    review: null,
    link: 'https://www.goodreads.com/review/show/8173834658'
  }
]

function BookCard({ book }) {
  const theme = useMantineTheme()
  const isXSmall = useMediaQuery('(max-width: 600px)')
  return (
    <Card
      shadow="md"
      padding="md"
      radius="md"
      withBorder
      sx={(t) => ({
        backgroundColor: t.colorScheme === 'dark' ? t.colors.dark[6] : t.white,
        color: t.colorScheme === 'dark' ? t.white : t.black,
        minHeight: 320,
        width: '100%',
        maxWidth: 320,
        boxSizing: 'border-box',
        border: `2px solid ${t.colorScheme === 'dark' ? t.colors[theme.primaryColor][6] : t.colors[theme.primaryColor][6]}`,
        boxShadow: t.shadows.md,
        transition: 'transform 160ms ease, box-shadow 160ms ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // allow carousel to control slide sizing
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: t.shadows.lg,
        },
      })}
    >
      <Group align="flex-start" spacing="sm">
        <Anchor href={book.link} target="_blank" rel="noopener noreferrer">
          <div style={{ width: 160, height: 240, overflow: 'hidden', borderRadius: 8, flex: '0 0 160px' }}>
            <img src={book.img} alt={`${book.title} cover`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </Anchor>

          <Stack spacing={8} style={{ flex: 1, minWidth: 140, textAlign: isXSmall ? 'center' : 'left' }}>
          <Anchor href={book.link} target="_blank" rel="noopener noreferrer">
            <Text weight={700} size="lg" sx={{ color: theme.colors[theme.primaryColor][4] }}>{book.title}</Text>
          </Anchor>
          <Text size="sm" color="dimmed">by {book.author}</Text>
          {/* <Rating value={book.rating} readOnly size="md" /> */}
          {book.review ? (
            <div style={{ marginTop: 8, maxHeight: 110, overflowY: 'auto', whiteSpace: 'normal', wordBreak: 'break-word' }}>
              <Text size="sm" color="dimmed">{book.review}</Text>
            </div>
          ) : (
            <Text size="sm" color="dimmed" style={{ marginTop: 6 }}>No review</Text>
          )}
        </Stack>
      </Group>

    </Card>
  )
}

const Goodreads = () => {
  const theme = useMantineTheme()
  const breakpoints = [
    { maxWidth: 1200, slideSize: '33%' },
    { maxWidth: 900, slideSize: '50%' },
    { maxWidth: 600, slideSize: '100%' },
  ]

  const isXSmall = useMediaQuery('(max-width: 600px)')
  const isSmall = useMediaQuery('(max-width: 900px)')
  const isMedium = useMediaQuery('(max-width: 1200px)')

  let computedSlideSize = '30%'
  if (isXSmall) computedSlideSize = '100%'
  else if (isSmall) computedSlideSize = '50%'
  else if (isMedium) computedSlideSize = '33%'

  const computedAlign = 'center'

  const computedSlideGap = isXSmall ? 12 : 16

  return (
    <section id="goodreads">
      <Container style={{ paddingTop: 10, paddingBottom: 30, maxWidth: 1100, margin: '0 auto' }}>
        <div className="bookshelf-wrapper">
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <Title order={2} align="center" style={{ marginBottom: 6 }}>My Bookshelf</Title>
          <br/>
        </div>

        <Title order={4} align="center" style={{ marginBottom: 12, marginTop: 8, letterSpacing: '0.06em' }}>Recently Read</Title>
        <Carousel
          slideSize={computedSlideSize}
          slideGap={computedSlideGap}
          breakpoints={breakpoints}
          align={computedAlign}
          withIndicators
          loop
          styles={{
            indicator: { backgroundColor: theme.colors.gray[4], width: 10, height: 6 },
            slide: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
            control: { backgroundColor: theme.colors[theme.primaryColor][6], color: theme.white, pointerEvents: 'all' },
          }}
          controlsOffset="xl"
        >
          {readBooks.map((b) => (
            <Carousel.Slide key={b.title} style={{ display: 'flex', justifyContent: 'center' }}>
              <BookCard book={b} />
            </Carousel.Slide>
          ))}
        </Carousel>
          <br/>
        <Title order={4} align="center" style={{ marginTop: 20, marginBottom: 12, letterSpacing: '0.06em' }}>Up next</Title>
        <Carousel
          slideSize={computedSlideSize}
          slideGap={computedSlideGap}
          breakpoints={breakpoints}
          align={computedAlign}
          withIndicators
          loop
          styles={{
            indicator: { backgroundColor: theme.colors.gray[4], width: 10, height: 6 },
            slide: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
            control: { backgroundColor: theme.colors[theme.primaryColor][6], color: theme.white, pointerEvents: 'all' },
          }}
          controlsOffset="xl"
        >
          {toReadBooks.map((b) => (
            <Carousel.Slide key={b.title} style={{ display: 'flex', justifyContent: 'center' }}>
              <BookCard book={b} />
            </Carousel.Slide>
          ))}
        </Carousel>
        </div>
      </Container>
    </section>
  )
}

export default Goodreads