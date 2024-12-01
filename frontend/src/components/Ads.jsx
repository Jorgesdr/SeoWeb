import { useState, useEffect } from 'react';

function Ads() {
    const [keywords, setKeywords] = useState(null);

    useEffect(() => {
        fetch('/api/ads')
            .then(response => response.json())
            .then(data => setKeywords(data));
    }, []);

    return (
        <div>
            <h2>Palabras clave de Google Ads</h2>
            {keywords ? (
                <pre>{JSON.stringify(keywords, null, 2)}</pre>
            ) : (
                <p>Cargando palabras clave...</p>
            )}
        </div>
    );
}

export default Ads;
