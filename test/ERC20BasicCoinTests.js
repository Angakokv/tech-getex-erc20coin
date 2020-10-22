const ERC20BasicCoin = artifacts.require("ERC20BasicCoin");

contract('ERC20BasicCoin', (accounts) => {
  it('Should transfer coins correctly', async () => {
    const erc20BasicCoinInstance = await ERC20BasicCoin.deployed();

    // Setup 2 accounts
    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    // Get initial balances of first and second account
    const accountOneStartingBalance = (await erc20BasicCoinInstance.balanceOf.call(accountOne)).toNumber();
    const accountTwoStartingBalance = (await erc20BasicCoinInstance.balanceOf.call(accountTwo)).toNumber();

    // Make transaction from first account to second
    const amount = 500;
    await erc20BasicCoinInstance.transfer(accountTwo, amount, { from: accountOne });

    // Get balances of first and second account after transactions
    const accountOneEndingBalance = (await erc20BasicCoinInstance.balanceOf.call(accountOne)).toNumber();
    const accountTwoEndingBalance = (await erc20BasicCoinInstance.balanceOf.call(accountTwo)).toNumber();

    assert.equal(accountOneEndingBalance, accountOneStartingBalance - amount, "Amount wasn't correctly taken from the sender");
    assert.equal(accountTwoEndingBalance, accountTwoStartingBalance + amount, "Amount wasn't correctly sent to the receiver");
  });
});
