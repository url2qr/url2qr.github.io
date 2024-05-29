const linkInput = document.getElementById("linkInput");

function setParameters() {
  const newParams = new URLSearchParams();
  newParams.set("link", linkInput.value);
  const fullURL = "/?" + newParams.toString();
  window.location.href = fullURL;
}

function generateQR() {
  const urlParams = new URLSearchParams(window.location.search);

  // Get a specific parameter value
  const link = urlParams.get("link");

  linkInput.value = link;

  if (link) {
    const qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = ""; // Clear previous QR code

    new QRCode(qrcodeContainer, {
      text: link,
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  }
}

function onLoad() {
  generateQR();

  linkInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      setParameters();
    }
  });
}

onLoad();
