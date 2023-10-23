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

async function fetchUserAddress(username) {
    let url = `https://starsarena-extension-be.vercel.app/api/${username}`;
    try {
        let response = await fetch(url);
        if (!response.ok) {
            return null;
        }
        let data = await response.json();
        return data.address;
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
                    // Check the children of the node to find the element
                    if (node instanceof HTMLElement) { // ensures that the node is an element
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

async function addProfileLink(userNameElement) {
    if (userNameElement.querySelector('.custom-profile-link')) {
        return;
    }

    let username = window.location.pathname.split('/')[1];
    if (!username || username === 'home') return;
    let profileLink = `https://starsarena.com/${username}`;

    let link = document.createElement('a');
    link.setAttribute('href', profileLink);
    link.setAttribute('target', '_blank');
    link.className = 'custom-profile-link';
    link.setAttribute('style', 'text-decoration: none;');

    let icon = document.createElement('img');
    icon.setAttribute('src', chrome.runtime.getURL('icon.png'));
    icon.setAttribute('style', 'height: 32px; width: 32px; margin-left: 5px;');

    link.appendChild(icon);
    userNameElement.appendChild(link);

    let address = await fetchUserAddress(username);
    if (!address) {
        return;
    }
    let prices = await getPricesFromContract(address);
    if (!prices) {
        return;
    }

    let sellPriceConverted = parseFloat(ethers.utils.formatUnits(prices.sellPriceAfterFee, 18)).toFixed(2);
    let buyPriceConverted = parseFloat(ethers.utils.formatUnits(prices.buyPriceAfterFee, 18)).toFixed(2);

    let buyButton = document.createElement('button');
    buyButton.textContent = `Buy (${buyPriceConverted})`;
    buyButton.setAttribute('style', 'color: white; background-color: green; margin-left: 5px; font-size: 18px; cursor: pointer;');
    buyButton.onclick = function () {
        window.postMessage({
            type: "BUY_SHARES",
            userAddress: address,
            price: prices.buyPriceAfterFee,
        }, "*");
    };

    let sellButton = document.createElement('button');
    sellButton.textContent = `Sell (${sellPriceConverted})`;
    sellButton.setAttribute('style', 'color: white; background-color: red; margin-left: 5px; font-size: 18px; cursor: pointer;');
    sellButton.onclick = function () {
        window.postMessage({
            type: "SELL_SHARES",
            userAddress: address
        }, "*");
    };

    userNameElement.appendChild(sellButton);
    userNameElement.appendChild(buyButton);
}

function addTimelineLink(userNameElement) {
    if (userNameElement.querySelector('.custom-profile-link')) return;

    const userNameSpan = userNameElement.querySelector('a');
    if (!userNameSpan) return;

    const usernameText = userNameSpan.href.split('/')[3];
    const profileLink = `https://starsarena.com/${usernameText}`;

    let link = document.createElement('a');
    link.setAttribute('href', profileLink);
    link.setAttribute('target', '_blank');
    link.className = 'custom-profile-link';

    let icon = document.createElement('img');
    icon.setAttribute('src', chrome.runtime.getURL('icon.png'));
    icon.setAttribute('style', 'height: 20px; width: 20px; margin-left: 5px;');
    link.appendChild(icon);

    userNameElement.querySelector('.css-1dbjc4n.r-1d09ksm.r-18u37iz.r-1wbh5a2').appendChild(link);
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
