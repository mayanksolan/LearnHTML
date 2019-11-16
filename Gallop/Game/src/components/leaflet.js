import React from 'react';
import { compose, withProps,lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import SearchBox from 'react-google-maps/lib/components/places/SearchBox';
import _ from 'lodash'
const GOOGLE_MAP_API_KEY= 'AIzaSyCYIexFEkK7e75RKiy0sMp_wEOBEl6BVh0'

const MyMapComponent = compose(
    withProps({
      containerElement: <div style={{ height: `1000px` }} />,
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,visualization,places&key="+GOOGLE_MAP_API_KEY,
      loadingElement: <div style={{ height: `100%` }} />,
      mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap
      )((props) =>
      <GoogleMap
        defaultZoom={5}
        ref={props.onMapLoad}
        defaultCenter={{ lat:23.69342, lng: 77.5988918 }}
        mapTypeId= {'hybrid'}
        onBoundsChanged={props.onBoundsChanged}
        options={{
          styles: [],
          rotateControl:true,
          rotateControlOptions: {
            position: window.google.maps.ControlPosition.BOTTOM_CENTER
          },
          scaleControl:true,
          streetViewControl:false,
          mapTypeControl:true,
          mapTypeControlOptions:{
            style: window.google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: window.google.maps.ControlPosition.TOP_RIGHT
          },
          zoomControl: true,
          minZoom: 3,
          zoomControlOptions: {
            position: window.google.maps.ControlPosition.RIGHT_BOTTOM
          },
          fullscreenControlOptions: {
            position: window.google.maps.ControlPosition.BOTTOM_RIGHT
          },
				}}
				
      >
			

      <SearchBox
        ref={props.onSearchBoxMounted}
        bounds={props.bounds}
        controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={props.onPlacesChanged}
        >
				
        <div className={"searchPanel"}>
            <input
            type="text"
            placeholder="Search Here"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `250px`,
              height: `32px`,
              padding: `0 12px`,
              margin: '10px',
              borderRadius: `20px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`
            }}
        />
        <i className={"fa fa-search"}
         style={{
        top: '0px',
        position: 'relative',
        left: '-36px',
        right: '0px',
        color:'#999'
        }} ></i>
        </div>
      </SearchBox>
       {props.markers.map((marker, index) =>
          <Marker key={index} position={marker.position} />
         )}
       //{props.isMarkerShown && <Marker position={{ lat: 23.69342, lng: 77.5988918 }} onClick={props.onMarkerClick} />}
      </GoogleMap>
    );


export  default  class MyMap extends React.Component {
 constructor(props){
   super(props)
   this.state={
        isMarkerShown:false,
         bounds: null,
         center:{
          lat:23.69342,
          lng: 77.5988918
         },
           markers: []
      }
   }

  componentDidMount() {
		this.delayedShowMarker()
		 // Try HTML5 geolocation.

		 console.log(this._map)
		 if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				this._map.setCenter(pos);
			});
		 
	}
  }


    delayedShowMarker = () => {
      setTimeout(() => {
      this.setState({ isMarkerShown: true })
      }, 3000)
    }

    handleMarkerClick = () => {
      this.setState({ isMarkerShown: false })
      this.delayedShowMarker()
    }

    _handleMapLoad=(map)=>{
      console.log('map',map)
      this._map = map;
    }

    onSearchBoxMounted = (ref) => {
      this._searchBox = ref;
    };
    onBoundsChanged=()=>{
    this.setState({
         bounds: this._map.getBounds(),
         center: this._map.getCenter(),
      })
    }

  onPlacesChanged=() =>{
    const places = this._searchBox.getPlaces();
    const bounds = new window.google.maps.LatLngBounds();

    places.forEach(place => {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport)
      } else {
       bounds.extend(place.geometry.location)
      }
    });

    const nextMarkers = places.map(place => ({
        position: place.geometry.location,

    }));

    const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

    this.setState({
        center: nextCenter,
        markers: nextMarkers,
    });

    this._map.fitBounds(bounds);
  }


   render() {
    return(
    <React.Fragment>
      <MyMapComponent
         ref={instance => {this.child = instance;}}
         isMarkerShown={this.state.isMarkerShown}
         onMarkerClick={this.handleMarkerClick}
         onMapLoad={this._handleMapLoad}
         onSearchBoxMounted={this.onSearchBoxMounted}
         onPlacesChanged={this.onPlacesChanged}
         bounds={this.state.bounds}
         onBoundsChanged={this.onBoundsChanged}
         markers={this.state.markers}
      />
     </React.Fragment>
    )
  }
}