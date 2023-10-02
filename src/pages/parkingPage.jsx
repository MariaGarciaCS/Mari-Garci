import { useState, useEffect } from "react"
import './parkingPage.css'
import Footer from '../components/footer/Footer'
import Star from '../assets/star.webp'

export default function Parking() {
  const [events, setEvents] = useState([]);
  
  useEffect(() =>{
    getAllEvents()
  }, []);

  const getAllEvents = async () =>{
    let result = [];
    const tm_url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_API_KEY}&venueId=KovZpZAF6tIA&locale=*`

    let url = tm_url

    do{
      const response = await fetch(url)
        .then((res) => res.json())

      console.log(response)

      result.push(...response._embedded.events)

      if(response._links.next){
        const next = response._links.next.href
        url = tm_url + next.slice(next.indexOf("&page="))
      }else{
        url = null
      }
    }while(url)

    result.sort((a, b) => new Date(a.dates.start.localDate) - new Date(b.dates.start.localDate));

    setEvents(result)
  }

  return (
    <>
        <div className='nav-container'>
            <div className="stars" id="stars-left">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
            </div>
            <div className="nav-title">
                <h1>Chi-Town Stadium Parking</h1>
            </div>
            <div className="stars" id="stars-right">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
            </div>
        </div>
      <section className="container__main" id="fetch-data">
        {/* <div className="cta">
          <button>Soldier Field</button>
        </div> */}
        <div className="events-container">
          <h2>Upcoming Events at Soldier Field</h2>
          {
            events.map((event, index) => {
              return <div key={index} className="event-container">
                    <div className="event-info">
                      <h3 className="event-title">{event.name}</h3>
                      <p className="event-detail">{event.dates.start.localDate}</p>
                      <p className="event-detail">{event.dates.start.localTime}</p>
                    </div>
                    <div className="event-img">    
                        <img src={event.images[1].url} alt="" />
                    </div>
                  
                </div>
            })
          }
        </div>
      </section>
      <Footer />
    </>
  )
}