pragma solidity >=0.7.0 <0.8.0;

contract LRK_LAWS_1 {
    function getLaws(uint8 law) public view returns(string memory result){
}

contract LRK_MAIN {

    function readLaw1(address addr) public view returns (string memory answer){
        return LRK_LAWS_1(addr).getLaws(1);
    }
    
}