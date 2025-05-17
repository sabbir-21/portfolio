const slider = document.getElementById('complexSlider');
const complexValue = document.getElementById('complexValue');
const simulationTime = document.getElementById('simulationTime');
const mmgbsaCheckbox = document.getElementById('mmgbsaCheckbox');
const dftCheckbox = document.getElementById('dftCheckbox');
const priceDisplay = document.getElementById('priceDisplay');
const daysDisplay = document.getElementById('daysDisplay');
const orderButton = document.getElementById('orderButton');
const emailField = document.getElementById('email');
const transactionField = document.getElementById('transaction');

slider.addEventListener('input', updatePrice);
simulationTime.addEventListener('change', updatePrice);
mmgbsaCheckbox.addEventListener('change', updatePrice);
dftCheckbox.addEventListener('change', updatePrice);

function updatePrice() {
  const numComplexes = parseInt(slider.value);
  const nsValue = parseInt(simulationTime.value);
  let basePrice = numComplexes * (nsValue / 100) * 1500;

  if (mmgbsaCheckbox.checked) {
    basePrice += numComplexes * 200;
  }
  
  if (dftCheckbox.checked) {
    basePrice += numComplexes * 500;
  }

  complexValue.textContent = numComplexes;
  daysDisplay.textContent = Math.floor(numComplexes/2);
  priceDisplay.textContent = basePrice;
}

orderButton.addEventListener('click', () => {
  const email = emailField.value;
  const transaction = transactionField.value;
  const price = priceDisplay.textContent;
  const days = daysDisplay.textContent;
  const numComplexes = slider.value;
  const nsValue = simulationTime.value;
  const mmgbsa = mmgbsaCheckbox.checked ? "Yes" : "No";
  const dft = dftCheckbox.checked ? "Yes" : "No";

  if (email && transaction) {
    orderButton.disabled = true;

    const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdPSJ7iugjdoNI50RACxP3p0n23CZhzailXVBCgQ81AlneFYg/formResponse';
    const formData = new URLSearchParams();
    formData.append('entry.267273701', email);
    formData.append('entry.1369750810', transaction);
    formData.append('entry.1374397848', price);
    formData.append('entry.1240618803', numComplexes);
    formData.append('entry.2026139812', nsValue);
    formData.append('entry.1734846573', mmgbsa);
    formData.append('entry.101306927', dft);

    fetch(googleFormURL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    }).then(() => {
        displayThankYouMessage({
          email,
          transaction,
          price,
          days,
          numComplexes,
          nsValue,
          mmgbsa,
          dft,
        });
    }).catch(() => {
      //alert('Check Your internet connection');
      orderButton.disabled = false;
    });
  } else {
    alert('Please enter your email and transaction ID.');
  }
});

function displayThankYouMessage(orderInfo) {
  const container = document.querySelector('.container');
  
  container.innerHTML = `
    <div id="thankYouSection">
      <h1>Thank You for Your Order!</h1>
      <p>Your order details are as follows:</p>
      <ul>
        <li><strong>Email:</strong> ${orderInfo.email}</li>
        <li><strong>Price:</strong> ${orderInfo.price} Taka</li>
        <li><strong>Transaction ID:</strong> ${orderInfo.transaction}</li>
        <li><strong>Estimated Time:</strong> ${orderInfo.days} day(s)</li>
        <li><strong>Number of Complexes:</strong> ${orderInfo.numComplexes}</li>
        <li><strong>Simulation Time:</strong> ${orderInfo.nsValue} ns</li>
        <li><strong>MMGBSA:</strong> ${orderInfo.mmgbsa}</li>
        <li><strong>DFT:</strong> ${orderInfo.dft}</li>
      </ul>
      <button class="orderButtonStyle" id="downloadInvoiceButton">Download Your Invoice</button>
      <!--<button class="orderButtonStyle" id="orderAgainButton">Order Again</button>-->
    </div>
  `;
  // "Order Again" Button
  const orderAgainButton = document.getElementById('orderAgainButton');
  orderAgainButton.addEventListener('click', () => {
    location.reload();
  });

  // "Download Invoice" Button
  const downloadInvoiceButton = document.getElementById('downloadInvoiceButton');
  downloadInvoiceButton.addEventListener('click', () => {
    //const thankYouSection = document.getElementById('thankYouSection');
    const containerSection = document.getElementById('containerSection');
    
    // Use html2canvas to capture the section
    html2canvas(containerSection).then((canvas) => {
      // Convert the canvas to an image
      const link = document.createElement('a');
      link.download = 'invoice.png'; // File name for the downloaded image
      link.href = canvas.toDataURL('image/png'); // Image data URL
      link.click();
    });
  });

}
