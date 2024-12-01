import { useState, useEffect } from 'react';

function SearchConsole() {
    const [urls, setUrls] = useState(null);

    useEffect(() => {
        fetch('/api/searchconsole')
            .then(response => response.json())
            .then(data => setUrls(data));
    }, []);

    return (
        <div>
            <h2>URLs Indexadas de Google Search Console</h2>
            {urls ? (
                <pre>{JSON.stringify(urls, null, 2)}</pre>
            ) : (
                <p>Cargando URLs indexadas...</p>
            )}
        </div>
    );
}

export default SearchConsole;
