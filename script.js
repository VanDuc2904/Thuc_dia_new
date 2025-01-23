const apiKey = '12118cdb333f0039947273d009989237';

const wardsByDistrict = {
    "Yen Bai City": {
        "Nguyễn Thái Học": { lat: 21.7167, lon: 104.8918 },
        "Yên Ninh": { lat: 21.7109, lon: 104.8974 },
        "Hồng Hà": { lat: 21.7262, lon: 104.9113 },
        "Đồng Tâm": { lat: 21.7024, lon: 104.8865 },
    },
    "Tran Yen": {
        "Cổ Phúc": { lat: 21.6864, lon: 105.0547 },
        "Vân Hội": { lat: 21.7056, lon: 105.0933 },
        "Việt Thành": { lat: 21.6612, lon: 105.0258 },
        "Vân Yên": { lat: 21.6338, lon: 105.0485 },
    },
    "Van Chan": {
        "Sơn Thịnh": { lat: 21.5127, lon: 104.7147 },
        "Suối Giàng": { lat: 21.5774, lon: 104.7123 },
        "Suối Bu": { lat: 21.4913, lon: 104.8034 },
        "Nậm Lành": { lat: 21.4860, lon: 104.6591 },
    },
    "Tram Tau": {
        "Thị trấn Trạm Tấu": { lat: 21.4783, lon: 104.4967 },
        "Bản Mù": { lat: 21.4417, lon: 104.5250 },
        "Bản Công": { lat: 21.4036, lon: 104.5611 },
        "Hát Lừu": { lat: 21.3642, lon: 104.6172 },
    },
    "Mu Cang Chai": {
        "Mồ Dề": { lat: 21.7008, lon: 104.1333 },
        "La Pán Tẩn": { lat: 21.7070, lon: 104.1753 },
        "Chế Tạo": { lat: 21.5946, lon: 104.0203 },
    },
};

const districtSelect = document.getElementById('districtSelect');
const wardSelect = document.getElementById('wardSelect');
const currentWeather = document.getElementById('currentWeather');
const forecastWeather = document.getElementById('forecastWeather');

function updateWards(district) {
    wardSelect.innerHTML = '<option value="">Chọn xã</option>';
    if (district && wardsByDistrict[district]) {
        for (const ward in wardsByDistrict[district]) {
            const option = document.createElement('option');
            option.value = ward;
            option.textContent = ward;
            wardSelect.appendChild(option);
        }
    }
}

async function displayWeather(district, ward) {
    if (district && ward) {
        const wardData = wardsByDistrict[district]?.[ward];
        if (!wardData) {
            currentWeather.innerHTML = '<p>Không tìm thấy dữ liệu cho xã được chọn.</p>';
            forecastWeather.innerHTML = '';
            return;
        }

        const { lat, lon } = wardData;

        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=vi`;
        const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=vi`;

        try {
            const currentResponse = await fetch(currentWeatherUrl);
            const currentData = await currentResponse.json();

            if (currentData.main) {
                currentWeather.innerHTML = `
                    <h5>${ward}, ${district}</h5>
                    <p>
                        <img src="https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png" alt="Icon">
                        ${currentData.weather[0].description}
                    </p>
                    <p><strong>Nhiệt độ:</strong> ${currentData.main.temp}°C</p>
                    <p><strong>Độ ẩm:</strong> ${currentData.main.humidity}%</p>
                    <p><strong>Gió:</strong> ${currentData.wind.speed} km/h</p>
                `;
            } else {
                currentWeather.innerHTML = '<p>Không tìm thấy dữ liệu thời tiết hiện tại.</p>';
            }

            const forecastResponse = await fetch(forecastWeatherUrl);
            const forecastData = await forecastResponse.json();

            forecastWeather.innerHTML = '<h5 class="mt-4">Dự Báo Thời Tiết 5 Ngày</h5>';
            const dailyForecasts = forecastData.list.filter((item, index) => index % 8 === 0);

            dailyForecasts.forEach(item => {
                const date = new Date(item.dt_txt);
                const day = date.toLocaleDateString('vi-VN', { weekday: 'short' });
                forecastWeather.innerHTML += `
                    <div class="forecast-item">
                        <p>${day}</p>
                        <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="Icon">
                        <p>${item.main.temp}°C</p>
                    </div>
                `;
            });
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu thời tiết:", error);
            currentWeather.innerHTML = '<p>Đã xảy ra lỗi khi lấy dữ liệu thời tiết.</p>';
            forecastWeather.innerHTML = '';
        }
    }
}

districtSelect.addEventListener('change', () => {
    const district = districtSelect.value;
    updateWards(district);
    currentWeather.innerHTML = '<p>Hãy chọn xã để xem dự báo thời tiết.</p>';
    forecastWeather.innerHTML = '';
});

wardSelect.addEventListener('change', () => {
    const district = districtSelect.value;
    const ward = wardSelect.value;
    displayWeather(district, ward);
});

window.addEventListener('DOMContentLoaded', () => {
    districtSelect.value = "Yen Bai City";
    updateWards("Yen Bai City");
    wardSelect.value = "Yên Ninh";
    displayWeather("Yen Bai City", "Yên Ninh");
    document.getElementById('onlineCount').textContent = 1;
    document.getElementById('todayVisitCount').textContent = 11;
    document.getElementById('totalVisitCount').textContent = 2998;
});

const carouselElement = document.querySelector('#infoCarousel');
const carouselInstance = new bootstrap.Carousel(carouselElement, {
    interval: 40000, // 40 giây
    ride: 'carousel',
});
let heroCurrentIndex = 0;

function updateHeroSlide() {
    const slides = document.querySelector('#hero-slider .slides');
    slides.style.transform = `translateX(-${heroCurrentIndex * 100}%)`; /* Di chuyển đúng vị trí */
}

document.getElementById('hero-next').addEventListener('click', () => {
    const totalSlides = document.querySelectorAll('#hero-slider .slide').length;
    heroCurrentIndex = (heroCurrentIndex + 1) % totalSlides; /* Chuyển sang slide tiếp theo */
    updateHeroSlide();
});

document.getElementById('hero-prev').addEventListener('click', () => {
    const totalSlides = document.querySelectorAll('#hero-slider .slide').length;
    heroCurrentIndex = (heroCurrentIndex - 1 + totalSlides) % totalSlides; /* Quay lại slide trước */
    updateHeroSlide();
});

// Hiển thị slide đầu tiên khi tải trang
updateHeroSlide();
document.addEventListener("DOMContentLoaded", () => {
    const itemsPerPage = 4; 
    const newsItems = document.querySelectorAll(".reference-item");
    const paginationButtons = document.querySelectorAll(".page-btn");

    function showPage(page) {
        newsItems.forEach((item, index) => {
            item.style.display = "none";
            if (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) {
                item.style.display = "grid";
            }
        });
    }

    paginationButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const page = parseInt(button.dataset.page);
            showPage(page);
        });
    });
    showPage(1);
});
