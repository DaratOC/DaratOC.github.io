
const params = new URLSearchParams(window.location.search);

const perimeterId = params.get("perimeter");

const isValidId = typeof perimeterId === "string" && /^[a-zA-Z0-9_-]{1,100}$/.test(perimeterId);

if (!isValidId) {
    console.info("No valid perimeter ID found in the URL.");
    sreturn;
}

console.info("Phishing training campaign ID detected.");

const campaignInfo = document.getElementById("campaign-info");

if (campaignInfo) {
    campaignInfo.textContent = `Training reference: ${perimeterId}`;
    campaignInfo.hidden = false;
    sendAlert();
}

function sendAlert() {
    fetch("https://flow.zoho.com/770061028/flow/webhook/incoming?zapikey=1001.09b34c90a0c4bd6530c6dbc9fa5905a1.b72544449bd83d50ee5c2c73d38ba456&isdebug=false", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
            lid: perimeterId,
            timestamp: new Date().toISOString()
        })
    }).catch(console.error);
}
