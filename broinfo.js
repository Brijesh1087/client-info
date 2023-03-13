const broInfo={};for(let x in navigator){if(typeof navigator[x]=='string'){broInfo[x]=navigator[x]}else{for(let y in navigator[x]){if(typeof navigator[x][y]=='string'){broInfo[y]=navigator[x][y]}else{for(let z in navigator[x][y]){if(typeof navigator[x][y][z]=='string'){broInfo[z]=navigator[x][y][z]}}}}}};
let isp = {}
const getIspInfo=async()=>{let url=`http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query,proxy,mobile,hosting,asname,district`;let response=await fetch(url);let data=await response.json();return data;}
getIspInfo().then((data)=>isp['isp']=data).catch((error)=>error);


