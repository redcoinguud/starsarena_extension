async function getPricesFromContract(userAddress) {
    try {
        const contractABI = [{ "anonymous": false, "inputs": [{"indexed": false, "internalType": "uint8", "name": "version", "type": "uint8"}], "name": "Initialized", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }, {"indexed": false, "internalType": "address", "name": "referrer", "type": "address"}], "name": "ReferralSet", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "trader", "type": "address" }, {"indexed": false, "internalType": "address", "name": "subject", "type": "address"}, { "indexed": false, "internalType": "bool", "name": "isBuy", "type": "bool" }, { "indexed": false, "internalType": "uint256", "name": "shareAmount", "type": "uint256" }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}, { "indexed": false, "internalType": "uint256", "name": "protocolAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "subjectAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "referralAmount", "type": "uint256" }, {"indexed": false, "internalType": "uint256", "name": "supply", "type": "uint256"}, { "indexed": false, "internalType": "uint256", "name": "buyPrice", "type": "uint256" }, {"indexed": false, "internalType": "uint256", "name": "myShares", "type": "uint256"}], "name": "Trade", "type": "event" }, { "inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "allowedTokens", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sharesSubject", "type": "address" }, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "buyShares", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sharesSubject", "type": "address" }, {"internalType": "uint256", "name": "amount", "type": "uint256"}, { "internalType": "address", "name": "referrer", "type": "address" }], "name": "buySharesWithReferrer", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sharesSubject", "type": "address" }, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "getBuyPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sharesSubject", "type": "address" }, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "getBuyPriceAfterFee", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "address", "name": "sharesSubject", "type": "address"}], "name": "getMyShares", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "address", "name": "subject", "type": "address"}, { "internalType": "uint256", "name": "supply", "type": "uint256" }, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "getPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sharesSubject", "type": "address" }, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "getSellPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sharesSubject", "type": "address" }, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "getSellPriceAfterFee", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "address", "name": "sharesSubject", "type": "address"}], "name": "getSharesSupply", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "initialPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "address", "name": "", "type": "address"}, { "internalType": "address", "name": "", "type": "address" }], "name": "pendingTokenWithdrawals", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "pendingWithdrawals", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "protocolFeeDestination", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "protocolFeeDestination2", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "protocolFeePercent", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "referralFeePercent", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "revenueShare", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sharesSubject", "type": "address" }, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "sellShares", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sharesSubject", "type": "address" }, {"internalType": "uint256", "name": "amount", "type": "uint256"}, { "internalType": "address", "name": "referrer", "type": "address" }], "name": "sellSharesWithReferrer", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{"internalType": "address", "name": "_feeDestination", "type": "address"}], "name": "setFeeDestination", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{"internalType": "address", "name": "_feeDestination2", "type": "address"}], "name": "setFeeDestination2", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{"internalType": "bool", "name": "_paused", "type": "bool"}], "name": "setPaused", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{"internalType": "uint256", "name": "_feePercent", "type": "uint256"}], "name": "setProtocolFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{"internalType": "uint256", "name": "_feePercent", "type": "uint256"}], "name": "setReferralFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{"internalType": "uint256", "name": "_feePercent", "type": "uint256"}], "name": "setSubjectFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{"internalType": "address", "name": "", "type": "address"}, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "shareholders", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "address", "name": "", "type": "address"}, { "internalType": "address", "name": "", "type": "address" }], "name": "sharesBalance", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "sharesSupply", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "subjectFeePercent", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "address", "name": "", "type": "address"}, { "internalType": "address", "name": "", "type": "address" }], "name": "subscribers", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "subscriptionDuration", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "subscriptionPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "subscriptionTokenAddress", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "subscriptionsEnabled", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "userToReferrer", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "weightA", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "weightB", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "weightC", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "weightD", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, {"stateMutability": "payable", "type": "receive"}];
        const contractAddress = '0x563395A2a04a7aE0421d34d62ae67623cAF67D03';
        const provider = new ethers.providers.JsonRpcProvider('https://api.avax.network/ext/bc/C/rpc');

        const contract = new ethers.Contract(contractAddress, contractABI, provider);

        const buyPriceAfterFee = await contract.getBuyPriceAfterFee(userAddress, ethers.BigNumber.from("1"));
        const sellPriceAfterFee = await contract.getSellPriceAfterFee(userAddress, ethers.BigNumber.from("1"));

        return {
            buyPriceAfterFee: buyPriceAfterFee.toString(),
            sellPriceAfterFee: sellPriceAfterFee.toString(),
        };
    } catch (error) {
        console.error("An error occurred", error);
        return null;
    }
}

async function fetchUserData(username) {
    let url = `https://starsarena-extension-be.vercel.app/api/${username}`;
    try {
        let response = await fetch(url);
        if (!response.ok) {
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error: ', error);
        return null;
    }
}

function waitForElement(selector, callback) {
    const config = {childList: true, subtree: true};

    const observerCallback = (mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                mutation.addedNodes.forEach(node => {
                    if (node instanceof HTMLElement) {
                        const foundElement = node.querySelector(selector);
                        if (foundElement) {
                            callback(foundElement);
                        }
                    }
                });
            }
        }
    };

    const observer = new MutationObserver(observerCallback);
    observer.observe(document.body, config);
}

function addBuySellButtons(username, prices, userData, userNameElement, buttonStyle) {
    let profileLink = `https://starsarena.com/${username}`;
    let sellPriceConverted = parseFloat(ethers.utils.formatUnits(prices.sellPriceAfterFee, 18)).toFixed(2);
    let buyPriceConverted = parseFloat(ethers.utils.formatUnits(prices.buyPriceAfterFee, 18)).toFixed(2);

    let link = document.createElement('a');
    link.setAttribute('href', profileLink);
    link.setAttribute('target', '_blank');
    link.className = 'custom-profile-link';
    link.setAttribute('style', 'text-decoration: none;');

    let icon = document.createElement('img');
    icon.setAttribute('src', chrome.runtime.getURL('icon.png'));
    icon.setAttribute('style', 'height: 28px; width: 28px; margin-left: 5px;');

    link.appendChild(icon);

    let buyButton = document.createElement('button');
    buyButton.textContent = `${buyPriceConverted}`;
    buyButton.style.cssText = buttonStyle;
    buyButton.style.color = '#FFFFFF';
    buyButton.style.backgroundColor = '#28a745';
    buyButton.style.borderColor = '#28a745';
    buyButton.onmouseenter = function () {
        this.style.backgroundColor = '#218838';
        this.style.borderColor = '#218838';
    };
    buyButton.onmouseleave = function () {
        this.style.backgroundColor = '#28a745';
        this.style.borderColor = '#28a745';
    };

    buyButton.onclick = function () {
        window.postMessage({
            type: "BUY_SHARES",
            userAddress: userData.address,
            price: prices.buyPriceAfterFee,
        }, "*");
    };

    let sellButton = document.createElement('button');
    sellButton.textContent = `${sellPriceConverted}`;
    sellButton.style.cssText = buttonStyle;
    sellButton.style.color = '#FFFFFF';
    sellButton.style.backgroundColor = '#FF4136';
    sellButton.style.borderColor = '#FF4136';
    sellButton.onmouseenter = function () {
        this.style.backgroundColor = '#c2302e';
        this.style.borderColor = '#c2302e';
    };
    sellButton.onmouseleave = function () {
        this.style.backgroundColor = '#FF4136';
        this.style.borderColor = '#FF4136';
    };

    sellButton.onclick = function () {
        window.postMessage({
            type: "SELL_SHARES",
            userAddress: userData.address
        }, "*");
    };

    userNameElement.appendChild(link);
    userNameElement.appendChild(sellButton);
    userNameElement.appendChild(buyButton);
}

function addTipButton(userData, userNameElement, buttonStyle) {
    if (!userData || !userData.lastThreadId) return;

    let tipButton = document.createElement('button');
    tipButton.style.cssText = buttonStyle + `
        background-color: transparent; 
        border: 0px`;

    let tipIcon = document.createElement('img');
    tipIcon.setAttribute('src', chrome.runtime.getURL('tip.png'));
    tipIcon.setAttribute('style', 'width: 32px;');
    tipButton.prepend(tipIcon);

    let tipInput = document.createElement('input');
    tipInput.setAttribute('type', 'text');
    tipInput.setAttribute('placeholder', '0.5 (AVAX TIP)');
    tipInput.style.cssText = `
        margin-left: 5px;
        padding: 0.5em;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;`;

    tipButton.onclick = function () {
        let tipAmount = tipInput.value;
        if (tipAmount) {
            window.postMessage({
                type: "SEND_TIP",
                userAddress: userData.address,
                tip: tipAmount,
            }, "*");
        }
    };

    userNameElement.appendChild(tipButton);
    userNameElement.appendChild(tipInput);
}

async function addProfileLink(userNameElement) {
    if (userNameElement.querySelector('.custom-profile-link')) {
        return;
    }

    let username = window.location.pathname.split('/')[1];
    if (!username || username === 'home') return;

    let userData = await fetchUserData(username);
    if (!userData || !userData.address) {
        return;
    }
    let prices = await getPricesFromContract(userData.address);
    if (!prices) {
        return;
    }

    const buttonStyle = `
    display: inline-block;
    padding: 0.5em 1em;  // Increased padding for larger button size
    font-size: 16px;     // Slightly larger font size for readability
    border: none;
    border-radius: 4px;  // Rounded corners for a modern look
    transition: all 0.3s ease 0s;
    font-weight: bold;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
`;

    addBuySellButtons(username, prices, userData, userNameElement, buttonStyle);
    //addTipButton(userData, userNameElement, buttonStyle);

    let userDescriptionElement = document.querySelector('div[data-testid="UserDescription"]');
    if (userDescriptionElement) {
        addUserDescriptionIcons(userDescriptionElement, userData);
    }
}

const ongoingRequests = {};

async function addTimelineLink(userNameElement) {
    if (userNameElement.querySelector('.custom-profile-link')) return;

    const userNameSpan = userNameElement.querySelector('a');
    if (!userNameSpan) return;

    const usernameText = userNameSpan.href.split('/')[3];

    if (ongoingRequests[usernameText]) {
        return;
    }
    ongoingRequests[usernameText] = true;

    try {
        const userData = await fetchUserData(usernameText);
        if (userData && userData.address) {
            const profileLink = `https://starsarena.com/${usernameText}`;

            if (!userNameElement.querySelector('.custom-profile-link')) {
                let link = document.createElement('a');
                link.setAttribute('href', profileLink);
                link.setAttribute('target', '_blank');
                link.className = 'custom-profile-link';

                let icon = document.createElement('img');
                icon.setAttribute('src', chrome.runtime.getURL('icon.png'));
                icon.setAttribute('style', 'height: 16px; width: 16px; margin-left: 10px;');
                link.appendChild(icon);

                userNameElement.querySelector('.css-1dbjc4n.r-1d09ksm.r-18u37iz.r-1wbh5a2').appendChild(link);
            }
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    } finally {
        delete ongoingRequests[usernameText];
    }
}

function addIcon(data, image, tooltipText, iconsContainer) {
    let iconTextContainer = document.createElement('div');
    iconTextContainer.style.display = 'flex';
    iconTextContainer.style.alignItems = 'center';

    let iconElement = document.createElement('img');
    iconElement.src = chrome.runtime.getURL(image);
    iconElement.style.width = '15px';
    iconElement.style.height = 'auto';
    iconElement.title = tooltipText;

    let textElement = document.createElement('span');
    textElement.textContent = data;
    textElement.style.fontSize = '15px';
    textElement.style.marginLeft = '2px';
    textElement.title = tooltipText;

    iconTextContainer.appendChild(iconElement);
    iconTextContainer.appendChild(textElement);

    iconsContainer.appendChild(iconTextContainer);
}

function addUserDescriptionIcons(userDescriptionElement, userData) {
    let iconsContainer = document.createElement('div');
    iconsContainer.style.display = 'inline-flex';
    iconsContainer.style.flexWrap = 'nowrap';
    iconsContainer.style.alignItems = 'center';
    iconsContainer.style.justifyContent = 'flex-start';
    iconsContainer.style.gap = '12px';
    iconsContainer.style.marginBottom = '10px';
    iconsContainer.style.border = '2px dotted gray';
    iconsContainer.style.borderRadius = '6px';
    iconsContainer.style.padding = '2px';
    iconsContainer.style.boxSizing = 'border-box';

    addIcon(userData.followerCount, 'follower_count.png', 'Followers', iconsContainer);
    addIcon(userData.followingsCount, 'following_count.webp', 'Following', iconsContainer);
    addIcon(parseFloat(ethers.utils.formatUnits(userData.portfolio, 18)).toFixed(2), 'portfolio.png', 'Portfolio', iconsContainer);
    addIcon(userData.holders, 'holder_count.png', 'Holders', iconsContainer);
    addIcon(parseFloat(ethers.utils.formatUnits(userData.feesEarned, 18)).toFixed(2), 'fees_earned.webp', 'Fees Earned', iconsContainer);
    addIcon(userData.buys, 'buys.webp', 'Buys', iconsContainer);
    addIcon(userData.sells, 'sells.webp', 'Sells', iconsContainer);

    userDescriptionElement.parentNode.insertBefore(iconsContainer, userDescriptionElement);
}

function injectScript() {
    try {
        const scriptTag = document.createElement('script');
        scriptTag.src = chrome.runtime.getURL('injectedScript.js');
        scriptTag.onload = function () {
            this.remove();
        };

        (document.head || document.documentElement).appendChild(scriptTag);
    } catch (error) {
        console.error('Script injection failed', error);
    }
}

injectScript();
waitForElement('div[data-testid="UserName"] div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-dnmrzs', addProfileLink);
waitForElement('div[class="css-1dbjc4n r-k4xj1c r-18u37iz r-1wtj0ep"]', addTimelineLink);