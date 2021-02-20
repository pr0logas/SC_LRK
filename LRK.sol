pragma solidity >=0.7.0 <0.8.6;

contract LRK_LAWS {
    function get_laws(uint8 number) public view returns(string memory) {}
}


contract LRK {
    address private OWNER;
    uint public SMART_CONTRACT_RELEASE_BY_UNIXTIME;
    uint32 public constant CONSTITUTION_RELEASE_BY_UNIXTIME = 720716400;
    uint8[16] private LAWS_COUNT_PER_ARTICLE = [0, 17, 20, 8, 9, 22, 14, 11, 7, 10, 6, 8, 2, 12, 3, 5];
    uint8 public constant LAWS_ARTICLE_COUNT = 15;
    string public constant LITHUANIAN_ROOTS_INFO = hex"4c494554555649c5b22054415554410a0ae280932070726965c5a12064617567656cc4af20616dc5be69c5b32073756bc5ab72757369204c69657475766f732076616c73747962c4992c0ae28093206a6f732074656973696e6975732070616d61747573206772696e64757369204c69657475766f7320537461747574616973206972204c69657475766f73205265737075626c696b6f73204b6f6e737469747563696a6f6d69732c0ae2809320c5a1696d746d65c48d696169732061746b616b6c6961692067796e757369207361766f206c61697376c499206972206e657072696b6c6175736f6d7962c4992c0ae280932069c5a1736175676f6a757369207361766f206476617369c4852c2067696d74c4856ac485206b616c62c4852c207261c5a174c48520697220706170726fc48d6975732c0ae2809320c4af6bc5ab6e7964616d612070726967696d74696ec49920c5be6d6f6761757320697220546175746f732074656973c499206c61697376616920677976656e7469206972206b75727469207361766f2074c49776c5b32069722070726f74c4977669c5b320c5be656dc4976a6520e28093206e657072696b6c6175736f6d6f6a65204c69657475766f732076616c73747962c4976a652c0ae280932070756f73656cc49764616d61204c69657475766f7320c5be656dc4976a652074617574696ec4992073616e74617276c4992c0ae28093207369656b64616d612061747669726f732c2074656973696e676f732c206461726e696f732070696c696574696ec4977320766973756f6d656ec497732069722074656973696ec497732076616c73747962c497732c0a617467696d7573696f73204c69657475766f732076616c73747962c497732070696c6965c48d69c5b32076616c696120707269696d6120697220736b656c62696120c5a169c485204b4f4e535449545543494ac4842e";
    address private constant LRK_LAWS_1_ADDRESS = 0x9ecEA68DE55F316B702f27eE389D10C2EE0dde84;
    address private constant LRK_LAWS_2_ADDRESS = 0x1bB5bf909d1200fb4730d899BAd7Ab0aE8487B0b;
    mapping(uint8 => uint8) public laws_per_article;

    constructor() {
        OWNER = msg.sender;
        SMART_CONTRACT_RELEASE_BY_UNIXTIME = block.timestamp;
        
        for (uint8 i = 0; i < LAWS_COUNT_PER_ARTICLE.length; i++){
            laws_per_article[i] = LAWS_COUNT_PER_ARTICLE[i];
        }
    }

    function read_laws_1(uint8 _number) public view laws_1_requirements(_number) returns (string memory) {
        return LRK_LAWS(LRK_LAWS_1_ADDRESS).get_laws(_number);
    }

    function read_laws_2(uint8 _number) public view laws_2_requirements(_number) returns (string memory)  {
        return LRK_LAWS(LRK_LAWS_2_ADDRESS).get_laws(_number);
    }

    modifier laws_1_requirements(uint8 number) {
        require(number >= 1 && number <= 17, "There is no law with this number");
        _;
    }
    
    modifier laws_2_requirements(uint8 number) {
        require(number >= 1 && number <= 20, "There is no law with this number");
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

