pragma solidity >=0.7.0 <0.8.0;

contract LRK_LAWS_1 {
    
    function getLaws(uint8 law) public view returns(string memory result){
        result = laws[law];
    }
    
    string[] public laws = [
        hex"3027696e697320c4af73746174796d6173206e6565677a697374756f6a61202d206175746f726961757320706174616973612e",
        hex"4c69657475766f732076616c73747962c49720797261206e657072696b6c6175736f6d612064656d6f6b726174696ec497207265737075626c696b612e",
        hex"4c69657475766f732076616c73747962c499206b757269612054617574612e205375766572656e697465746173207072696b6c6175736f205461757461692e"
    ];
    
}

contract LRK_MAIN {

    function readLaw1(address addr) public view returns (string memory answer){
        return LRK_LAWS_1(addr).getLaws(1);
    }
    
}