pragma solidity >=0.7.0 <0.8.6;

contract LRK_LAWS {
    function get_laws(uint8 number) public view returns(string memory) {}
}

contract LRK {
    address private OWNER;
    uint public SMART_CONTRACT_RELEASE_BY_UNIXTIME;
    uint32 public constant CONSTITUTION_RELEASE_BY_UNIXTIME = 720716400;
    string public constant LITHUANIAN_ROOTS_INFO = hex"4c494554555649c5b22054415554410a0ae280932070726965c5a12064617567656cc4af20616dc5be69c5b32073756bc5ab72757369204c69657475766f732076616c73747962c4992c0ae28093206a6f732074656973696e6975732070616d61747573206772696e64757369204c69657475766f7320537461747574616973206972204c69657475766f73205265737075626c696b6f73204b6f6e737469747563696a6f6d69732c0ae2809320c5a1696d746d65c48d696169732061746b616b6c6961692067796e757369207361766f206c61697376c499206972206e657072696b6c6175736f6d7962c4992c0ae280932069c5a1736175676f6a757369207361766f206476617369c4852c2067696d74c4856ac485206b616c62c4852c207261c5a174c48520697220706170726fc48d6975732c0ae2809320c4af6bc5ab6e7964616d612070726967696d74696ec49920c5be6d6f6761757320697220546175746f732074656973c499206c61697376616920677976656e7469206972206b75727469207361766f2074c49776c5b32069722070726f74c4977669c5b320c5be656dc4976a6520e28093206e657072696b6c6175736f6d6f6a65204c69657475766f732076616c73747962c4976a652c0ae280932070756f73656cc49764616d61204c69657475766f7320c5be656dc4976a652074617574696ec4992073616e74617276c4992c0ae28093207369656b64616d612061747669726f732c2074656973696e676f732c206461726e696f732070696c696574696ec4977320766973756f6d656ec497732069722074656973696ec497732076616c73747962c497732c0a617467696d7573696f73204c69657475766f732076616c73747962c497732070696c6965c48d69c5b32076616c696120707269696d6120697220736b656c62696120c5a169c485204b4f4e535449545543494ac4842e";

    uint8[16] private LAW_COUNT_PER_ARTICLE = [0, 17, 20, 8, 9, 22, 14, 11, 7, 10, 6, 8, 2, 12, 3, 5];
    address[16] private LRK_ARTICLE_ADDRESSES = [
        0x0000000000000000000000000000000000000000,
        0x2F0DF4d9250082833fddba9e28c1767e25a05083,
        0x621EbfccEf505B1CBDC847e27aD7dd42A9B84C0e,
        0x45ddEE5fC0CE79b592713b6dF1330807031b7E5e,
        0x2C3c61F5ff3950B46626968788695dD164d5e37a,
        0xd55C51e363932eB7b1909b3bdB157E9f1f040041,
        0x8e5CACfc16224FccF79ec901E0FF1Eb5d707BB6a,
        0xace1E58f60090aF6F58132071e328980b1999c09,
        0x9a8839Dd7F93315D96A39603ECBEbfD1E4cce350,
        0x757Ad1061f4f92Ef8799e4E4287e00Ba82f7E9C7,
        0x00E230f133E1d47a1A60Ca65aAC0CA46E9A39743,
        0x4164D8610Db3b0826fcb0211ea556b964830CD73,
        0x6D26d2d01d9CC461cD646fDff078374F6D20239c,
        0xD88Be5804B6DCb8F93B7f18E83bd8796161444b5,
        0x798C7705b83D4498ba57F85CD42Dd8510A82Ab18,
        0xf509dD2a1F3a152C6999F9da468B371501ab45dF
        ];


    constructor() {
        OWNER = msg.sender;
        SMART_CONTRACT_RELEASE_BY_UNIXTIME = block.timestamp;
    }

    function get_total_laws_count() public view returns(uint8 result) {
        for (uint8 i = 0; i < LAW_COUNT_PER_ARTICLE.length; i++) {
            result = result + LAW_COUNT_PER_ARTICLE[i];
        }
    }

    // Returns the law range for the Nth article
    function getArticleRange(uint8 _number) private view returns(uint8 _start, uint8 _end){
        //check_valid_article(_number);
        _start = 1;
        
        // This loop sums all law counts up to the Nth article, provided in _number to form the starting law number;
        // It forms starting for listing laws, for example: input 3, result = 38, meaning 3rd article begins with 38th law;
        for (uint8 article = 0; article < _number; article++){
            _start = _start + LAW_COUNT_PER_ARTICLE[article];
        }

        // Same loop as above, except it calculates the ending law number in the article, provided by _number;
        for (uint8 article = 0; article < _number + 1; article++){
            _end = _end + LAW_COUNT_PER_ARTICLE[article];
        }
    }
    
    function getArticleNumFromLaw(uint8 _law_number) private view returns (uint8 result){
        uint8 _start = 1;

        for (uint8 i = 0; i < LAW_COUNT_PER_ARTICLE.length; i++){
            _start = _start + LAW_COUNT_PER_ARTICLE[i];
            if (_start > _law_number){
                result = i;
                break;
            }
        }
        return result;
    }


    function read_law(uint8 _number) public view law_range_requirement(_number) returns (string memory) {
        uint8 _article = getArticleNumFromLaw(_number);
        address _addr = LRK_ARTICLE_ADDRESSES[_article];

        return LRK_LAWS(_addr).get_laws(_number);
    }
    
    
    modifier law_range_requirement(uint8 number) {
        require(number >= 1 && number <= 155, "Law number out of range");
        _;
    }
    


    modifier is_owner() {
        require(msg.sender == OWNER, "Caller is not smart contract owner");
        _;
    }

    function kill_sc() public is_owner {
       selfdestruct(msg.sender);
   }
}
