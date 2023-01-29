/** @jsxImportSource theme-ui */
import { Container, Heading, Text, Box, Button, Link } from 'theme-ui';
import Image from 'next/image';
import { useEffect } from 'react';
import SectionHeader from '../components/section-header';
import Rating from '../components/testimonials/rating';
import ButtonGroup from '../components/button-group';
import Carousel from 'react-multi-carousel';
import { gsap } from "gsap/dist/gsap";

import NathanAvatar from '../assets/images/testimonials/natethumb.webp';
import JohnAvatar from '../assets/images/testimonials/johnthumb.webp';
import KosAvatar from '../assets/images/testimonials/kosthumb.webp';
import SandipAvatar from '../assets/images/testimonials/sandipthumb.webp';
import AaronAvatar from '../assets/images/testimonials/aaronthumb.jpg';
import DannyAvatar from '../assets/images/testimonials/dannythumb.png';
import KeoniAvatar from '../assets/images/testimonials/keonithumb.webp';
import AnasAvatar from '../assets/images/testimonials/anasthumb.jpeg';
import JadAvatar from '../assets/images/testimonials/jadthumb.webp';
import MaximAvatar from '../assets/images/testimonials/maxthumb.webp';
import GioAvatar from '../assets/images/testimonials/giothumb.jpeg';
import GyuriAvatar from '../assets/images/testimonials/gyurithumb.webp';
import AbbyAvatar from '../assets/images/testimonials/abbythumb.webp';
import TobiAvatar from '../assets/images/testimonials/tobiasthumb.jpg';
import FredericoAvatar from '../assets/images/testimonials/fredricothumb.png';

const data = [
  {
    id: 1,
    title: 'The best investment you can make',
    description:
      'I\'ve been working with Dez for about 3 months now and can confidently say he\'s played a huge role in some big successes. I 100% recommend Dez to anyone looking to take a serious step forward in life and achieve their goals.',
    avatar: NathanAvatar,
    name: 'Nathan Field',
    designation: 'Mindset & Fitness Coach',
    review: 5,
  },
  {
    id: 2,
    title: 'Working with Dez is fantastic',
    description:
      'I saw immediate results in my ability to focus on work, my sleep quantity/quality, and my ability to adhere to new habits. You can contact me personally if you\'re unsure about working with Dez and I\'ll convince you it\'s the right decision!',
    avatar: JohnAvatar,
    name: 'John Williams',
    designation: 'Gym Business Owner',
    review: 5,
  },
  {
    id: 3,
    title: 'Helped me personally & with business',
    description:
      'Dez is very attentive and asks the right questions at the right time. Great Coach. Do everything you can to hire this man cause he\'ll skyrocket your productivity.',
    avatar: KosAvatar,
    name: 'Kos Timo',
    designation: 'Marketing Agency Owner',
    review: 5,
  },
  {
    id: 4,
    title: 'Excellent coach',
    description:
      'Helped me dial in on my goals and provided me with a system to follow which enabled me to reach my objectives rather effortlessly. Would highly recommend again and again',
    avatar: AaronAvatar,
    name: 'Aaron Z. Doyle',
    designation: 'Visual Artist',
    review: 5,
  },
  {
    id: 5,
    title: 'Dez is my secret weapon...',
    description:
      'Dez\'s mix of accountability, encouragement, tracking, and real world advice is exactly what I needed to take my life to the next level. He\'s soon about to blow up, and I\'m so blessed I met him on the ground floor.',
    avatar: SandipAvatar,
    name: 'Sandip Bhowmik',
    designation: 'Product Engineer',
    review: 5,
  },
  {
    id: 6,
    title: 'Relaxed, confident, knowledgeable',
    description:
      'Couldn’t be happier with the result. If you need someone to help you focus, clarity on the actions you should be doing, motivation and support along your journey, this is your man.',
    avatar: DannyAvatar,
    name: 'Danny Gibson',
    designation: 'Fitness Coach',
    review: 5,
  },
  {
    id: 7,
    title: 'The best investment you can do!',
    description:
      'I’ve been his client for many months and you can\'t measure how much he has helped me in all areas of my life! If you want to be more successful this is the guy to help you.',
    avatar: JadAvatar,
    name: 'Jad Taha',
    designation: 'Full-Stack Developer',
    review: 5,
  },
  {
    id: 8,
    title: 'My follow-through has greatly improved. 5/5!',
    description:
      'Dez has really helped me out in terms of productivity and motivation. He\'s a great person to work with and really addresses the heart of the challenges you\'re facing.',
    avatar: KeoniAvatar,
    name: 'Keoni Tamayo',
    designation: 'YouTuber',
    review: 5,
  },
  {
    id: 9,
    title: 'It was a life-changing experience',
    description:
      'Before working with Dez, I was a lost individual. After, things changed completely. If you\'re looking for a coach who can completely transform your life, Dez is the man!',
    avatar: AnasAvatar,
    name: 'Mohammed Anas',
    designation: 'Interior Design Marketer',
    review: 5,
  },
  {
    id: 10,
    title: 'Best Coach I had!',
    description:
      'He made sure to discuss everything that was on my mind & brought always a solution to my problems. He gave advice on how to deal with my daily struggles & keep moving forward.',
    avatar: MaximAvatar,
    name: 'Maxim Rempel',
    designation: 'eCommerce Owner',
    review: 5,
  },
  {
    id: 11,
    title: 'If you\'re trying to be successful at any area of your life...',
    description:
      'He was always able to talk about all different areas that I needed and we both came up with a plan on how to achieve my goals.',
    avatar: GyuriAvatar,
    name: 'Gyuri Tóth',
    designation: 'eCommerce Expert',
    review: 5,
  },
  {
    id: 12,
    title: 'I can only wholeheartedly recommend him!',
    description:
      'Always proactive, always centered, and extremely kind, he is a great support and a key component of my project\'s success. I look forward to continuing our work together.',
    avatar: GioAvatar,
    name: 'Giovanni Facchetti',
    designation: 'CEO',
    review: 5,
  },
  {
    id: 13,
    title: 'He has become a big part of my work week',
    description:
      'I achieved a big promotion and I attribute what I\'ve been able to accomplish just over the past 3 to 4 months to having a coach like Dez, who I can just trust and rely upon and work with.',
    avatar: AbbyAvatar,
    name: 'Abby Diamond',
    designation: 'Client Success Manager & Musical Artist',
    review: 5,
  },
  {
    id: 14,
    title: 'Incredible coach for guidance & reflection',
    description:
      'Dez is a great help for me to stay on track with my goals. He is very genuine and has great knowledge of habit development and some good life advice in general.',
    avatar: TobiAvatar,
    name: 'Tobias Müller',
    designation: 'eCommerce Owner',
    review: 5,
  },
  {
    id: 15,
    title: 'He listens carefully and asks the right questions',
    description:
      'Dez showed to have a great understanding of how to help you out in all aspects of your life (work, home, dating). I wish I found Dez earlier, as I know how powerful and life changing his help can be!',
    avatar: FredericoAvatar,
    name: 'Frederico Morais',
    designation: 'Assistant Football Coach',
    review: 5,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TestimonialSection() {

  useEffect(() => {

    gsap.from('.testimonialButton', {
      scrollTrigger: '.testimonialButton',
      duration: 1,
      opacity: 0,
      y: 100,
      stagger: 0.3,
      ease: "back"
    });
    gsap.to('.testimonialButton', {
      scrollTrigger: '.testimonialButton',
      duration: 1,
      opacity: 1,
      y: 0,
      stagger: 0.3,
      ease: "back"
    });

    gsap.from('.testimonialCards', {
      scrollTrigger: '.testimonialCards',
      duration: 1,
      opacity: 0,
      y: 100,
      stagger: 0.3,
      ease: "back"
    });
    gsap.to('.testimonialCards', {
      scrollTrigger: '.testimonialCards',
      duration: 1,
      opacity: 1,
      y: 0,
      stagger: 0.3,
      ease: "back"
    });

    }, []);

  return (
    <section id="testimonial" sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader slogan="Client Rating & Reviews" title="100+ Satisfied Clients = 100+ Testimonials" />
      </Container>
      <Box className="testimonialCards" sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              <Rating rating={item.review} />
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.description}>{item.description}</Text>
              <div className="card-footer">
                <div className="image">
                  <Image src={item.avatar} alt="Client Image" />
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
      <Container className="testimonialButton" css={{ textAlign: 'center' }}>
      <Link href='testimonials'>
        <Button variant="primary" sx={styles.button}>
          See All 100+ Testimonials and 20+ Case Studies
        </Button>
      </Link>
      </Container>
    </section>
  );
}

const styles = {
  button: {
    /*display: ['none', 'flex'],*/
    mt: [45, 45, 45, 35, 40],
  },
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    cursor: 'grab',
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    ':active': {
      cursor: 'grabbing',
    },
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
