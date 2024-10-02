import React, {useState, useContext, useEffect} from 'react';
import Header from '../components/header';
import Card from '../components/card';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import useContent from '../hooks/use-content';

export function BrowseContainer(){

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [slideRows, setSlideRows] = useState([]);

    const slides = useContent();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    useEffect(() => {
        setSlideRows(slides);
        console.log("Slide rows: " + slideRows);
    }, [slides]);

    return(
        
    <>
    <Header>
        <Header.Frame>
            <Header.Group>
                <Header.Logo to={ROUTES.HOME} src={logo} alt='netflix'/>
            </Header.Group>
            <Header.Group>
                <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}>

                </Header.Search>
                <Header.Profile>
                    <Header.Picture />
                        <Header.Dropdown>
                            <Header.Group>
                                <Header.Picture/>
                                <Header.TextLink></Header.TextLink>
                            </Header.Group>
                            <Header.Group>
                                <Header.TextLink>Sign out</Header.TextLink>
                            </Header.Group>
                        </Header.Dropdown>
                    
                </Header.Profile>
            </Header.Group>
        </Header.Frame>
        <Header.Feature>
            <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
            <Header.Text>
                Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                futile attempt to feel like he's part of the world around him.
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
    </Header>
    {slideRows && slideRows.length > 0 ? (
    <Card.Group>
        {slideRows.map((slideItem) => (
            <Card key={`${slideItem.title.toLowerCase()}`}>
                <Card.Entities>
                        <Card.Item key={slideItem._id} item={slideItem}>
                            <Card.Image src={`../../${slideItem.imageLink}`}>

                            </Card.Image>
                            <Card.Meta>
                                <Card.SubTitle>
                                    {slideItem.title}
                                </Card.SubTitle>
                                <Card.Text>{slideItem.author}</Card.Text>
                            </Card.Meta>
                        </Card.Item>
                    
                </Card.Entities>
                <Card.Feature>
                </Card.Feature>
            </Card>
        ))}
    </Card.Group>
    ) : (<p>No books yet...</p>) }
    
    </>
    )
}