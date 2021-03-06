pragma solidity >=0.7.0 <0.8.6;

contract LRK_LAWS_12 {
    
    mapping(uint8 => string) private LAW_VALUE;

    constructor(){
        LAW_VALUE[133] = hex"56616c73747962c49773206b6f6e74726f6cc497732073697374656dc48520697220c4af67616c696f6a696d7573206e75737461746f20c4af73746174796d61732e0a56616c73747962c49773206b6f6e74726f6c6569207661646f7661756a612076616c73747962c49773206b6f6e74726f6c6965726975732c206b7572c4af2070656e6b657269656d73206d6574616d73205265737075626c696b6f73205072657a6964656e746f207465696b696d7520736b69726961205365696d61732e0a56616c73747962c49773206b6f6e74726f6c6965726975732c2070726164c49764616d617320656974692070617265696761732c207072697369656b69612e20507269657361696bc485206e75737461746f20c4af73746174796d61732e";
        LAW_VALUE[134] = hex"56616c73747962c49773206b6f6e74726f6cc49720707269c5be69c5ab72692c2061722074656973c4977461692076616c646f6d6173206972206e6175646f6a616d61732076616c73747962c4977320747572746173206972206b6169702076796b646f6d61732076616c73747962c497732062697564c5be657461732e0a56616c73747962c49773206b6f6e74726f6c696572697573207465696b6961205365696d75692069c5a1766164c4852061706965206d6574696ec4992062697564c5be65746f20c4af76796b64796d6f20617079736b616974c4852e";
    }

    function get_laws(uint8 _number) public view returns (string memory result) {
        result = LAW_VALUE[_number];
        return result;
    }
}