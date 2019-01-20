import React from "react";
import ReachCarousel from './ReachCarousel.js';
import Weather2Carousel from './Weather2Carousel.js';
import FixtureCarousel from './FixtureCarousel.js';
import W2WCarousel from './W2WCarousel.js';
import BookCarousel from './BookCarousel.js';
import FindasaurCarousel from './FindasaurCarousel.js';
import $ from 'jquery';


class Portfolio extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  projectScrollingScript(numProjects){

    function applyBorder(element){

      element.css({textAlign: 'center', fontWeight: 540, paddingBottom: '1%', color: '#2F4F4F', borderBottom: 'solid', borderBottomWidth: 3, borderColor: '#334d50'})

    }

    function disableBorder(element){

      element.removeAttr( 'style' );

      element.css({display: 'inline-block', width: '11%', textAlign: 'center', color: 'black', paddingBottom: '1%'})


    }


    $(document).ready(function() {

      var activeSpan = $("div.selected");

      applyBorder(activeSpan)


  $("#cf7_controls-projects").on('click', 'div', function() {

    var newDiv = $(this).index();

    var currentIndex = $("div.selected").index();

    var currentSelectedDiv = $(`.${currentIndex}`)


    currentSelectedDiv.attr('id', 'hidden');
    currentSelectedDiv.removeClass('slide-in');
    currentSelectedDiv.removeClass('slide-out');

    // console.log("numProjects", numProjects);
    // $('#highlighted').each(function(){
    //
    //   $(this).attr('id', 'hidden');
    //
    // })

    var currentHighlightedDiv = $(`.${newDiv}`)

    $(`.${newDiv}`).attr('id', 'highlighted')
    $(`.${newDiv}`).addClass('slide-in')
    $(`.${newDiv}`).addClass('slide-out')

    $("#cf7_controls-projects div").removeClass("selected");
    $(this).addClass("selected");

    disableBorder($("#cf7_controls-projects div"));
    applyBorder($(this));


  });
});
  }

  render(){

    this.projectScrollingScript(5);

    return(

  <div className="projects">

    <h1 className="headline"> My portfolio</h1>

    <p id="cf7_controls-projects" style={{justifyContent: 'center', marginBottom: '4%'}}>
      <div className="selected project-header" style={{display: 'inline-block', width: '11%', textAlign: 'center', paddingBottom: '1%'}}>Py./JS</div>
      <div className="project-header" style={{display: 'inline-block', width: '11%', textAlign: 'center', paddingBottom: '1%'}}>JS/Py.</div>
      <div className="project-header" style={{display: 'inline-block', width: '11%', textAlign: 'center', paddingBottom: '1%'}}>JS</div>
      <div className="project-header" style={{display: 'inline-block', width: '11%', paddingBottom: '1%'}}>Java</div>
      <div className="project-header" style={{display: 'inline-block', width: '11%', paddingBottom: '1%'}}>Ruby</div>
      <div className="project-header" style={{display: 'inline-block', width: '11%', paddingBottom: '1%'}}>JS</div>
    </p>

    <div id='highlighted' className="project-info 0">

    <div className="project-paragraph reach-paragraph">

      <table>
      <tr>
      <th className="project-logo"><img className="reach-image" src={require('../images/reach.png')}></img></th>
      <th>
      <h2 className="project-name" style={{marginLeft: '0.5rem'}}>
          Reach
      </h2>
      </th>
      </tr>
      </table>

      <h2 className="project-blurb" style={{fontWeight: 'normal', fontStyle: 'italic'}}>A modern social networking and dating app for millennials</h2>

      <table className="reach-programming-logos">
      <tr style={{justifyContent: 'center'}}>
      <th>
        <img style={{width:'3.5rem', height: '3.5rem'}} src={require('../images/python.png')}></img>
      </th>
      <th>
        <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/django.png')}></img>
      </th>
      <th>
        <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/reactjs.png')}></img>
      </th>
      <th>
        <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/jquery.png')}></img>
      </th>
      <th>
        <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/psql.png')}></img>
      </th>
      </tr>
      </table>

      <h4 className="github"><a href="https://www.github.com/jah1603/Reach--">View on GitHub</a></h4>
      <p className="project-description">I took on this project with two colleagues based on our overarching vision of a networking app for hyperconnected social influencers. We set up a ReactJS frontend to consume the Python backend using Axios. <span style={{fontStyle: 'italic'}}>Reach</span> is a full-stack dating platform that measures users' social reach through web scraping, letting them find, match and interact with other users according to lifestyle preferences, location and age.<br/><br/>
      <span style={{fontStyle: 'italic'}}>Reach</span>, which features JSON web token authentication, a Django REST API, geolocation, swipeable cards and email activation, retrieves users' total social reach by scraping their follower count on three major social media platforms. All of this underpins a vibrant UI designed to appeal to millennials.</p>

    </div>

    <ReachCarousel>

    </ReachCarousel>

  </div>

  <div id="hidden" className="project-info 1">

  <div className="project-paragraph-findasaur">

    <table>
    <tr>
    <th className="project-logo"><img className="findasaur-image" src={require('../images/dinogif.gif')}></img></th>
    <th>
    <h2 className="project-name" style={{marginLeft: '0.5rem'}}>
        Findasaur
    </h2>
    </th>
    </tr>
    </table>

    <h2 className="project-blurb" style={{fontWeight: 'normal', fontStyle: 'italic'}}> An educational Apple and Android app which lets users explore the prehistoric world</h2>

    <table className="weather2-programming-logos">
    <tr>
    <th>
      <img style={{width:'4rem', height: '3.5rem'}} src={require('../images/react_native.png')}></img>
    </th>
    <th>
      <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/apple.png')}></img>
    </th>
    <th>
      <img style={{width:'3.5', height: '3.5rem', marginLeft: '0.2rem'}} src={require('../images/android.png')}></img>
    </th>
    <th>
      <img style={{width:'3.5rem', height: '3.5rem'}} src={require('../images/python.png')}></img>
    </th>
    <th>
      <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.5rem'}} src={require('../images/expo.png')}></img>
    </th>
    </tr>
    </table>

    <h4 className="github"><a href="https://play.google.com/store/apps/details?id=com.levelapps.findasaur">View on Google Play store</a></h4>
    <h4 className="github"><a href="https://github.com/jah1603/Di">View code on GitHub</a></h4>
    <a class="button3" href="#openModal2">Watch iPhone demo</a>

<div id="openModal2" class="modalbg" style={{alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
<div class="dialog">
  <a href="#close" title="Close" class="close2">X</a>
  <video width="45%" style={{borderRadius: 43}} controls>
            <source src={require("../images/findasaur.mp4")} type="video/mp4"></source>
            <source src={require("../images/findasaur.mp4")} type="video/ogg"></source>
            Your browser does not support the video tag.
          </video>
</div>
</div>

    <p className="project-description">I set myself the target to make an app over the Christmas and New Year break in order to keep my programming skills sharp. Out of this came <span style={{fontStyle: 'italic'}}>Findasaur</span>, a ReactNative Android and iOS app designed to educate inquisitive young minds via a digital <span style={{fontStyle: 'italic'}}>exhibition</span> featuring hundreds of dinosaurs and thousands of mapped fossils. This project was a collaboration with two other talented developers: David Pears and Stephen Rooney.<br/><br/>
    The app is built around a sleek and elegant front end designed to be minimalist and engaging. Three APIs (Wikipedia, The Paleobiology Database and Google Maps) are used to fetch dinosaur data. That data is initially presented (responsively) in preview form in either a scrolling <span style={{fontStyle: 'italic'}}>address book</span> or a list, with each clickable preview image leading to a page with more details. Users can toggle between the two views as desired. <span style={{fontStyle: 'italic'}}>Findasaur</span> also offers a full exhibition of fossils which are plotted on an interactive map, allowing users to discover where the paleontological hotspots are located. As a final feature, the app makes use of a predictive search bar and the ability to favourite individual dinosaurs by era, which allows users to remember their most interesting finds. <span style={{fontStyle: 'italic'}}>Findasaur</span> sourced additional data for 270 dinosaurs from the Natural History Museum website via scraping methods in Python. <br/><br/>
    </p>

  </div>

<FindasaurCarousel>

</FindasaurCarousel>

</div>


    <div id="hidden" className="project-info 2">

    <div className="project-paragraph-weather2">

      <table>
      <tr>
      <th className="project-logo"><img className="weather2-image" src={require('../images/weather2.gif')}></img></th>
      <th>
      <h2 className="project-name" style={{marginLeft: '0.5rem'}}>
          Weather2...
      </h2>
      </th>
      </tr>
      </table>

      <h2 className="project-blurb" style={{fontWeight: 'normal', fontStyle: 'italic'}}> A suite of activity-related mobile weather apps, available on Android</h2>

      <table className="weather2-programming-logos">
      <tr>
      <th>
        <img style={{width:'4rem', height: '3.5rem'}} src={require('../images/react_native.png')}></img>
      </th>
      <th>
        <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/javascript.png')}></img>
      </th>
      <th>
        <img style={{width:'3.5', height: '3.5rem', marginLeft: '0.2rem'}} src={require('../images/android.png')}></img>
      </th>
      <th>
        <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/genymotion.png')}></img>
      </th>
      <th>
        <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.5rem'}} src={require('../images/expo.png')}></img>
      </th>
      </tr>
      </table>

      <h4 className="github"><a href="https://play.google.com/store/apps/developer?id=Weather2">View on Google Play store</a></h4>
      <a class="button2" href="#openModal">Launch video</a>

<div id="openModal" class="modalbg" style={{alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
  <div class="dialog">
    <a href="#close" title="Close" class="close">X</a>
    <video width="45%" controls>
              <source src={require("../images/W2BBQ.mp4")} type="video/mp4"></source>
              <source src={require("../images/W2BBQ.mp4")} type="video/ogg"></source>
              Your browser does not support the video tag.
            </video>
  </div>
</div>
    <p className="project-description">My motivation to do this project stemmed from a desire to hone my front-end development skills and create something visually stimulating and pleasing to the eye. Consisting of <span style={{fontStyle: 'italic'}}>Weather2Walk</span>, <span style={{fontStyle: 'italic'}}>Weather2BBQ</span>, <span style={{fontStyle: 'italic'}}>Weather2Fish</span>, <span style={{fontStyle: 'italic'}}>Weather2Golf</span> and <span style={{fontStyle: 'italic'}}>Weather2Wed</span>, this mobile app series was built in ReactNative using Expo in combination with emulators in Genymotion and Android Studio. <br/><br/>
    The apps use four APIs (DarkSky, Geograph, FourSquare and Google Maps) to fetch relevant data. Weather data is presented in the form of historical averages obtained through a number of sequential requests, and prospective venues for the searched location are presented on an interactive map. <span style={{fontStyle: 'italic'}}>Weather2Walk</span> benefits from a fuzzy search, meaning highly specific place names (waterfalls, forests or small hills) can be searched, while <span style={{fontStyle: 'italic'}}>Weather2Golf</span> offers hourly weather snapshots, helping golfers to come to an informed decision on their tee-off time.<br/><br/>
    </p>


    </div>

  <Weather2Carousel>

  </Weather2Carousel>

  </div>


  <div id="hidden" className="project-info 3">

  <div className="project-paragraph fixture-pal-paragraph">

    <table>
    <tr>
    <th className="project-logo"><img className="fixture-pal-image" src={require('../images/football-boots.png')}></img></th>
    <th>
    <h2 className="project-name" style={{marginLeft: '0.5rem'}}>
        FixturePal
    </h2>
    </th>
    </tr>
    </table>

    <h2 className="project-blurb" style={{fontWeight: 'normal', fontStyle: 'italic'}}> A sports match schedule generator and results tracker</h2>

    <table className="fixture-programming-logos">
    <tr>
    <th>
      <img style={{width:'4rem', height: '3.5rem'}} src={require('../images/java.png')}></img>
    </th>
    <th>
      <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/psql.png')}></img>
    </th>
    </tr>
    </table>

    <h4 className="github"><a href="https://github.com/jah1603/FixturePal/blob/master/src/main/java/models/League.java">View on GitHub</a></h4>
    <p className="project-description">This project dates back to my time at CodeClan, where I created a custom brief along with two colleagues. The end product - <span style={{fontStyle: 'italic'}}>FixturePal</span> - can generate the entire match schedule for a sports season (including alternating home and away games for each team) using a round-robin algorithm. <br/><br/>
    As well as being able to create a league of teams and enter match scores, users can keep track of team performance in a given league courtesy of a league table filtered by points, goal difference and goals scored. An option for logging match events in short match reports also exists, thereby enabling users to take note of goalscorers and disciplinary records.
  </p>

  </div>

<FixtureCarousel>

</FixtureCarousel>


</div>


<div id="hidden" className="project-info 4">

<div className="project-paragraph story-paragraph">

  <table>
  <tr>
  <th className="project-logo"><img className="story-image" src={require('../images/books.png')}></img></th>
  <th>
  <h2 className="project-name" style={{marginLeft: '0.5rem'}}>
      Invent.story
  </h2>
  </th>
  </tr>
  </table>

  <h2 className="project-blurb" style={{fontWeight: 'normal', fontStyle: 'italic'}}>A lightweight inventory and profit tracker built with independent booksellers in mind</h2>

  <table className="story-programming-logos">
  <tr>
  <th>
    <img style={{width:'2.5rem', height: '2.5rem'}} src={require('../images/ruby.png')}></img>
  </th>
  <th>
    <img style={{width:'4rem', height: '4rem', marginLeft: '1rem'}} src={require('../images/sinatra.png')}></img>
  </th>
  <th>
    <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/psql.png')}></img>
  </th>
  </tr>
  </table>

  <h4 className="github"><a href="http://invent-story.herokuapp.com">View on Heroku</a></h4>
  <p className="project-description">An application which enables a bookseller to monitor stock levels, profit, publishers and genres. A PSQL database was used for data persistence, allowing the user to create, edit and delete books and publishers as desired. It is also possible to browse stock by genre and record stock sales/replenishment at the click of a button.<br/><br/>
</p>

</div>

<BookCarousel>

</BookCarousel>


</div>


    <div id="hidden" className="project-info 5">

    <div className="project-paragraph weather2wed-paragraph">

      <table>
      <tr>
      <th className="project-logo"><img className='w2w-image' src={require('../images/weather2wed.png')}></img></th>
      <th>
      <h2 className="project-name" style={{marginLeft: '0.5rem'}}>
          Weather2Wed
      </h2>
      </th>
      </tr>
      </table>

      <h2 className="project-blurb" style={{fontWeight: 'normal', fontStyle: 'italic'}}>A fun wedding day planning tool, vanilla JavaScript</h2>

      <table className="w2w-programming-logos">
      <tr>
      <th>
        <img style={{width:'2.5rem', height: '2.5rem'}} src={require('../images/javascript.png')}></img>
      </th>
      <th>
        <img style={{width:'4rem', height: '4rem', marginLeft: '1rem'}} src={require('../images/node.png')}></img>
      </th>
      </tr>
      </table>

      <h4 className="github"><a href="http://weather2wed.herokuapp.com">View on Heroku</a></h4>
      <p className="project-description">Another self-penned brief, this CodeClan group project aimed to inform and entertain in a novel and engaging way. <span style={{fontStyle: 'italic'}}>Weather2Wed</span>, built in line with the publish-subscribe pattern, presents historical weather snapshots for potential wedding locations throughout Britain and Ireland.<br/><br/>
      Weather data was sourced from DarkSky via coordinates from Geograph, while FourSquare and Leaflet were used to map suggested hotels and venues in and around the prospective wedding location. <span style={{fontStyle: 'italic'}}>Weather2Wed</span> also predicts whether the wedding date falls on a full moon, via astronomy calculations.
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
