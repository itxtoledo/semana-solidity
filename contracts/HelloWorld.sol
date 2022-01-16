// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
contract HelloWorld {
    string public messageState = "Ola semana solidity!";

    string public constant MESSAGE_CONSTANT = "Ola constante!";

    address public constant DONATION_ADDRESS =
        0x618e6C85B289c4edFc6539401d89D0Aa8aD2d6cF;

    address public immutable OWNER;

    constructor() {
        OWNER = msg.sender;
    }

    function greetings() public pure returns (string memory) {
        string memory internalmessage = "Ola semana solidity!";

        return internalmessage;
    }

    function getBlockNumber() public view returns (uint256) {
        return block.number;
    }

    // function setgreetings(string memory newMessage) public {
    //     message = newMessage;
    // }
}
