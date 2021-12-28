// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.8.0;

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
contract HelloWorld {
    string public message = "Ola semana solidity!";

    function greetings() public view returns (string memory) {
        return message;
    }
}
