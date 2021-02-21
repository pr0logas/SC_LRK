pragma solidity >=0.7.0 <0.8.6;

contract LRK_LAWS_15 {
    
    mapping(uint8 => string) private LAW_VALUE;

    constructor(){
        LAW_VALUE[150] = hex"4c69657475766f73205265737075626c696b6f73204b6f6e737469747563696a6f73207375646564616dc4856a612064616c696d69207972613a0a31393931206d2e207661736172696f20313120642e204b6f6e737469747563696e697320c4af73746174796d617320e2809e44c4976c204c69657475766f732076616c73747962c49773e2809c3b0a31393932206d2e20626972c5be656c696f203820642e204b6f6e737469747563696e697320616b74617320e2809e44c4976c204c69657475766f73205265737075626c696b6f73206e6573696a756e67696d6f20c4af20706f7374736f76696574696e657320527974c5b32073c4856a756e676173e2809c3b0a31393932206d2e207370616c696f20323520642e20c4ae73746174796d617320e2809e44c4976c204c69657475766f73205265737075626c696b6f73204b6f6e737469747563696a6f7320c4af736967616c696f6a696d6f20747661726b6f73e2809d3b0a32303034206d2e206c6965706f7320313320642e204b6f6e737469747563696e697320616b74617320e2809e44c4976c204c69657475766f73205265737075626c696b6f73206e6172797374c49773204575726f706f732053c4856a756e676f6a65e2809c2e0a537472616970736e696f2070616b656974696d61733a0a4e722e2049582d323334332c20323030342d30372d31332c20c5bd696e2e2c20323030342c204e722e203131312d343132332028323030342d30372d313729";
        LAW_VALUE[151] = hex"c5a069204c69657475766f73205265737075626c696b6f73204b6f6e737469747563696a6120c4af736967616c696f6a61206b6974c485206469656ec48520706f207265666572656e64756d6f2072657a756c746174c5b3206f66696369616c617573207061736b656c62696d6f2069722073752073c4856c7967612c206a65696775207265666572656e64756d65206a616920707269746172732064617567696175206b61697020707573c49720766973c5b3204c69657475766f73205265737075626c696b6f732070696c6965c48d69c5b32c20747572696ec48d69c5b32072696e6b696dc5b32074656973c4992e";
        LAW_VALUE[152] = hex"c5a0696f73204b6f6e737469747563696a6f73206972206a6f73206174736b6972c5b3206e756f73746174c5b320c4af736967616c696f6a696d6f20747661726bc485207265676c616d656e74756f6a61204c69657475766f73205265737075626c696b6f7320c4af73746174796d617320e2809e44c4976c204c69657475766f73205265737075626c696b6f73204b6f6e737469747563696a6f7320c4af736967616c696f6a696d6f20747661726b6f73e2809c2c206b7572697320707269696d616d6173207265666572656e64756d75206b6172747520737520c5a16961204c69657475766f73205265737075626c696b6f73204b6f6e737469747563696a612e";
        LAW_VALUE[153] = hex"4b616920c5a169204c69657475766f73205265737075626c696b6f73204b6f6e737469747563696a612062757320707269696d7461207265666572656e64756d752c204c69657475766f73205265737075626c696b6f73205365696d617320696b692031393933206d6574c5b3207370616c696f203235206469656e6f7320332f3520766973c5b3205365696d6f206e617269c5b32062616c73c5b32064617567756d612067616c692070616b6569737469204c69657475766f73205265737075626c696b6f73204b6f6e737469747563696a6f73206e756f7374617461732c206b7572696f73207972612034372c2035352c20353620737472616970736e69756f73652c20353820737472616970736e696f20616e74726f73696f732064616c69657320322070756e6b74652c2036352c2036382c20363920737472616970736e69756f73652c20383420737472616970736e696f2031312069722031322070756e6b74756f73652c20383720737472616970736e696f207069726d6f6a6f6a652064616c796a652c2039362c203130332c2031313820737472616970736e69756f73652c2031313920737472616970736e696f206b6574766972746f6a6f6a652064616c796a652e";
        LAW_VALUE[154] = hex"5265666572656e64756d7520707269696d74c485204c69657475766f73205265737075626c696b6f73204b6f6e737469747563696ac485206972204c69657475766f73205265737075626c696b6f7320c4af73746174796dc48520e2809e44c4976c204c69657475766f73205265737075626c696b6f73204b6f6e737469747563696a6f7320c4af736967616c696f6a696d6f20747661726b6f73e2809c20706173697261c5a16f206972206e652076c4976c696175206b61697020706572203135206469656ec5b320736b656c626961204c69657475766f73205265737075626c696b6f732041756bc5a1c48d69617573696f73696f732054617279626f73205069726d696e696e6b61732e";
        LAW_VALUE[155] = hex"4c49455455564f53205245535055424c494b4f530a41554bc5a0c48c49415553494f53494f532054415259424f53205049524d494e494e4b41530a5659544155544153204c414e44534245524749530a0a56696c6e6975732c2031393932206d2e206c61706b7269c48d696f203620642e";
    }

    function get_laws(uint8 _number) public view returns (string memory result) {
        result = LAW_VALUE[_number];
        return result;
    }
}