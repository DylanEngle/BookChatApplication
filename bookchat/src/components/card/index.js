import React, {useState, useContext, createContext } from 'react';
import { Container, Group, Title, LeaveReviewButton, AddReadingListButton, SubTitle, Text, Entities, Meta, Item, Feature, FeatureTitle, FeatureText, FeatureClose, Maturity, Content,  Image } from './styles/card';

export const FeatureContext = createContext();

function Card({children, ...restProps}){
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState(false);

    return(
        <FeatureContext.Provider value={{showFeature, setShowFeature, itemFeature, setItemFeature}}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
  };
  
  Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
  };
  
  Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
  };
  
  Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
  };
  
  Card.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps}>{children}</Entities>;
  };
  
  Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>;
  };

  Card.Item = function CardItem({ item, children, ...restProps }) {
    const {setShowFeature, setItemFeature} = useContext(FeatureContext);


    return <Item onClick={() => {setItemFeature(item); setShowFeature(true);}} {...restProps}>{children}</Item>;
  };

  Card.Image = function CardImage({...restProps}){
    return <Image {...restProps}></Image>
  }

  Card.Feature = function CardFeature({category, children, ...restProps}){
    const {showFeature, itemFeature, setShowFeature} = useContext(FeatureContext);

    return showFeature ? (<Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
        <Content>
            <FeatureTitle>
                {itemFeature.title}
            </FeatureTitle>
            <FeatureText>
                {itemFeature.description}
            </FeatureText>
            <FeatureClose onClick={() => setShowFeature(false)}>
                <img src="../../images/close.png" alt="Close" />
            </FeatureClose>

        

        
            <Maturity rating={itemFeature.rating}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
            <FeatureText fontWeight='bold'>
                {itemFeature.author + " " + itemFeature.year}
            </FeatureText>

            <AddReadingListButton>Add to Reading List</AddReadingListButton>
            <LeaveReviewButton>Leave a Review</LeaveReviewButton>
        {children}
        </Content>
    </Feature>

    ) : null;
  }


export default Card;