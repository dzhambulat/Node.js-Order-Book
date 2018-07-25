pragma solidity ^0.4.23;

interface ERC20 {
    function transfer(address _to, uint _value) external returns (bool success);
    function balanceOf(address _owner) external view returns (uint balance);
}

library SafeMath {

    /**
    * @dev Multiplies two numbers, throws on overflow.
    */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) {
            return 0;
        }
        uint256 c = a * b;
        assert(c / a == b);
        return c;
    }

    /**
    * @dev Integer division of two numbers, truncating the quotient.
    */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        // assert(b > 0); // Solidity automatically throws when dividing by 0
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold
        return c;
    }

    /**
    * @dev Substracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
    */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return a - b;
    }

    /**
    * @dev Adds two numbers, throws on overflow.
    */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }
}

contract Exchange {
    using SafeMath for uint;
  address public owner;
  mapping (address => uint) balances;
  mapping (address => mapping(address=>uint)) tokenBalances;
  constructor() public {
    owner = msg.sender;
  }

  modifier onlyOwner()
  {
      require (msg.sender == owner);
      _;
  }

  function deposit() payable
  {
      balances[msg.sender] = msg.value;
  }

  function getEtherBalance() external view returns (uint)
  {
      return balances[msg.sender];
  }
  
  function withdraw()
  {
      require (balances[msg.sender]>0);
      balances[msg.sender] = 0;
      msg.sender.transfer(balances[msg.sender]);
  }
  
  function depositTokens(address token, uint value)
  {
      tokenBalances[msg.sender][token] = tokenBalances[msg.sender][token].add(value);
      require(ERC20(token).transfer(this, value));
  }

  function getTokenbalance(address token) external view returns(uint)
  {
      return tokenBalances[msg.sender][token];
  }

  function withdrawTokens(address token)
  {
      tokenBalances[msg.sender][token] = 0;
      require(ERC20(token).transfer(this, tokenBalances[msg.sender][token]));
  }

}
