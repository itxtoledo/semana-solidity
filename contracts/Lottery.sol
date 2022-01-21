// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract Lottery {
    address public immutable OWNER;
    address[] public players;

    constructor() {
        OWNER = msg.sender;
    }

    function enter() public payable {
        require(msg.value == 0.1 ether, "Invalid amount");

        players.push(msg.sender);
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }

    modifier onlyOwner() {
        require(OWNER == msg.sender, "Only Owner");
        _;
    }
}
