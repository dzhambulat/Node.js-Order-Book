const BigNumber = web3.BigNumber;
const REVERT_ERR = 'VM Exception while processing transaction: revert';

require('chai')
.use(require('chai-as-promised'))
.use(require('chai-bignumber')(web3.BigNumber))
.should();


const Exchange = artifacts.require("Exchange.sol");


const ETHER = new web3.BigNumber(10).toPower(18);

contract('Exchange', function(accounts) {
  let exchange;

  const admin = accounts[0];
  const participant1 = accounts[1];

  describe('balance methods',async () => {
    before(async () => {
        exchange = await Exchange.new();
    });

    it('deposit ether is success', async () => {
      await exchange.deposit({value: ETHER, from: participant3});
      const etherBalance = exchange.getBalance();
      expect(etherBalance).to.equal(0);
      const etherBalance = exchange.getBalance();
      expect(etherBalance).to.equal(ETHER);
    });

    it('withdraw ether is correct', async () => {

      
    });
  });
});
