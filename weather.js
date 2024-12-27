class WeatherWidget {
  constructor() {
    this.weatherElement = document.querySelector('.weather');
    this.API_KEY = 'your_api_key'; // 替换为你的和风天气API密钥
    this.city = '广州'; // 默认城市
    this.init();
  }

  async init() {
    try {
      // 先获取城市ID
      const cityUrl = `https://geoapi.qweather.com/v2/city/lookup?location=${this.city}&key=${this.API_KEY}`;
      const cityResponse = await fetch(cityUrl);
      const cityData = await cityResponse.json();
      const locationId = cityData.location[0].id;

      // 获取天气信息
      const weatherUrl = `https://devapi.qweather.com/v7/weather/now?location=${locationId}&key=${this.API_KEY}`;
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();

      this.updateWeather(weatherData.now);
    } catch (error) {
      console.error('获取天气信息失败:', error);
      this.weatherElement.textContent = '天气信息获取失败';
    }
  }

  updateWeather(weather) {
    this.weatherElement.textContent =
      `${this.city} ${weather.text} ${weather.temp}°C ${weather.windDir} ${weather.windScale}级`;
  }
} 