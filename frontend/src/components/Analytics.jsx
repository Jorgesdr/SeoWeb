import { useState, useEffect } from 'react';

function Analytics() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/analytics')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <h2>Google Analytics</h2>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Cargando datos de Analytics...</p>
            )}
        </div>
    );
}

export default Analytics;
