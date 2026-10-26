
const params = new URLSearchParams(window.location.search);

const perimeterId = params.get("perimeter");

const isValidId = typeof perimeterId === "string" && /^[a-zA-Z0-9_-]{1,100}$/.test(perimeterId);

if (!isValidId) {
    console.info("No valid perimeter ID found in the URL.");
    sreturn;
}

console.info("Phishing training campaign ID detected.");

const campaignInfo = document.getElementById("campaign-info");
