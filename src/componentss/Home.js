import React ,{useState} from 'react';
import'./HeaderComponents.css'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

 function Home()
 {
     const items = [
  {
    src: 'https://images.unsplash.com/photo-1552590635-27c2c2128abf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlyeWFuaXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    altText: 'Slide 1',
    caption: 'Biryani',
    descp:'his biryani has mild fragrance, sticky rice, distinct taste of rice with hot and tangy flavour along with soft meat or vegetables. Use TasteMeter language to universally describe the unique taste of different biryanis'
  },
  {
    src: 'https://images.unsplash.com/photo-1617692855027-33b14f061079?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c291dGglMjBpbmRpYW4lMjBkaXNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    altText: 'Slide 2',
    caption: 'chikken tikka',
    descp:'Simply put, butter chicken, as the name implies, is rich in butter. This ingredient is added in plenty to make the tomato sauce creamier and, its addition, in turn, lends a certain sweetness to the palate. Chicken tikka masala, by comparison, is the spicier variant, carrying more nuanced flavors.'
  },
  {
    src: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c291dGglMjBpbmRpYW4lMjBkaXNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    altText: 'Slide 3',
    caption: 'idli',
    descp:'This porous, fluffy white disc could easily be the healthiest food in the world and it is made of two basic and very healthy building blocks -- rice and lentils. Eaten by itself, an idli tastes bland. But served with a sambar and a green coconut chutney, it becomes one of the most delicious foods you will ever eat.'
  }
];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        
        {/* <section className="descp">
            <img src={item.src}  alt={item.altText} />
            {item.descp}
            </section> */}

<Card>
        <CardBody>
          <CardTitle tag="h5">{item.caption}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{item.caption}</CardSubtitle>
        </CardBody>
        <img width="100%" src={item.src} />
        <CardBody>
          <CardText>{item.descp}</CardText>
        </CardBody>
      </Card>


        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });
return(
    <section className="sldr">

    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </section>

);

 }

 export default Home;