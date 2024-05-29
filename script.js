function setParameters() {
  const linkInput = document.getElementById("linkInput");
}

function generateQR() {
  const urlParams = new URLSearchParams(window.location.search);

  // Get a specific parameter value
  const link = urlParams.get("link");

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

function setDbg(x) {
  const dbg = document.getElementById("dbg");
  dbg.innerHTML = x;
}

function onLoad() {
  generateQR();

  setDbg(window.location.search.toString());
}

onLoad();
