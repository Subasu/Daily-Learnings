
function success(pos){
    const coords=pos.coords;

    console.log(`Latitude:${coords.latitude}`);
    console.log(`Londitude${coords.longitude}`);
    console.log(`I am near ${coords.accuracy} location`);
}

function error(err){
    console.log(`Error:${err.code}-${err.message}`);
}

function options(){

}
    
    navigator.geolocation.getCurrentPosition(success,error,options);
