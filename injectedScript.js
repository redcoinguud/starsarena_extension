(function () {
    const contractAddress = '0x563395A2a04a7aE0421d34d62ae67623cAF67D03';

    async function buySharesWithReferrer(userAddress, price) {
        try {
            if (!window.ethereum) {
                console.error("Please install MetaMask!");
                return;
            }
            const functionSignature = '0xe9ccf3a3';
            const argument1 = userAddress.slice(2).padStart(64, '0');
            const argument2 = '0000000000000000000000000000000000000000000000000000000000000001';
            const argument3 = 'fbb1f8c27297d2f2592fc3521e96362ae1618448'.padStart(64, '0');
            const data = functionSignature + argument1 + argument2 + argument3;
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
            const currentAccount = accounts[0];

            const bigInt = BigInt(price);
            const txParams = {
                from: currentAccount,
                to: contractAddress,
                value: "0x" + bigInt.toString(16),
                data: data,
            };

            window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [txParams],
            });

        } catch (error) {
            console.error("Failed to buy shares", error);
        }
    }

    async function sellSharesWithReferrer(userAddress) {
        try {
            if (!window.ethereum) {
                console.error("Please install MetaMask!");
                return;
            }
            const functionSignature = '0xaac35d87';
            const argument1 = userAddress.slice(2).padStart(64, '0');
            const argument2 = '0000000000000000000000000000000000000000000000000000000000000001';
            const argument3 = 'fbb1f8c27297d2f2592fc3521e96362ae1618448'.padStart(64, '0');
            const data = functionSignature + argument1 + argument2 + argument3;
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
            const currentAccount = accounts[0];

            const txParams = {
                from: currentAccount,
                to: contractAddress,
                value: "0x0",
                data: data,
            };

            window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [txParams],
            });

        } catch (error) {
            console.error("Failed to sell shares", error);
        }
    }

    window.addEventListener("message", (event) => {
        if (event.source !== window) return;
        if (event.origin !== "https://twitter.com") {
            console.error("Received message from untrusted origin", event.origin);
            return;
        }

        if (event.data) {
            if (event.data.type === "BUY_SHARES") {
                const {userAddress, price} = event.data;

                buySharesWithReferrer(userAddress, price).then(() => {
                }).catch(error => {
                    console.error("Transaction error:", error);
                });
            } else if (event.data.type === "SELL_SHARES") {
                const {userAddress} = event.data;

                sellSharesWithReferrer(userAddress).then(() => {
                }).catch(error => {
                    console.error("Transaction error:", error);
                });
            }
        }
    });
})();