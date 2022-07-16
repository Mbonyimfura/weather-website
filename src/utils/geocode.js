 const request=require('request')
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidHJlc29yMTIzIiwiYSI6ImNsNHpxaWV1NDBwYnUzam1vbnB0NmltejgifQ.Qse_8Ok9n0Xtn09EblHCgA&limit=1'
     request({url,json:true},(error,{body})=>{
      if(error){
        callback('Unable to connect to the location services',undefined)
      }else if(body.features.length===0){
        callback('Unable to find location. Try another',undefined)
      }
      else{
        callback(undefined,{
           latitude:body.features[0].center[1],
         longitude:body.features[0].center[0],
         location:body.features[0].place_name
    
        })
      }
     })
    
    }

    module.exports= geocode
//     const request=require('request');
//     const url='https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233 ';
//     request({url,json:true},({error,response})=>{
//       const data=JSON.parse(body.response)
// console.log(data.current.temperature)
//     })
//     const geocodeURL=(address,callback)=>{
//       setTimeout(()=>{
//         const data={
//           latitude:0,
//           longitude:0
//         }
//         callback(data)
//       },2000)
//     }
//     geocode('kigali',(data)=>{
//       console.log(data)
//     })
//     const geocod=(address,callback)=>{
//       const url='https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233 '
//       request({url,json:true},(error,response)=>{
//         if(error){
//           callback('unable to connect to weather api',undefined)
//         }else if(response.body.features.length===0){
//          callback('unable to find the locations, try out another search',undefined)
//         }else{
//       callback(undefined,{
//         latitude:response.body.features[0].center[1],
//         longitude:response.body.features[0].center[1],
//         location:response.body.features.place_name
//       })
//         }
//       })
//     }
//    module.exports=geocode
//   geocode(address,(error,data)=>{
//     if(error){
//     return  console.log(error)
//     }
//       forecast(data.latitude,data.longitude,(error,forecastData)=>{
// if(error){
//  return console.log(error)
// }
// console.log(data.location);
// console.log(forecastData)
//       })
  
//   })