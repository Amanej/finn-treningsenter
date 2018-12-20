import axios from 'axios';
import gymData from '@/assets/json/gyms.json'

/*
console.log("Hello ");
const token = 'AIzaSyB7ycB1472JjivF02EDVh0VlHcbars6rvM';
const project_id = 'finn-treningsent-1532438053040';
*/

const url = 'http://localhost:1337/treningsenters';

export const migrateData =  () => {

    /*let url = 'https://'+project_id+'.firebaseio.com/treningsentre.json';
    url+='?access_token='+token;*/
    console.log("Url ",url);
    //console.log(axios);
    gymData.forEach((senter,i) => {
        if(i !== 2) {
            console.log(senter);
            var center = senter;
            center.latitude = senter.lat.toFixed(8);
            center.longitude = senter.lon.toFixed(8);
            center.main_price = senter.prices.toFixed(8);
            axios.post(url,senter).then(r => {
                console.log("Result ",r);
            }).catch(e => {
                console.error("Error",e);
            });
        }
    })
}

export default {migrateData}