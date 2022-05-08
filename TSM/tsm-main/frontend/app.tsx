import * as React  from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRouterDOM from  'react-router-dom' ;
import axios from 'axios';

import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import { Map, GoogleApiWrapper  } from 'google-maps-react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API_KEY  = 'AIzaSyC1QAymcINjIAuP8b-p1TIWd9xJwzh77oY';

const mapStyles = {
  width: '100%',
  height: '100%'
};


const paths = require( './2paths.jpg') ;
const map2 = require( './onemap.jpg') ;

const {useState, useEffect , useRef } = React; 
const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-project-0-seudn"
});
// for buses : chart 1 and 3 

const chart1 = sdk.createChart({
  chartId: "6267b01a-98d7-4b55-8327-379d082c4d68",
  height: "300px",
  theme: "dark"
});
const chart3 = sdk.createChart({
  chartId: "6268f15b-a105-4d7b-86e5-be963701f7d7",
  height: "300px",
  theme: "dark"
});


// chart 2 and 4 for cars
const chart2 = sdk.createChart({
  chartId: "6268ef2b-87b8-4edc-8e81-be5712edc77c",
  height: "300px",
  theme: "dark"
});

const chart4 = sdk.createChart({
  chartId: "6268f1a8-c207-4d4e-86ed-8d7e43ada64f",
  height: "300px",
  theme: "dark"
});




const { HashRouter, Route, Link, Routes } = ReactRouterDOM ;



class HomePage extends React.Component {
    constructor(props) {
      super(props);
     
    }  
  
  
       render() {
        const page  = {
          color: "#78281F", 
          backgroundColor: "#FCF3CF",
        };
        return( <div style={page}> 
          <h1> Transport System Management </h1>
                      <p>Welcome to Transport System Management, we aim to help the end users to book a ticket or see the suggestion bar.  </p>


                      <HashRouter>
             <div >
               
              <p  > Here you can select the transport method: </p> 
               <ul>
                   <li><Link to="/Buses">Buses</Link></li>      
                   <li><Link to="/Cars">Cars</Link></li> 
                 
                  
               </ul>
              <div>
                  <Routes>
                      <Route path="/Buses" element ={ < Buses /> }/>
                      <Route path="/Cars" element ={<Cars />}/> 
                     
  
                  </Routes>
              </div>
              
             </div>
          </HashRouter>
             </div> );
      }
  }


  
class Buses  extends React.Component {
  constructor(props) {
    super(props);
    
  }  
  
  async componentDidMount() {
    await chart1.render(document.getElementById("mongochart1"));
    await chart3.render(document.getElementById("mongochart3"));
    
  }

 
  

    render() {
      
       return(<div >
         <head>  <title >Buses </title>
    </head>
    <body>
        <h1  >Buses Services   </h1>
        <p> There are 4 paths that you can reach Alharam: </p>
<ul>
<li> From Um Al Qura to Ajyad Station. Path 6  </li>
    <li> From Alhajj Street to AlMarwa Station. Path 10 </li>
    <li> From Anwariya to Kaaba Station. Path2 </li>
    <li> From Haramain Train to Jabal Omar. path 7  </li>
</ul>

<img src={paths} width="300" height="300" />
<img src={map2} width="300" height="300" />




           <div >

            <p  > you can : </p> 
             <ul>
                 <li><Link to="/registration">registration</Link></li>      
                 <li><Link to="/bookbus">bookbus</Link></li> 
               
                
             </ul>
             <p>  Tickets  analysis in term of time  </p>
            <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                <div style={{minWidth: "700px"}} id="mongochart1" />
               
            </div>
            <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                <div style={{minWidth: "700px"}} id="mongochart3" />
               
            </div>
            <div>
                <Routes>
                    <Route path="/registration" element ={ < Registration /> }/>
                    <Route path="/bookbus" element ={< Bookbus />}/> 
                </Routes>
            </div>
            
           </div>
  


    </body>
</div>  );
    }
  }


  class Dashboard  extends React.Component {
    constructor(props) {
      super(props);

     
  }

  async componentDidMount() {
    await chart1.render(document.getElementById("mongochart1"));
    await chart3.render(document.getElementById("mongochart3"));
    await chart2.render(document.getElementById("mongochart2"));
    await chart4.render(document.getElementById("mongochart4"));
    
  }

  render() {
    return(
        <div>
            <h1> Management Dashboard</h1>
            <p>Buses   analysis </p>
            <p>As showing in the charts,the morning is the less crowded then other times.  </p>
            <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                <div style={{minWidth: "700px"}} id="mongochart1" />
               
            </div>

            <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                <div style={{minWidth: "700px"}} id="mongochart3" />
               
            </div>

            <p>Cars  analysis </p>
            <p>As showing in the charts,the end users usually book a trip without scuduling, so we suggest you to scudule your trip.   </p>
            <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                <div style={{minWidth: "700px"}} id="mongochart2" />
               
            </div>

            <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                <div style={{minWidth: "700px"}} id="mongochart4" />
               
            </div>
            
        </div>
     
    );
  }
} 
  

class Cars  extends React.Component {
    constructor(props) {
      super(props);
      
    }  
     
  async componentDidMount() {
    await chart2.render(document.getElementById("mongochart2"));
    await chart4.render(document.getElementById("mongochart4"));
    
  }
 
    
  
      render() {
        
         return(<div >
           <head>  <title >Cars </title>
      </head>
      <body>
          <h1  >Cars Services   </h1>
          <p> There are 2 station that you can book a car from Alharam: </p>
  <ul>
    <li> From Alsafwah.   Station1</li>
    <li> From Jabal Omar. Station2  </li>
  </ul>

 
             <div >

              <p  > you can : </p> 
               <ul>
                   <li><Link to="/registration">registration</Link></li>      
                   <li><Link to="/bookcar">book A trip for car</Link></li> 
                 
                  
               </ul>
              <div>
                  <Routes>
                      <Route path="/registration" element ={ < Registration /> }/>
                      <Route path="/bookcar" element ={< Bookcar />}/> 
                  </Routes>
              </div>
              
             </div>
             <p>cars  tickets  </p>
             <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                <div style={{minWidth: "700px"}} id="mongochart2" />
               
            </div>

            <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                <div style={{minWidth: "700px"}} id="mongochart4" />
               
            </div>
    


      </body>
  </div>  );
      }
    }
  

class Registration   extends React.Component {
  
 
    

    constructor(props) {
      super(props);
  
      this.state = {
         
        result: '',
      };
    
      }
    handleSubmitreg(event) {
        let newuser = {
          "username" : event.target.inputun.value,
          "password" : event.target.inputpass.value ,
          "mobile" : event.target.inputmob.value ,
          "Fname" : event.target.inputFn.value,
          "Lname" : event.target.inputLn.value, 
          

        }
        const uninput = document.getElementById('uninput')
        const passinput = document.getElementById('passinput')
        const mobinput = document.getElementById('mobinput')
        const Fninput = document.getElementById('Fninput')
        const Lninput = document.getElementById('Lninput')

    
        event.preventDefault()
        console.log("submitted");
        console.log(newuser);
      
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( newuser )
        };
        
        fetch('http://localhost:3000/home/register', requestOptions)
            .then(response => response.json())
            .then(data => {
              document.getElementById('result').innerHTML = data.result ;  })  
              console.log('result')
      }
      
          render() {

           
             return(<div >
                <title >registration </title>
        
      <form onSubmit={this.handleSubmitreg}>
      <h2>registration form:</h2>
                <label>
                    Username :
                    <input id="uninput" type="text"   name="inputun" />
                </label>
                <label>
                    Passworsd:
                    <input id="passinput" type="text"  name="inputpass" />  
                </label>
                <label>
                    Mobile number:
                    <input id="mobinput" type="text"  name="inputmob" />  
                </label>
                <label>
                    First Name:
                    <input id="Fninput" type="text"  name="inputFn" />  
                </label>
                <label>
                    Last Name:
                    <input id="Lninput" type="text"  name="inputLn" />  
                </label>

                <input type="submit" value="Submit" />
       
              
            </form>  
            <div >   <h2 id="result"> </h2></div>

         
      </div>  );
          }

        }



 class LogIn   extends React.Component {
  
          constructor(props) {
            super(props);
        
            this.state = {
               
              result: '',
              posts: [],
            };
            this.handleSubmit = this.handleSubmit.bind(this);
          
            }
            
          handleSubmitreg(event) {
              let user = {
                "username" : event.target.inputun.value,
                "password" : event.target.inputpass.value ,
               
                
      
              }
              const uninput = document.getElementById('uninput')
              const passinput = document.getElementById('passinput')
             
      
          
              event.preventDefault()
              console.log("submitted");
              console.log(user);
            
              const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify( user )
              };
              
              fetch('http://localhost:3000/home/login', requestOptions)
                  .then(response => response.json())
                  .then(data => {
                    document.getElementById('result').innerHTML = data.result ;  })  
                    console.log('result')
            }

            handleSubmit(event) {
              let dateinput = {
                "username" : event.target.inputun2.value ,
                
              }
              const uninput2 = document.getElementById('uninput2')
              event.preventDefault()
              console.log("submitted");
            
              const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify( dateinput )
              };
              
              fetch('http://localhost:3000/profile', requestOptions)
              .then(response => response.json())
              .then(data => { this.setState({ posts: data }); 
              console.log(data);
              console.log('Data has been received!!');
          
            })
            }
          
          
            displayBlogPost = (posts) => {
          
              if (!posts.length) return null;
          
          
              return posts.map((post, index) => (
                <div key={index} className="blog-post__display">
                  <h3>{post.path}</h3>
                  <p>{post.createdOn}</p>
                  <p>{post.time}</p>


                </div>
              ));
            };
            
                render() {
      
                 
                   return(<div >
                      <title >Log In  </title>
              
            <form onSubmit={this.handleSubmitreg}>
            <h2>LogIn form:</h2>
                      <label>
                          Username :
                          <input id="uninput" type="text"   name="inputun" />
                      </label>
                      <label>
                          Passworsd:
                          <input id="passinput" type="text"  name="inputpass" />  
                      </label>
                      
                      <input type="submit" value="Submit" />
             
                    
                  </form>  
                  <div >   <h2 id="result"> </h2></div>

                  
                  <form onSubmit={this.handleSubmit}>
            <h2>History :</h2>
            <p>   to see your history  :  </p>
            <label>
                          Username :
                          <input id="uninput2" type="text"   name="inputun2" />
                      </label>

                <input type="submit" value="Submit" />
    
            </form>

            <div className="blog-">
          {this.displayBlogPost(this.state.posts)}
        </div>  
               
            </div>  );
                }
      
              }
      

class Bookbus   extends React.Component {
   
           
            constructor(props){
              super(props);
      
                  
              
              this.state ={
                value:'path1', 
              time: 'morning',
              result:''
         
          }
            this.handleChangepath = this.handleChangepath.bind(this);
            this.handleSubmitbook = this.handleSubmitbook.bind(this);
            this.handleChangetime = this.handleChangetime.bind(this);
            this.handleSubmitmetrix = this.handleSubmitmetrix.bind(this);

        
        

            const uninput = document.getElementById('uninput')
              
            
              }
              handleChangepath(event) {
                this.setState({value: event.target.value});
              }
              handleChangetime(event) {
                this.setState({ time: event.target.value });
              }
            
          

            handleSubmitbook(event) {
                let ticket = {
                  "path" : this.state.value ,
                  "time" : this.state.time ,
                  "username" : event.target.inputun.value ,
            
        
                }
                
               
                event.preventDefault()
                console.log("submitted");
                console.log(ticket);
              
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify( ticket )
                };
                
                fetch('http://localhost:3000/home/Bus/book', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                      document.getElementById('result').innerHTML = data.result ;  })  
                      console.log('result')
              }


              handleSubmitmetrix(event) {
                let travel  = {
                  "origins" : "21.334094, 39.945512" ,
                  "destinations" : "21.416721, 39.827589" ,
                 
        
                }
          
                event.preventDefault()
                console.log("submitted");
                console.log(travel);
              
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify( travel )
                };
                
                fetch('http://localhost:3000/test', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                      document.getElementById('resultmetrix').innerHTML = data.result ;  })  
                      console.log('result')
              }
              
                  render() {
                     return(<div >
                        <title >Book A ticket </title>
                
              <form onSubmit={this.handleSubmitbook}>
              <h2>book a ticket  form:</h2>
              <label>
                    Username :
                    <input id="uninput" type="text"   name="inputun" />
                </label>
                    
                        <label>
                        Select your path :
          <select value={this.state.value} onChange={this.handleChangepath}>
          <option value="path6 ">From Um Al Qura to Ajyad Station. </option>   
            <option value="path10">From Alhajj Street to AlMarwa Station.  </option>
            <option value="path2">From Anwariya to Kaaba Station.</option>
            <option value="path7">From Haramain Train to Jabal Omar.  </option>
          </select>

        </label>

        <label> 
                        Select your time :
          <select value={this.state.time} onChange={this.handleChangetime }>
            <option value="morning ">From 8:00 am to 11:00 am. </option>
            <option value="afternoon">From 12:00pm  to 4:00 pm .  </option>
            <option value="evening">From 4:00 pm to 8:00 pm .</option>
           
          </select>
        </label>
       
                        <input type="submit" value="Submit" />
               
                      
                    </form> 

                    <div >   <h2 id="result"> </h2></div> 

                
                 
              </div>  );
                  }
        
                }
                

 class Metric   extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originLat: null,
      originLng: null,
      destLat: null,
      destLng: null,
      distance1: null,
      duration1: null,
      distance2: null,
      duration2: null
    };
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    let coordsArray = [
      { lat: 21.334094, lng:  39.945512 },
      { lat: 21.416721 , lng: 39.827589 }
    ];
    this.setState({
      originLat: coordsArray[0].lat,
      originLng: coordsArray[0].lng,
      destLat: coordsArray[0].lat,
      destLng: coordsArray[0].lng
    });

    let service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [{ lat: 21.334094, lng:  39.945512 }],
        destinations: [{lat: 21.416721 , lng: 39.827589 }],
        travelMode: "DRIVING"
      },
      (response, status) => {
        if (status !== "OK") {
          alert("Error was: " + status);
        } else {
          this.setState({
            distance1: response.rows[0].elements[0].distance.text,
            duration1:response.rows[0].elements[0].duration.text
          });
        }
      }
    );

    let service2 = new google.maps.DistanceMatrixService();
    service2.getDistanceMatrix(
      {
        origins: [{ lat: 21.471654 , lng:  39.843240 }],
        destinations: [{lat: 21.428016 , lng:  39.828845 }],
        travelMode: "DRIVING"
      },
      (response, status) => {
        if (status !== "OK") {
          alert("Error was: " + status);
        } else {
          this.setState({
            distance2: response.rows[0].elements[0].distance.text ,
            duration2:response.rows[0].elements[0].duration.text
          });
        }
      }
    );
 
  }
  componentDidMount() {
    if (!window.google) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyC1QAymcINjIAuP8b-p1TIWd9xJwzh77oY`;
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
      // Below is important.
      //We cannot access google.maps until it's finished loading
      s.addEventListener("load", e => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  render() {
    return (
      <div style={{ width: 500, height: 500 }} id={this.props.id}>
        <h1> Distance Matrix:</h1>
        <p>  Distance Matrix by using google map API  </p>
        <br />
        <label>
          Origin: Um Al Qura station
        </label>
        <br />
        <label>
          Destination:  Ajyad Station
        </label>
        <br />
        <label>Distance between the Um Al Qura station to Ajyad Station is :{this.state.distance1}</label>
        <br />
        <label>Duration between the Um Al Qura station to Ajyad Station is :{this.state.duration1}</label>
        <br />
        <br />
        <label>
          Origin: Alhajj Street station 
        </label>
        <br />
        <label>
          Destination: AlMarwa Station.
        </label>
        <br />
        <label>Distance between the Alhajj Street station to AlMarwa Station is :{this.state.distance2}</label>
        <br />
        <label>Duration between the Alhajj Street station to AlMarwa Station is :{this.state.duration2}</label>
        
      </div>
    );
  }

  

}

export class MapContainer extends React.Component <any> {
  static defaultProps = {
    center: {
      lat: 21.334094,
      lng: 39.945512
    },
    zoom: 11,
    yesIWantToUseGoogleMapApiInternals: true
  };

  render() {

    return (
      <div style={{ height: '50vh', width: '35%', justifyContent: 'flex-end' }}>
        <h1> Stations location</h1>
        <p>here you can find the location of the buses stations, you can zoom to see more  </p>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyC1QAymcINjIAuP8b-p1TIWd9xJwzh77oY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          lat={21.334094}   
          lng={39.945512}
        >
          <AnyReactComponent
            lat={21.334094}
            lng={39.945512}
            text="Um Al Qura Station Location"
          />

          <AnyReactComponent
            lat={21.471654}
            lng={39.843240}
            text="Alhajj Street Station Location"
          />
          <AnyReactComponent
            lat={21.428016}
            lng={39.828845}
            text="AlMarwa Station Station Location"
          />
              <AnyReactComponent
         
            lat={21.416721}
            lng={ 39.827589}
            text="Ajyad Station Location"
          />
        </GoogleMapReact>



      </div>
    );
  }
}


class Bookcar  extends React.Component {
            
                 
                  constructor(props){
                    super(props);
            
                        
                    
                    this.state ={
                      value:'station1',
                      time:'morning',
                      result: ''
                 
                 
                  }
                  this.handleChange = this.handleChange.bind(this);
                  this.handleSubmitbook = this.handleSubmitbook.bind(this);
                  this.handleChangetime = this.handleChangetime.bind(this);
                  const uninput = document.getElementById('uninput')
                  
                    }
                    handleChangetime(event) {
                      this.setState({ time: event.target.value });
                    }
                    handleChange(event) {
                      this.setState({value: event.target.value });
                    }
                  
                
      
                  handleSubmitbook(event) {
                      let ticket = {
                        "station" : this.state.value ,
                        "username" : event.target.inputun.value ,
                        "time" : this.state.time ,
                  
              
                      }
               
                      const usernameinput = document.getElementById('usernameinput')
                      
                      event.preventDefault()
                      console.log("submitted");
                      console.log(ticket);
                    
                      const requestOptions = {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify( ticket )
                      };
                      
                      fetch('http://localhost:3000/home/cars/book', requestOptions)
                          .then(response => response.json())
                          .then(data => {
                            document.getElementById('result').innerHTML = data.result ;  })  
                            console.log('result')
                    }
                    
                        render() {
                           return(<div >
                              <title >Book A ticket </title>
                      
                    <form onSubmit={this.handleSubmitbook}>
                    <h2>book a ticket  form:</h2>
                    <label>
                    Username :
                    <input id="uninput" type="text"   name="inputun" />
                </label>
                          
                              <label>
                              Select your path :
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="station1">From Alsafwah. </option>
                  <option value="station2"> From Jabal Omar. </option>
             
                </select>
              </label>
              <label> 
                        Select your time :
          <select value={this.state.time} onChange={this.handleChangetime }>
            <option value="morning ">From 8:00 am to 11:00 am. </option>
            <option value="afternoon">From 12:00pm  to 4:00 pm .  </option>
            <option value="evening">From 4:00 pm to 8:00 pm .</option>
            <option value="now">book now  .</option>
           
          </select>
        </label>
      
                              <input type="submit" value="Submit" />
                     
                            
                          </form>  

                          <div >   <h2 id="result"> </h2></div>
                       
                    </div>  );
                        }
              
                      }
                      
class Profile extends React.Component {


                        constructor(props) {
                          super(props);
                          this.state = { 
                            posts: []
                            };

                          
                          this.handleSubmit = this.handleSubmit.bind(this);
                          const uninput = document.getElementById('uninput')

                         
                        }

  handleSubmit(event) {
    let dateinput = {
      "username" : event.target.inputun.value ,
      
    }
  
    event.preventDefault()
    console.log("submitted");
  
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( dateinput )
    };
    
    fetch('http://localhost:3000/profile', requestOptions)
    .then(response => response.json())
    .then(data => { this.setState({ posts: data }); 
    console.log(data);
    console.log('Data has been received!!');

  })
  }


  displayBlogPost = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        <h3>{post.path}</h3>
        <p>{post.createdOn}</p>
        <p>{post.time}</p>
      </div>
    ));
  };
                        render() {
                    
                           return(
                    
                            <div>
                              <h1  > User Profile  </h1>
                             
                             <form onSubmit={this.handleSubmit}>
            <h2> Here you can viwe your Tickets history : </h2>
            <p  > please enter your username  :</p>
            <label>
                    Username :
                    <input id="uninput" type="text"   name="inputun" />
                </label>

                <input type="submit" value="Submit" />       
            </form>  

       <div className="blog-">
          {this.displayBlogPost(this.state.posts)}
        </div>       
                            </div>
                        
                           );
                        }
                      }
                      

class App extends React.Component {
    constructor(props) {
      super(props);
     
    }  
    
    render() {
  
      
      
       return(

       
        <HashRouter>
        <div>
        <h1> Transport System Management </h1>
        <p>Welcome to Transport System Management, we aim to help the end users to book a Tickets or see the Suggestion bar.  </p>
         <p> This is part of project  which it under the COE 558: Cloud and Edge Computing course </p> 
          <ul>
          
              <li><Link to="/Buses">Buses </Link></li>      
              <li><Link to="/Cars">Cars</Link></li> 
              <li><Link to="/registration">registration</Link></li>      
              <li><Link to="/bookbus">book A ticket for bus</Link></li> 
              <li><Link to="/bookcar">book A trip for car</Link></li> 
              <li><Link to="/Profile">user profile </Link></li> 
              <li><Link to="/Metric">Metric </Link></li> 
              <li><Link to="/Dashboard">Dashboard </Link></li> 
              <li><Link to="/LogIn"> LogIn </Link></li> 
              <li><Link to="/MapContainer"> MapContainer </Link></li>
            
          </ul>
         <div>
             <Routes>
                 <Route path="/Buses" element ={ < Buses /> }/>
                 <Route path="/Cars" element ={< Cars />}/> 
                 <Route path="/registration" element ={ < Registration /> }/>
                <Route path="/bookbus" element ={< Bookbus />}/> 
                <Route path="/bookcar" element ={< Bookcar />}/>
                <Route path="/Profile" element ={< Profile />}/>  
                <Route path="/Metric" element ={< Metric />}/> 
                <Route path="/Dashboard" element ={< Dashboard />}/> 
                <Route path="/LogIn" element ={< LogIn />}/> 
                <Route path="/MapContainer" element ={< MapContainer />}/> 
                

            
             </Routes>
         </div>
         
        </div>
     </HashRouter>
       );
    }
  }
  
  ReactDOM.render(< App />, document.getElementById('app'));


export default GoogleApiWrapper({
      apiKey: 'AIzaSyC1QAymcINjIAuP8b-p1TIWd9xJwzh77oY'
    })( MapContainer );

