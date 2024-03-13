class MobilePhone {
    constructor(name, os, cameraQuality, batteryLife, screenSize, price) {
        this.name = name;
        this.os = os;
        this.cameraQuality = cameraQuality;
        this.batteryLife = batteryLife;
        this.screenSize = screenSize;
        this.price = price;
    }
}

class PhoneRecommender {
    constructor() {
        this.phones = [
            new MobilePhone("Samsung Galaxy S21", "Android", "high", "average", "medium", 999),
            new MobilePhone("iPhone 13 Pro", "iOS", "high", "long", "medium", 999),
            new MobilePhone("Google Pixel 6", "Android", "moderate", "long", "medium", 799),
            new MobilePhone("OnePlus 9", "Android", "moderate", "average", "large", 729),
            new MobilePhone("iPhone SE", "iOS", "basic", "short", "small", 399),
            new MobilePhone("Samsung Galaxy A32", "Android", "basic", "average", "large", 299),
            new MobilePhone("Google Pixel 5a", "Android", "moderate", "average", "medium", 449),
            new MobilePhone("iPhone 12 Mini", "iOS", "moderate", "average", "small", 699),
            new MobilePhone("OnePlus Nord 2", "Android", "moderate", "average", "medium", 399),
        ];
    }

    main() {
        let budget, os, cameraQuality, batteryLife, screenSize;

        console.log("Welcome to the Mobile Phone Recommender!");
        console.log("Please answer the following questions to find your perfect mobile phone.\n");

        budget = prompt("What is your budget? (low, medium, high): ").toLowerCase();
        os = prompt("Which operating system do you prefer? (Android, iOS): ").toLowerCase();
        cameraQuality = prompt("What level of camera quality do you need? (basic, moderate, high): ").toLowerCase();
        batteryLife = prompt("How important is battery life to you? (short, average, long): ").toLowerCase();
        screenSize = prompt("What screen size do you prefer? (small, medium, large): ").toLowerCase();

        console.log("\nSearching for suitable phones...\n");

        let recommendedPhones = [];
        for (let i = 0; i < this.phones.length; i++) {
            let phone = this.phones[i];
            if (phone.price <= budget && phone.os === os &&
                phone.cameraQuality === cameraQuality && phone.batteryLife === batteryLife &&
                phone.screenSize === screenSize) {
                recommendedPhones.push(phone);
            }
        }

        if (recommendedPhones.length > 0) {
            console.log("We found the following phones that match your preferences:");
            for (let i = 0; i < recommendedPhones.length; i++) {
                let phone = recommendedPhones[i];
                console.log(`- ${phone.name} (${phone.os}, Camera: ${phone.cameraQuality}, Battery: ${phone.batteryLife}, Screen: ${phone.screenSize}, Price: $${phone.price})`);
            }
        } else {
            console.log("Sorry, we couldn't find any phones that match your preferences. Please try adjusting your criteria.");
        }
    }
}

let recommender = new PhoneRecommender();
recommender.main();
