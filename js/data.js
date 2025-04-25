const product = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49999, // ₦49,999 (price in Naira)
    description: "High-quality wireless headphones with noise cancellation.",
    image: "images/headphones.jpg",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89999, // ₦89,999
    description: "Feature-rich smartwatch with health monitoring.",
    image: "images/smartwatch.jpg",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 29999, // ₦29,999
    description: "Portable speaker with 20-hour battery life.",
    image: "images/speaker.jpg",
  },
  {
    id: 4,
    name: "4K Ultra HD TV",
    price: 249999, // ₦249,999
    description: "55-inch 4K Ultra HD Smart TV with HDR.",
    image: "images/tv.jpg",
  },
  {
    id: 5,
    name: "Gaming Laptop",
    price: 599999, // ₦599,999
    description: "High-performance gaming laptop with RTX graphics.",
    image: "images/laptop.jpg",
  },
  {
    id: 6,
    name: "Smartphone",
    price: 199999, // ₦199,999
    description: "Latest smartphone with advanced camera features.",
    image: "images/smartphone.jpg",
  },
  {
    id: 7,
    name: "Wireless Charger",
    price: 14999, // ₦14,999
    description: "Fast wireless charger compatible with most devices.",
    image: "images/charger.jpg",
  },
  {
    id: 8,
    name: "Gaming Mouse",
    price: 19999, // ₦19,999
    description: "Ergonomic gaming mouse with customizable buttons.",
    image: "images/mouse.jpg",
  },
  {
    id: 9,
    name: "Mechanical Keyboard",
    price: 29999, // ₦29,999
    description: "RGB mechanical keyboard with customizable lighting.",
    image: "images/keyboard.jpg",
  },
  {
    id: 10,
    name: "External Hard Drive",
    price: 49999, // ₦49,999
    description: "1TB external hard drive for extra storage.",
    image: "images/harddrive.jpg",
  },
  {
    id: 11,
    name: "Action Camera",
    price: 89999, // ₦89,999
    description: "4K action camera with waterproof case.",
    image: "images/actioncamera.jpg",
  },
  {
    id: 12,
    name: "Smart Home Hub",
    price: 59999, // ₦59,999
    description: "Central hub for all your smart home devices.",
    image: "images/smarthomehub.jpg",
  },
  {
    id: 13,
    name: "Portable SSD",
    price: 79999, // ₦79,999
    description: "Fast and portable SSD for on-the-go storage.",
    image: "images/ssd.jpg",
  },
  {
    id: 14,
    name: "VR Headset",
    price: 129999, // ₦129,999
    description: "Immersive VR headset for gaming and entertainment.",
    image: "images/vrheadset.jpg",
  },
  {
    id: 15,
    name: "Fitness Tracker",
    price: 24999, // ₦24,999
    description: "Wearable fitness tracker with heart rate monitor.",
    image: "images/fitnesstracker.jpg",
  },
  {
    id: 16,
    name: "Smart Thermostat",
    price: 34999, // ₦34,999
    description: "Smart thermostat for energy-efficient home heating.",
    image: "images/thermostat.jpg",
  },
  {
    id: 17,
    name: "Wireless Earbuds",
    price: 19999, // ₦19,999
    description: "Compact wireless earbuds with great sound quality.",
    image: "images/earbuds.jpg",
  },
  {
    id: 18,
    name: "Digital Camera",
    price: 299999, // ₦299,999
    description: "High-resolution digital camera for photography enthusiasts.",
    image: "images/digitalcamera.jpg",
  },
  {
    id: 19,
    name: "Smart Refrigerator",
    price: 499999, // ₦499,999
    description: "Smart refrigerator with touchscreen and Wi-Fi connectivity.",
    image: "images/refrigerator.jpg",
  },
  {
    id: 20,
    name: "Electric Kettle",
    price: 14999, // ₦14,999
    description: "Fast-boiling electric kettle with temperature control.",
    image: "images/kettle.jpg",
  },
  {
    id: 21,
    name: "Air Fryer",
    price: 29999, // ₦29,999
    description: "Healthy air fryer for quick and easy cooking.",
    image: "images/airfryer.jpg",
  },
  {
    id: 22,
    name: "Smart Light Bulb",
    price: 4999, // ₦4,999
    description: "Smart LED bulb with color-changing features.",
    image: "images/lightbulb.jpg",
  },
  {
    id: 23,
    name: "Portable Projector",
    price: 79999, // ₦79,999
    description: "Compact projector for home theater experience.",
    image: "images/projector.jpg",
  },
  {
    id: 24,
    name: "Smart Lock",
    price: 59999, // ₦59,999
    description: "Smart lock with remote access and monitoring.",
    image: "images/smartlock.jpg",
  },
  {
    id: 25,
    name: "Electric Toothbrush",
    price: 19999, // ₦19,999
    description: "Rechargeable electric toothbrush with smart features.",
    image: "images/toothbrush.jpg",
  },
  {
    id: 26,
    name: "Smart Scale",
    price: 24999, // ₦24,999
    description: "Smart scale with body composition analysis.",
    image: "images/scale.jpg",
  },
  {
    id: 27,
    name: "Wireless Security Camera",
    price: 69999, // ₦69,999
    description: "1080p wireless security camera with night vision.",
    image: "images/securitycamera.jpg",
  },
  {
    id: 28,
    name: "Smart Smoke Detector",
    price: 34999, // ₦34,999
    description: "Smart smoke detector with smartphone alerts.",
    image: "images/smokedetector.jpg",
  },
  {
    id: 29,
    name: "Electric Pressure Cooker",
    price: 49999, // ₦49,999
    description: "Multi-function electric pressure cooker for quick meals.",
    image: "images/pressurecooker.jpg",
  },
  {
    id: 30,
    name: "Smart Air Purifier",
    price: 89999, // ₦89,999
    description: "Smart air purifier with real-time air quality monitoring.",
    image: "images/airpurifier.jpg",
  },
  {
    id: 31,
    name: "Smart Doorbell",
    price: 69999, // ₦69,999
    description: "Smart doorbell with HD video and two-way audio.",
    image: "images/doorbell.jpg",
  },
  {
    id: 32,
    name: "Smart Pet Feeder",
    price: 49999, // ₦49,999
    description: "Automatic pet feeder with smartphone control.",
    image: "images/petfeeder.jpg",
  },
  {
    id: 33,
    name: "Smart Garden System",
    price: 89999, // ₦89,999
    description: "Automated garden system for indoor plants.",
    image: "images/gardensystem.jpg",
  },
  {
    id: 34,
    name: "Smart Mirror",
    price: 129999, // ₦129,999
    description: "Smart mirror with touch control and voice assistant.",
    image: "images/smartmirror.jpg",
  },
  {
    id: 35,
    name: "Smart Wi-Fi Range Extender",
    price: 24999, // ₦24,999
    description: "Wi-Fi range extender for better coverage.",
    image: "images/rangeextender.jpg",
  },
  {
    id: 36,
    name: "Smart Coffee Maker",
    price: 59999, // ₦59,999
    description: "Smart coffee maker with programmable settings.",
    image: "images/coffeemaker.jpg",
  },
  {
    id: 37,
    name: "Smart Air Conditioner",
    price: 249999, // ₦249,999
    description: "Smart air conditioner with remote control.",
    image: "images/airconditioner.jpg",
  },
  {
    id: 38,
    name: "Smart Vacuum Cleaner",
    price: 89999, // ₦89,999
    description: "Robot vacuum cleaner with smart mapping.",
    image: "images/vacuumcleaner.jpg",
  },
  {
    id: 39,
    name: "Smart Water Bottle",
    price: 14999, // ₦14,999
    description: "Smart water bottle with hydration reminders.",
    image: "images/waterbottle.jpg",
  },
  {
    id: 40,
    name: "Smart Pet Camera",
    price: 69999, // ₦69,999
    description: "Pet camera with treat dispenser and two-way audio.",
    image: "images/petcamera.jpg",
  },
  {
    id: 41,
    name: "Smart Weather Station",
    price: 49999, // ₦49,999
    description: "Home weather station with real-time data.",
    image: "images/weatherstation.jpg",
  },
  {
    id: 42,
    name: "Smart Blood Pressure Monitor",
    price: 29999, // ₦29,999
    description: "Smart blood pressure monitor with app integration.",
    image: "images/bloodpressuremonitor.jpg",
  },
  {
    id: 43,
    name: "Smart Baby Monitor",
    price: 69999, // ₦69,999
    description: "Baby monitor with HD video and night vision.",
    image: "images/babymonitor.jpg",
  },
  {
    id: 44,
    name: "Smart Air Quality Monitor",
    price: 34999, // ₦34,999
    description: "Air quality monitor with smartphone alerts.",
    image: "images/airqualitymonitor.jpg",
  },
  {
    id: 45,
    name: "Smart Sleep Mask",
    price: 19999, // ₦19,999
    description: "Smart sleep mask with relaxation features.",
    image: "images/sleepmask.jpg",
  },
  {
    id: 46,
    name: "Smart Hair Dryer",
    price: 59999, // ₦59,999
    description: "Smart hair dryer with temperature control.",
    image: "images/hairdryer.jpg",
  },
  {
    id: 47,
    name: "Smart Scale for Pets",
    price: 24999, // ₦24,999
    description: "Smart scale designed for weighing pets.",
    image: "images/petscale.jpg",
  },
  {
    id: 48,
    name: "Smart Luggage Tracker",
    price: 14999, // ₦14,999
    description: "Luggage tracker with GPS and smartphone alerts.",
    image: "images/luggagetracker.jpg",
  },
  {
    id: 49,
    name: "Smart Bike Lock",
    price: 29999, // ₦29,999
    description: "Smart bike lock with smartphone control.",
    image: "images/bikelock.jpg",
  },
  {
    id: 50,
    name: "Smart Pet Collar",
    price: 19999, // ₦19,999
    description: "Smart collar for pets with GPS tracking.",
    image: "images/petcollar.jpg",
  },
];
