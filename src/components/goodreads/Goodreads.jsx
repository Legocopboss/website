import React from 'react'
import { Container, Card, Text, Group, Stack, Title, useMantineTheme, Anchor } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel'
import './goodreads.css'

const readBooks = [
  {
    title: "The Odyssey",
    author: "Homer",
    link: "https://www.goodreads.com/review/show/8581742743?utm_medium=api&utm_source=custom_widget",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1711957706l/1381._SY75_.jpg",
    rating: 5,
    review: "Good book, movie missed some parts. Overall great message great story, love how the guy misses his wife that’s real\n\nAlso the whole father son narrative throughout is fantastic"
  },
  {
    title: "Vicious (Villains, #1)",
    author: "V.E. Schwab",
    link: "https://www.goodreads.com/review/show/8274956172?utm_medium=api&utm_source=custom_widget",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1670752670l/40874032._SY75_.jpg",
    rating: 0,
    review: ""
  },
  {
    title: "Farenheit 451",
    author: "Ray Bradbury",
    link: "https://www.goodreads.com/review/show/8028748581?utm_medium=api&utm_source=custom_widget",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1608059811l/56302573._SY75_.jpg",
    rating: 5,
    review: ""
  },
  {
    title: "The Third Rule of Time Travel",
    author: "Philip Fracassi",
    link: "https://www.goodreads.com/review/show/8028748181?utm_medium=api&utm_source=custom_widget",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1721739711l/215748787._SY75_.jpg",
    rating: 5,
    review: "Absolutely fantastic. Twists and turns that I didn’t see coming with multiple dimensions of plot that all tie together in the end. The amount of depth surprised me and the ending was just incredible. Full 5 stars, what an absolutely unbe..."
  },
  {
    title: "Mickey7 (Mickey7, #1)",
    author: "Edward Ashton",
    link: "https://www.goodreads.com/review/show/8028260534?utm_medium=api&utm_source=custom_widget",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1636369192l/57693457._SY75_.jpg",
    rating: 4,
    review: ""
  }
]

const toReadBooks = [
  {
    title: "Blitzed: Drugs in Nazi Germany",
    author: "Norman Ohler",
    link: "https://www.goodreads.com/review/show/8889011061?utm_medium=api&utm_source=custom_widget",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1461531937l/29429893._SY75_.jpg",
    rating: 0,
    review: ""
    },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    link: "https://www.goodreads.com/review/show/8398080926?utm_medium=api&utm_source=custom_widget",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1764703833l/54493401._SY75_.jpg",
    rating: 0,
    review: ""
    },
  {
    title: "1984",
    author: "George Orwell",
    link: "https://www.goodreads.com/review/show/8173834658?utm_medium=api&utm_source=custom_widget",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1657781256l/61439040._SX50_.jpg",
    rating: 0,
    review: ""
    },
  {
    title: "The Hobbit, or There and Back Again",
    author: "J.R.R. Tolkien",
    link: "https://www.goodreads.com/review/show/8153930186?utm_medium=api&utm_source=custom_widget",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546071216l/5907._SY75_.jpg",
    rating: 0,
    review: ""
    },
  {
    title: "Everything Is Tuberculosis: The History and Persistence of Our Deadliest Infection",
    author: "John Green",
    link: "https://www.goodreads.com/review/show/8126695695?utm_medium=api&utm_source=custom_widget",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1729825992l/220341389._SY75_.jpg",
    rating: 0,
    review: ""
    }
]

// Map numeric rating to star string (0-5)
const STAR_MAP = [
  '☆☆☆☆☆',
  '★☆☆☆☆',
  '★★☆☆☆',
  '★★★☆☆',
  '★★★★☆',
  '★★★★★',
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
          <Text size="sm" color="dimmed" style={{ marginTop: 4 }}>{STAR_MAP[Math.max(0, Math.min(5, book.rating || 0))]}</Text>
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