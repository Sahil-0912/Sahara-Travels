import Swiper from "swiper"
import BusTickets from "./BusTickets"
import Feedback from "./Feedback"
import HomeContent from "./HomeContent"
import Slider from "./Slider"

const Home = () => {
  return (
    <div>
     <HomeContent />  
     <Slider />
     <BusTickets />
     <Feedback />
    </div>
  )
}

export default Home
