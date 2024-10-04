import React, {useState, useContext, useEffect} from 'react';
import Fuse from 'fuse.js';
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
    const username = localStorage.getItem("username");
    useEffect(() => {
        setSlideRows(slides);
    }, [slides]);

    useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ['country', 'title', 'author'] });
        const results = fuse.search(searchTerm).map(({ item }) => item);
    
        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
          setSlideRows(results);
        } else {
          setSlideRows(slides);
        }
      }, [searchTerm]);

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
                                <Header.TextLink>{username}</Header.TextLink>
                            </Header.Group>
                            <Header.Group>
                                <Header.TextLink>Sign out</Header.TextLink>
                            </Header.Group>
                        </Header.Dropdown>
                    
                </Header.Profile>
            </Header.Group>
        </Header.Frame>
        <Header.Feature>
            <Header.FeatureCallOut>Browse your favorite books!</Header.FeatureCallOut>
            <Header.Text>
                Read reviews about timeless classics, chat with your friends, or come up with a personalized reading list. 
                Take a look at the options below, or search for a specific book. Have fun!
            </Header.Text>
        </Header.Feature>
    </Header>
    {slideRows && slideRows.length > 0 ? (
    <Card.Group>
        {slideRows.map((slideItem) => (
            <Card key={slideItem._id}>
                <Card.Entities>
                        <Card.Item item={slideItem}>
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