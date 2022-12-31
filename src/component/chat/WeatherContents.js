import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from 'styled-components';
import Ellipse from '../../assets/icons/Ellipse.png';
import Sunrise from '../../assets/icons/sunrise.png';
import Sunset from '../../assets/icons/sunset.png';
import Cloud from '../../assets/icons/cloud.png';
import Cloud_thunder from '../../assets/icons/cloud_thunder.png';
import Doublecloud from '../../assets/icons/doublecloud.png';
import Hazzy from '../../assets/icons/hazzy.png';
import Rainy from '../../assets/icons/rainy.png';
import Rainy_day from '../../assets/icons/rainy_day.png';
import Snow from '../../assets/icons/snow.png';
import Sunny from '../../assets/icons/sunny.png';



const api = {
	key: "de96b0d5b41ea37dba4fadd2f9b11170",
	base: "https://api.openweathermap.org/data/2.5/",
};

export default function WeatherContents() {


	const [weather, setWeather] = useState("");

	const getCurrentLocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			//현재위치
			let lat = position.coords.latitude;
			let lon = position.coords.longitude;
			console.log("현재 위치", lat, lon);
			const url = `${api.base}weather?lat=${lat}&lon=${lon}&appid=${api.key}&units=metric`;
			axios.get(url).then((responseData) => {
				const data = responseData.data;
				console.log(data);
				setWeather({
					id: data.weather[0].id, //날씨 조건
					main: data.weather[0].main, //날씨
					temp_max: data.main.temp_max, // 최고기온
					temp_min: data.main.temp_min, // 최저기온
					temp: data.main.temp, // 현재기온
					sunrise: data.sys.sunrise, //일출시간
					sunset: data.sys.sunset, //일몰시간
					name: data.name, //도시이름
					dt: data.dt, //예보시간
					icon: data.weather[0].icon,
					loading: false,
				});
			});
		});
	};

	useEffect(() => {
		getCurrentLocation();
	}, []);



	const timestamp = weather.dt
	let myDate = new Date(timestamp * 1000);
	let timedate = (myDate.getMonth() + 1).toString().padStart(2, '0') + "월" + myDate.getDate().toString().padStart(2, '0') + "일" +
		" " + myDate.getHours().toString().padStart(2, '0') + "시" + myDate.getMinutes().toString().padStart(2, '0') + "분";

	const sunrisetime = weather.sunrise
	let myDate2 = new Date(sunrisetime * 1000);
	let sunrisedate = myDate2.getHours().toString().padStart(2, '0') + "시" + myDate2.getMinutes().toString().padStart(2, '0') + "분";

	const sunsettime = weather.sunset
	let myDate3 = new Date(sunsettime * 1000);
	let sunsetdate = myDate3.getHours().toString().padStart(2, '0') + "시" + myDate3.getMinutes().toString().padStart(2, '0') + "분";

	const selectIcon = () => {

		if (weather.id >= 801) { return <S_WeathrImg src={Cloud} alt='구름'></S_WeathrImg> }
		let iconId = parseInt(weather.id / 100).toFixed(0);

		switch (iconId) {
			case "802":
				return <S_WeathrImg src={Sunny} alt='날씨이미지'></S_WeathrImg>
			case "2":
				return <S_WeathrImg src={Cloud_thunder} alt='뇌우'></S_WeathrImg>
			case "3":
				return <S_WeathrImg src={Rainy} alt='이슬비'></S_WeathrImg>
			case "5":
				return <S_WeathrImg src={Rainy_day} alt='비'></S_WeathrImg>
			case "6":
				return <S_WeathrImg src={Snow} alt='눈'></S_WeathrImg>
			case "7":
				return <S_WeathrImg src={Hazzy} alt='흐림'></S_WeathrImg>
			case "8":
				return <S_WeathrImg src={Sunny} alt='맑음'></S_WeathrImg>
		}
	};


	return (
		<>
			<S_WeatherWrap>
				<S_Title>today's weather</S_Title>
				<S_Cont>
					<S_LeftCont>
						<S_Weather>날씨</S_Weather>
						{selectIcon()}
						<S_WeatherInfo>{weather.main}</S_WeatherInfo>
					</S_LeftCont>
					<S_RightCont>
						<S_Temp>
							<li>
								<S_HighestTemp>최고기온</S_HighestTemp>
								<S_HighestCount>{weather.temp_max}<S_Celsius src={Ellipse} /></S_HighestCount>

							</li>
							<li>
								<S_MinimumTemp>최저기온</S_MinimumTemp>
								<S_MinimumCount>{weather.temp_min}<S_Celsius src={Ellipse} /></S_MinimumCount>

							</li>
							<li>
								<S_TempCurrent>현재기온</S_TempCurrent>
								<S_TempCurrentCount>{weather.temp}<S_Celsius src={Ellipse} /></S_TempCurrentCount>

							</li>
						</S_Temp>

						<S_Location>
							<S_ForecastTime>{weather.name}</S_ForecastTime>
							<S_CurrentLocation>{timedate}</S_CurrentLocation>
						</S_Location>

						<S_Sun>
							<S_Sunrise>
								<S_SunriseImg src={Sunrise} alt=''></S_SunriseImg>
								<S_SunInfo>일출 : {sunrisedate}</S_SunInfo>
							</S_Sunrise>
							<S_Sunset>
								<S_SunsetImg src={Sunset} alt=''></S_SunsetImg>
								<S_SunInfo>일몰 : {sunsetdate}</S_SunInfo>
							</S_Sunset>
						</S_Sun>
					</S_RightCont>
				</S_Cont>
			</S_WeatherWrap>
		</>
	);
}


const S_WeatherWrap = styled.div`
width: 358px;
height: 166px;
margin: 10px;
border-radius: 5px;
background-color: #FEFCF3;
font-weight: 400;
font-size: 14px;
line-height: 14px;
color: #5C6145;
`

const S_Title = styled.p`
display: flex;
width:111px;
justify-content: center;
margin-left: 124px;
padding: 1px;
font-size: 12px;
box-sizing: border-box;
border-bottom: 1px solid #5C6145;
`

const S_LeftCont = styled.div`
margin-top:20px;
width: 68px;
height: 120px;
`
const S_Weather = styled.span`
font-size: 14px;
margin-left:28px;
margin-bottom:6px;
display:inline-block;
`
const S_WeathrImg = styled.img`
margin-left:9px;
width: 64px;
height: 64px;
`

const S_WeatherInfo = styled.span`
font-size: 12px;
margin-left:29px;
margin-top:12px;
display:inline-block;
`

const S_RightCont = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top:20px;
`
const S_Temp = styled.ul`
    //background: salmon;
    grid-column-start : 1;
    grid-column-end : 3;
    display: flex;
    justify-content: space-between;
    & li {
        display: flex;
        flex-direction: column;
        //background: white;
    }
`

const S_HighestTemp = styled.span`
margin-left:28px;
`

const S_MinimumTemp = styled.span`
`

const S_HighestCount = styled.span`
font-size: 20px;
line-height: 25px;
margin-left:30px;
margin-top:18px;
`

const S_MinimumCount = styled.span`
font-size: 20px;
line-height: 25px;
margin-left:2px;
margin-top:18px;
`

const S_TempCurrentCount = styled.span`
font-size: 20px;
line-height: 25px;
margin-left:2px;
margin-top:18px;
`

const S_Celsius = styled.img`
width: 7px;
height: 7px;
`
const S_TempCurrent = styled.span`
margin-right:28px;
`

const S_Location = styled.div`
    //background: green;
`

const S_ForecastTime = styled.p`
margin-left:28px;
margin-top:18px;
`

const S_CurrentLocation = styled.p`
margin-left:28px;
margin-top:10px;
margin-bottom:10px;
width:161px;
height: 13px;
color: #93928C;
font-size: 12px;
`

const S_Sun = styled.div`
    //background: yellow;
`

const S_Sunrise = styled.div`
display: flex;
margin-left:-10px;
margin-top:18px;
`
const S_Sunset = styled.div`
display: flex;
margin-left:-10px;
margin-top:10px;
margin-bottom:10px;
`

const S_SunInfo = styled.div`
margin-left:6px;
width: 80px;
height: 14px;
font-size: 12px;
line-height: 14px;
color: #FB5C00;
opacity: 0.6;
`

const S_SunriseImg = styled.img`
width: 14px;
height: 14px;
`

const S_SunsetImg = styled.img`
width: 14px;
height: 14px;
`

const S_Cont = styled.div`
    display: flex;
    justify-content: space-between;
`