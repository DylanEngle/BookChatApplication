import { useEffect, useState} from 'react';
import api from '../api/axiosconfig';

function useContent() {
    const [content, setContent] = useState([]);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await api.get("/api/v1/books");
                setContent(response.data);
                }

                
            catch (error) {
                console.error('Error fetching content:', error.message);
            }
        }

        fetchContent();

        // Cleanup function to reset the content state if needed
        return () => setContent([]);

    },[]);

    return content;
}

export default useContent;
