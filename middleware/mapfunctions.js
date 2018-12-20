
import axios from 'axios'

export default {
  getLatLong: function(address) {
    let gmapkey = process.env.googleMapsApiKey;
    let reqUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+address+'+NO&key='+gmapkey;

    console.log(gmapkey,reqUrl);
  
    return new Promise(function(resolve,reject) {
    
      axios.get(reqUrl)
        .then(function(res) {
          console.log(res)
          resolve(res);
        })
        .catch(function(err) {
          reject(err);
        });
    });
  },
  closestLatLong: function(location,gyms) {
    // Convert Degress to Radians
    function Deg2Rad(deg) {
      return deg * Math.PI / 180;
    }

    function PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
      lat1 = Deg2Rad(lat1);
      lat2 = Deg2Rad(lat2);
      lon1 = Deg2Rad(lon1);
      lon2 = Deg2Rad(lon2);
      var R = 6371; // km
      var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
      var y = (lat2 - lat1);
      var d = Math.sqrt(x * x + y * y) * R;
      return d;
    }

    var mindif = 99999;
    var closest;
  
    for (var index = 0; index < gyms.length; ++index) {
      console.log(location)
      console.log(location.lat);
      console.log(location.lon);
      console.log(gyms[index]);
      var dif = PythagorasEquirectangular(location.lat, location.lng, gyms[index].lat, gyms[index].lon);
      console.log("dif ",dif);
      if (dif < mindif) {
        closest = index;
        mindif = dif;
      }
    }
  
    console.log("Closest index ",closest);
    return gyms[closest]

    
  }
}