import React from "react";
import ReachCarousel from './ReachCarousel.js';
import Weather2Carousel from './Weather2Carousel.js';
import FixtureCarousel from './FixtureCarousel.js';
import W2WCarousel from './W2WCarousel.js';
import BookCarousel from './BookCarousel.js';

class Portfolio extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render(){

    return(

  <div className="projects">

    <h1 className="headline"> My portfolio</h1>

    <br></br>

    <div className="project-info">

    <div className="project-paragraph">

      <table>
      <tr>
      <th><img style={{width:'3rem', height: '3rem', marginTop: '0,5rem', borderRadius: '15rem'}} src={require('../images/reach.png')}></img></th>
      <th>
      <h2 style={{marginLeft: '0.5rem'}}>
          Reach
      </h2>
      </th>
      </tr>
      </table>

      <h2 style={{fontWeight: 'normal', fontStyle: 'italic'}}> A modern social networking and dating app built in Python (Django) and ReactJS</h2>
      <h4 className="github"><a href="https://www.github.com/jah1603/Reach--">View on GitHub</a></h4>
      <p>I undertook this project with two friends based on our overarching vision of a networking app for hyperconnected social influencers. Together we implemented the code in Python (backend) and ReactJS (frontend), using a PSQL database for data persistence. Reach is a full-stack dating platform that measures users' social reach via web scraping, letting them find, match and interact with other users according to lifestyle preferences, location and age.<br/><br/>
      The app features full JSON web token authentication, geolocation, swipeable cards, email activation, and retrieves users' social reach by scraping their follower count on three major social media platforms. All of this underpins a fresh and vibrant UI designed to appeal to millenials.</p>

    </div>

  <ReachCarousel>

  </ReachCarousel>


  </div>


    <br></br>

    <div className="project-info">

    <div className="project-paragraph">

      <table>
      <tr>
      <th><img style={{width:'5rem', height: '5rem', marginTop: '0.2rem'}} src={require('../images/weather2.gif')}></img></th>
      <th>
      <h2 style={{marginLeft: '0.5rem'}}>
          Weather2...
      </h2>
      </th>
      </tr>
      </table>

      <h2 style={{fontWeight: 'normal', fontStyle: 'italic'}}> A series of mobile weather apps made in ReactNative, available on the Google Play store</h2>
      <h4 className="github"><a href="https://play.google.com/store/apps/details?id=com.weather2.weather2walk">View on Google Play store</a></h4>
      <p>My motivation to do this project stemmed from a desire to hone my front-end development skills and create something visually stimulating and pleasing to the eye. Consisting of <span style={{fontStyle: 'italic'}}>Weather2Walk</span>, <span style={{fontStyle: 'italic'}}>Weather2Golf</span> and <span style={{fontStyle: 'italic'}}>Weather2Wed</span>, this mobile app series was built in ReactNative using emulators in Genymotion and Android Studio. <br/><br/>
      The app uses four APIs (DarkSky, Geograph, FourSquare and GoogleMaps) to fetch relevant data. Weather data is presented in the form of historical averages obtained through a number of sequential requests, and prospective venues for the searched location are presented on an interactive map. Weather2Walk benefits from a fuzzy search, meaning highly specific place names (waterfalls, forests or small hills) can be searched, while Weather2Golf offers hourly weather snapshots, helping golfers to make an informed decision about their tee-off time.<br/><br/>
      </p>

    </div>

  <Weather2Carousel>

  </Weather2Carousel>


  </div>


  <br></br>

  <div className="project-info">

  <div className="project-paragraph">

    <table>
    <tr>
    <th><img style={{width:'5rem', height: '5rem', marginTop: '0,5rem'}} src={require('../images/football-boots.png')}></img></th>
    <th>
    <h2 style={{marginLeft: '0.5rem'}}>
        FixturePal
    </h2>
    </th>
    </tr>
    </table>

    <h2 style={{fontWeight: 'normal', fontStyle: 'italic'}}> A sports match schedule generator and results tracker, built in Java</h2>
    <h4 className="github"><a href="https://github.com/jah1603/FixturePal">View on GitHub</a></h4>
    <p>This project dates back to my time at CodeClan, where I created a custom brief along with two colleagues. The end product - FixturePal - can generate the entire match schedule for a sports season (including alternating home and away games) with a round-robin algorithm. <br/><br/>
    As well as being able to create a league of teams and enter match scores, users can keep track of team performance in a given league courtesy of a league table filtered by points, goal difference and goals scored. An option for logging match events in short match reports also exists, thereby enabling users to record information on goalscorers and displinary records.
  </p>

  </div>

<FixtureCarousel>

</FixtureCarousel>


</div>


<div className="project-info">

<div className="project-paragraph">

  <table>
  <tr>
  <th><img style={{width:'5rem', height: '5rem', marginTop: '0,5rem'}} src={require('../images/books.png')}></img></th>
  <th>
  <h2 style={{marginLeft: '0.5rem'}}>
      Invent.story
  </h2>
  </th>
  </tr>
  </table>

  <h2 style={{fontWeight: 'normal', fontStyle: 'italic'}}>Bookseller stock and profit tracker built in Ruby using the Sinatra web framework</h2>
  <h4 className="github"><a href="http://invent-story.herokuapp.com">View on Heroku</a></h4>
  <p>An application which enables a bookseller to monitor stock levels, profit, publishers and genres. A PSQL database was used for data persistence, allowing the user to create, edit and delete books and publishers as desired. It is also possible to browse stock by genre and record stock sales/replenishment at the click of a button.<br/><br/>
</p>

</div>

<BookCarousel>

</BookCarousel>


</div>


    <div className="project-info">

    <div className="project-paragraph">

      <table>
      <tr>
      <th><img style={{width:'5rem', height: '5rem', marginTop: '0,5rem'}} src={require('../images/weather2wed.png')}></img></th>
      <th>
      <h2 style={{marginLeft: '0.5rem'}}>
          Weather2Wed
      </h2>
      </th>
      </tr>
      </table>

      <h2 style={{fontWeight: 'normal', fontStyle: 'italic'}}>A fun wedding day planning tool, vanilla JavaScript</h2>
      <h4 className="github"><a href="http://weather2wed.herokuapp.com">View on Heroku</a></h4>
      <p>Another custom-made brief, this was a CodeClan project which aimed to provide information in a novel and engaging way. Weather2Wed, which was built in line with the publish-subscribe pattern, presents historical weather summaries for locations throughout Britain and Ireland. Use of the Geograph photography API means that the app benefits from what is effectively a fuzzy search, as any location can be entered as a search term, be it a town, venue, landmark or even a waterfall. <br/><br/>
      Weather data was sourced from DarkSky using the coordinates obtained from the Geograph API. These same coordinates were also fed into the FourSquare API so as to suggest prospective hotels in and around the searched wedding location. Astronomical equations were also used to predict whether the user's chosen wedding date would fall on a full moon.
    </p>

    </div>

  <W2WCarousel>

  </W2WCarousel>


  </div>
  </div>
)
}
}


export default Portfolio;
