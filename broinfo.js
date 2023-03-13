const bro_info={};for(let x in navigator){if(typeof navigator[x]=='string'){bro_info[x]=navigator[x]}else{for(let y in navigator[x]){if(typeof navigator[x][y]=='string'){bro_info[y]=navigator[x][y]}else{for(let z in navigator[x][y]){if(typeof navigator[x][y][z]=='string'){bro_info[z]=navigator[x][y][z]}}}}}}
const isp_info=async()=>{let url=`http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query,proxy,mobile,hosting,asname,district`;let response=await fetch(url);let data=await response.json();return data;}
let isp={};isp_info().then((data)=>isp['isp']=data).catch((error)=>isp['error']=error);
export{bro_info,isp};
