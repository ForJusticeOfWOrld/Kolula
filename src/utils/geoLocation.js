export function getDistance(lat1, long1, lat2, long2) {
  //let earthRadius = 6371;             //km
  //let earthRadius = 6371000.785;      //m
  //let earthRadius = 6365089           // Halle in m
  let earthRadius = 6366259;          // Linz in m

  let deltaLat = degToRad(lat2 - lat1);
  let deltaLong = degToRad(long2 - long1);

  lat1 = degToRad(lat1);
  lat2 = degToRad(lat2);

  let a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) + Math.sin(deltaLong / 2) * Math.sin(deltaLong / 2) * Math.cos(lat1) * Math.cos(lat2); 
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
  //return earthRadius * c;
  return Math.round(earthRadius * c * 100) / 100;
}


function degToRad(degrees) {
  return degrees * Math.PI / 180;
}