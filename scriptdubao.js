const defaultLocation = {
    lat: 21.7225,
    lon: 104.9113,
    name: "Thành phố Yên Bái",
};

const locationMap = {
    "Mu Cang Chai": {
        "Mồ Dề": { lat: 21.7008, lon: 104.1333 },
        "La Pán Tẩn": { lat: 21.7070, lon: 104.1753 },
        "Chế Tạo": { lat: 21.5946, lon: 104.0203 },
    },
    "Yen Bai": {
        "Nguyễn Thái Học": { lat: 21.7225, lon: 104.9113 },
        "Hồng Hà": { lat: 21.7345, lon: 104.9052 },
        "Minh Tân": { lat: 21.7402, lon: 104.9145 },
    },
    "Tran Yen": {
        "Tân Đồng": { lat: 21.6876, lon: 105.0567 },
        "Cường Thịnh": { lat: 21.6637, lon: 105.0378 },
        "Hưng Thịnh": { lat: 21.6468, lon: 105.0549 },
    },
    "Van Chan": {
        "Sơn Thịnh": { lat: 21.5098, lon: 104.7131 },
        "Suối Giàng": { lat: 21.5770, lon: 104.7102 },
        "Tú Lệ": { lat: 21.5770, lon: 104.4447 },
    },
};

document.getElementById("districtSelect").addEventListener("change", (event) => {
    const district = event.target.value;
    const wardSelect = document.getElementById("wardSelect");

    wardSelect.innerHTML = '<option value="">Chọn xã</option>';

    if (locationMap[district]) {
        for (const ward in locationMap[district]) {
            const option = document.createElement("option");
            option.value = ward;
            option.textContent = ward;
            wardSelect.appendChild(option);
        }
    }
});

document.getElementById("districtSelect").addEventListener("change", (event) => {
    const district = event.target.value;
    const wardSelect = document.getElementById("wardSelect");

    wardSelect.innerHTML = '<option value="">Chọn xã</option>';

    if (locationMap[district]) {
        for (const ward in locationMap[district]) {
            const option = document.createElement("option");
            option.value = ward;
            option.textContent = ward;
            wardSelect.appendChild(option);
        }
    }
    console.log("Selected district:", district);
    console.log("Available wards:", locationMap[district]);
});
async function fetchWeatherData(lat, lon, locationName = defaultLocation.name) {
    const apiKey = "12118cdb333f0039947273d009989237";
    const baseUrl = "https://api.openweathermap.org/data/2.5/";

    try {
        const weatherResponse = await fetch(
            `${baseUrl}weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&lang=vi`
        );
        const forecastResponse = await fetch(
            `${baseUrl}forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&lang=vi`
        );

        if (!weatherResponse.ok || !forecastResponse.ok) {
            throw new Error("Không tìm thấy dữ liệu thời tiết!");
        }

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        displayWeatherData(weatherData, locationName);
        displayForecastData(forecastData);
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu thời tiết:", error);
        document.getElementById("location").textContent = "Khu vực: Lỗi khi tải dữ liệu";
    }
}

function displayWeatherData(data, locationName) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    document.getElementById("location").textContent = locationName;
    document.getElementById("temperature").textContent = `Nhiệt độ: ${temperature}°C`;
    document.getElementById("humidity").textContent = `Độ ẩm: ${humidity}%`;
    document.getElementById("wind").textContent = `Gió: ${windSpeed} km/h`;
    document.getElementById("weather-status").textContent = `Trạng thái: ${description}`;
}

function displayForecastData(data) {
    const forecastContainer = document.getElementById("forecast-content");
    forecastContainer.innerHTML = ""; 

    const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    dailyForecasts.forEach(item => {
        const date = new Date(item.dt_txt);
        const day = date.toLocaleDateString("vi-VN", { weekday: "long", day: "2-digit", month: "2-digit" });
        const icon = item.weather[0].icon;
        const temp = item.main.temp;

        const forecastItem = document.createElement("div");
        forecastItem.className = "forecast-item";
        forecastItem.style.display = "flex";
        forecastItem.style.justifyContent = "space-between";
        forecastItem.style.alignItems = "center";
        forecastItem.style.padding = "8px 0";

        forecastItem.innerHTML = `
            <div style="flex: 1; text-align: left;">${day}</div>
            <div style="flex: 1; text-align: center;"><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon" style="width: 30px;"></div>
            <div style="flex: 1; text-align: right;"><strong>${temp}°C</strong></div>
        `;
        forecastContainer.appendChild(forecastItem);
    });
}

fetchWeatherData(defaultLocation.lat, defaultLocation.lon, defaultLocation.name);