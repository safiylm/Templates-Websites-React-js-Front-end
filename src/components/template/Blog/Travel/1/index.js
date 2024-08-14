import '../../../../../styles/Blog/travel1.scss'
import hiking from "../../../../../assets/template8/hiking.png";
import car from "../../../../../assets/template8/car.png";
import ocean from "../../../../../assets/template8/ocean.png";
import ride from "../../../../../assets/template8/ride.png";
import 'bootstrap/dist/css/bootstrap.css';

function TravelBlog1() {
    return (
        <div id="div-Travel1-container">

            <div class="div0">
                <h1>Your<br />
                    Travel<br />
                    Assistant
                </h1>
            </div>

            <div id="div1" className="d-flex flex-row flex-wrap align-items-center justify-content-center">
                <div className='texte'>
                    <h1>About me</h1>
                    <p>Leigh McAdam is a Calgary-based writer, photographer and social media enthusiast with over 48,000 followers. Her blog: HikeBikeTravel is frequently cited as one of the top travel and outdoor adventure blogs in Canada, and consistently receives over 135,000 monthly page views. She shares her enthusiasm for the outdoors as a brand ambassador for Sporting Life, and has worked on campaigns for Travel Alberta, Expedia and Flight Hub. Leigh is the author of Discover Canada: 100 Inspiring Outdoor Adventures. Currently, she is co-authoring: 125 Nature Hot Spots in Alberta (spring 2018). A true adventurer, Leigh will try anything once, except perhaps bungee jumping.
                    </p>
                </div>
                <img src="https://images01.nicepage.com/5a/13/5a1396a2b9570a75f845e6a6880dfb9d.jpeg" />
            </div>

            <div className='div2'>

                <div className='div2-texte'>

                    <h1>What We Do</h1>
                    <p>
                        Opportunities for challenging hikes and pleasant strolls are scattered all over this planet; you just need to know where to find them. We do. Kilimanjaro, Everest Base Camp, Patagonia, and the Inca Trail are out there, waiting for you to walk all over them. We’re proud of our record of successful ascents (over 92% of our travellers make it to the top of Kili, depending on the route), but it’s our CEOs and local guides that make the journey itself as memorable as the summit. And if you’re not into big climbs, don’t sweat it; we’ve got loads of lower-impact walks and iconic treks you’ll love, too.
                    </p>
                </div>

                <div id='liste' className='d-flex flex-row flex-wrap align-items-center justify-content-around'>
                    <div id='item' className='d-flex flex-column align-items-center justify-content-center'> <img src={hiking} /> <h6>Hiking</h6> </div>
                    <div id='item' className='d-flex flex-column align-items-center justify-content-center'> <img src={ride} /> <h6>HikeBike</h6> </div>
                    <div id='item' className='d-flex flex-column align-items-center justify-content-center'> <img src={ocean} /><h6>Ocean</h6> </div>
                    <div id='item' className='d-flex flex-column align-items-center justify-content-center'> <img src={car} /> <h6>By Car</h6> </div>

                </div>
            </div>

            <div id='div3' className='d-flex flex-row align-items-center justify-content-center flex-wrap'>
                <img src="https://images01.nicepage.com/5d/35/5d35930f0d6307e91864c97d720f0f2d.jpeg" />
                <img src="https://images01.nicepage.com/c8/32/c832e81950682d08b8e9f1b5018d395f.jpeg" />
                <img src="https://images01.nicepage.com/a0/4d/a04dfd8cf1139d1e3649ec6910dd6b6f.jpeg" />
                <img src="https://images01.nicepage.com/fa/02/fa02807687864278fa97bd27efe29549.jpeg" />
                <div> <h1> Our Travals </h1></div>
                <img src="https://images01.nicepage.com/96/05/96052070150278fb53e7dad53851abed.jpeg" />
                <img src="https://images01.nicepage.com/0f/90/0f9084bf6eefb4993313990362d35e95.jpeg" />
                <img src="https://images01.nicepage.com/f5/c2/f5c254c0c7f4055ab0ac1462c1fad578.jpeg" />
                <img src="https://images01.nicepage.com/c2/44/c244a213ce0a1450059f9f1eac6c32ce.jpeg" />

            </div>

            <div id='div4' className='d-flex flex-row flex-wrap align-items-center justify-content-center'>
                <h1>Where do you want to go?</h1>
                <div>
                    <p>
                        You’ll find 21 detailed adventure guides, over a hundred practical travel tips, book reviews on anything outdoors related, packing lists on a range of outdoor activities including kayaking, backpacking and camping as well as honest hotel and B&B reviews.
                    </p>
                    <p> Contact us and we will help you! </p>
                    <button>CONTACT US</button>
                </div>
            </div>

            <div className='div5'>

                <div>
                    <h1> What our Clients say</h1>

                    <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                    </p>
                </div>
                <div id='div-clients' className='d-flex flex-row flex-wrap align-items-center justify-content-center'>
                    <div className='div-un-client' >
                        <img src="https://images01.nicepage.com/3d/cf/3dcf4d72582edf11c7fd4f4bbdb0495d.jpeg" />
                        <p>She has booked two major European trips for us in the past year and every aspect has met, and in most cases exceeded, our expectations. Best prices, best hotels, best itineraries, and best cruises, she does it all. But the most important thing is she remembers the little things that we would do if we were making the plans ourselves.
                        </p>
                        <h2>Bertie Norton</h2>
                    </div>

                    <div className='div-un-client'>
                        <img src="https://images01.nicepage.com/42/4a/424a8413c27b09a387fd18dc8a272ed2.jpeg" />
                        <p>Leigh McAdam has been making my travel arrangements for about 20 years and there is no one else I would trust to arrange my trips and tours. I've also had great fun on a few of the group trips she has arranged - Peru & Machu Picchu and a 10-day cruise out of Venice and diving. It's always an eclectic group of well traveled, interesting people.</p>
                        <h2>Frank Kinney</h2>

                    </div>

                </div>
            </div>
            <div id='div6' className='d-flex flex-row flex-wrap align-items-center justify-content-center flex-wrap'>
                <img src="https://images01.nicepage.com/3f/38/3f3860bd4fed5be6677a686671511935.jpeg" />
                <img src="https://images01.nicepage.com/e9/9c/e99c183fab3d210239d43648ef132a28.jpeg" />
                <img src="https://images01.nicepage.com/2e/01/2e011b70e7188a19c3380f650eb15dc0.jpeg" />
                <img src="https://images01.nicepage.com/12/9e/129e3635-3c43-474b-b0dd-97dd30c29a40.jpg" />
            </div>
            <div className='div7'></div>

            <footer>
                <a href="https://nicepage.com/templates/preview/travel-assistant-12890?device=desktop">LIEN </a>
            </footer>
        </div>
    );
}


export default TravelBlog1;