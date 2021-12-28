pragma solidity 0.6.12;

interface ERC20 {
    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    function transfer(address recipient, uint256 amount)
        external
        returns (bool);

    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    function approve(address spender, uint256 amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
}

contract LMNExit {
    ERC20 public token;
    uint256 public rate;
    uint256 public totalExit;
    uint256 public finalPrice;

    bool public state;

    address payable public governance;
    address public lmnSend;

    event CashBackDone(
        address investor,
        uint256 ewtBack,
        uint256 lmnAmount,
        uint256 date
    );

    event StateChange(address indexed user, bool state);

    constructor(
        address payable _governance,
        address _lmnSend,
        ERC20 _token
    ) public {
        governance = _governance;
        lmnSend = _lmnSend;
        token = _token;
        rate = 83;
        totalExit = 0;
        state = true;
    }

    receive() external payable {}

    function cashBack(uint256 lmnAmount) public payable {
        require(state == true, "Service not Available");

        uint256 balance = token.balanceOf(msg.sender);
        require(balance >= lmnAmount, "Not Enough LMN ");
        uint256 ewtBack = lmnAmount / rate;
        require((address(this).balance - ewtBack) > 0, "AQUI ESTA LA MOVIDA");
        require(
            token.transferFrom(msg.sender, lmnSend, lmnAmount),
            "LMN not sended"
        );
        msg.sender.transfer(ewtBack);

        emit CashBackDone(msg.sender, ewtBack, lmnAmount, now);
    }

    function changeState() public {
        require(msg.sender == governance, "Not Allowed");
        state = !state;

        emit StateChange(msg.sender, state);
    }

    function withdrawUnsoldTokens(uint256 _tokens)
        public
        returns (bool success)
    {
        require(msg.sender == governance, "!governance");

        require(token.transfer(governance, _tokens), "Transfer not successful");

        return true;
    }

    function withdrawEthers(uint256 _weiAmount) public returns (bool success) {
        require(msg.sender == governance, "Only authorized method !");

        governance.transfer(_weiAmount);

        return true;
    }
}
