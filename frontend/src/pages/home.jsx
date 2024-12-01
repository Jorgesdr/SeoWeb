import { Link } from 'wouter';


function Home() {






    return (
        <div>
            {
                //<script src="https://accounts.google.com/gsi/client" async></script>
            }
            <div>

                <h1>Bienvenido a la App SEO</h1>
            </div>


            <nav>
                <ul>
                    <li><Link href="/analytics">Google Analytics</Link></li>
                    <li><Link href="/ads">Google Ads</Link></li>
                    <li><Link href="/search-console">Google Search Console</Link></li>
                </ul>
            </nav>
        </div >
    );
}

export default Home;
