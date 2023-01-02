let myKey='4f6e8d7e8a194dc89f8163938221410';
let searchButn = document.getElementById('searchButn');
let searchInput = document.getElementById('searchInput');
let countryCurrent = document.getElementById('country');
let CurrentHighTemp = document.getElementById('high-temp');
let iconCuttentTemp = document.getElementById('iconCuttentTemp');
let currentDescrip = document.querySelector('.currentDescrip');
let currentHistory = document.querySelector('.history');
let currentDay = document.querySelector('.day');
let currentWind = document.querySelector('.currentWind');
let currentHumidity = document.querySelector('.currentHumidity');
let whereWind = document.querySelector('.whereWind')
let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(currentDescrip);

searchButn.addEventListener('click',async function(){
    let weatherData = await getApi(searchInput.value);

    console.log(weatherData);
    // console.log(weatherData.location.name);
    // console.log(weatherData.forecast.forecastday);

    let {name , localtime} = weatherData.location;
    let {humidity,temp_c,wind_kph,wind_dir } =weatherData.current;
     let{icon,text}= weatherData.current.condition;
     let d = new Date(localtime);
    let day = weekday[d.getDay()];
    // console.log(day);//6
    // console.log(wind_dir);

    //  console.log(name);
    //  console.log(localtime);
    //  console.log(humidity);
    //  console.log(temp_c);
    //  console.log(wind_kph);
    //  console.log(last_updated);
    //  console.log(icon);
    //  console.log(text);
    countryCurrent.textContent= name;
    CurrentHighTemp.innerHTML =  `${temp_c}<sup>o</sup><span> C </span>`;
    iconCuttentTemp.setAttribute('src',`https:${icon}`);
    currentDescrip.textContent = text;
    currentHistory.textContent = localtime ;
    currentDay.textContent = day
    currentWind.innerHTML=`${wind_kph}<span>KmH</span>`;
    currentHumidity.textContent = humidity;
    whereWind.textContent = wind_dir





   // two day other
    let history1= document.querySelector('.history1');
    let temLarge1= document.querySelector('.temLarge1');
    let temSmall1= document.querySelector('.temSmall1');
    let discreption1 = document.querySelector('.discreption1')
    let day1 = document.querySelector('.day1');
    let icon1= document.querySelector('.icon1')


    let history2= document.querySelector('.history2');
    let temLarge2= document.querySelector('.temLarge2');
    let temSmall2= document.querySelector('.temSmall2');
    let discreption2 = document.querySelector('.discreption2')
    let day2 = document.querySelector('.day2');
    let icon2= document.querySelector('.icon2')


    let history3= document.querySelector('.history3');
    let temLarge3= document.querySelector('.temLarge3');
    let temSmall3= document.querySelector('.temSmall3');
    let discreption3 = document.querySelector('.discreption3')
    let day3 = document.querySelector('.day3');
    let icon3= document.querySelector('.icon3')



    let  arrayOfNextDay = weatherData.forecast.forecastday;

    
    for (let i = 0 ; i < arrayOfNextDay.length; i++) {
        let firDay = arrayOfNextDay[1].date;
        
        history1.innerHTML=firDay
        // console.log(firDay);
        let d1 = new Date(firDay);
        let dayIndex1 = weekday[d1.getDay()];
        day1.innerHTML= dayIndex1
        console.log(dayIndex1);
        let {maxtemp_c ,mintemp_c ,maxwind_kph,avghumidity}=arrayOfNextDay[1].day;

        temLarge1.innerHTML=`${maxtemp_c} <sup>o</sup> C`
        temSmall1.innerHTML=`${mintemp_c} <sup>o</sup> C`
        // console.log(maxtemp_c);
        // console.log(mintemp_c);
        // console.log(maxwind_kph);
        // console.log(avghumidity);
        let {text,icon}=arrayOfNextDay[1].day.condition;
        discreption1.innerHTML=text;
        
        icon1.setAttribute('src',`https:${icon}`);
        console.log(icon1);
        console.log(icon);

        //second day
        let secDay = arrayOfNextDay[2].date;
        history2.innerHTML=secDay
        console.log(secDay);
        let d2 = new Date(secDay);
        let dayIndex2 = weekday[d2.getDay()];
        day2.innerHTML= dayIndex2;
        console.log(dayIndex2);

        let maxtemp_c2=arrayOfNextDay[2].day.maxtemp_c;
        let mintemp_c2=arrayOfNextDay[2].day.mintemp_c;

        temLarge2.innerHTML=`${maxtemp_c2} <sup>o</sup> C`;
        temSmall2.innerHTML=`${mintemp_c2} <sup>o</sup> C`;

        let text2 = arrayOfNextDay[2].day.condition.text;
        discreption2.innerHTML=text2
        console.log(text2);
        let iconApi2 =  arrayOfNextDay[2].day.condition.icon;
       
        icon2.setAttribute('src',`https:${iconApi2}`);
        // therd day

        let therdDay = arrayOfNextDay[3].date;
        history3.innerHTML=therdDay
        console.log(therdDay);
        let d3 = new Date(therdDay);
        let dayIndex3 = weekday[d3.getDay()];
        day3.innerHTML= dayIndex3;
        console.log(dayIndex3);

        let maxtemp_c3=arrayOfNextDay[3].day.maxtemp_c;
        let mintemp_c3=arrayOfNextDay[3].day.mintemp_c;

        temLarge3.innerHTML=`${maxtemp_c3} <sup>o</sup> C`;
        temSmall3.innerHTML=`${mintemp_c3} <sup>o</sup> C`;

        let text3 = arrayOfNextDay[3].day.condition.text;
        discreption3.innerHTML=text3
        console.log(text2);
        let iconApi3 =  arrayOfNextDay[3].day.condition.icon;
       
        icon3.setAttribute('src',`https:${iconApi3}`);
        
    }
    
    



});

async function getApi(countary){
    
    let apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${countary}&days=3`);
    let fianalRuslt= await apiResponse.json();
    // console.log(fianalRuslt);
    return fianalRuslt

}

let containerTemb =document.querySelector('.containerTemb');
searchButn.addEventListener('click',function(){
    containerTemb.classList.remove('d-none')
    containerTemb.classList.add('d-block')
})

let closeIcon=document.getElementById('close-icon');
closeIcon.addEventListener('click',function(){
    searchInput.value='';
})