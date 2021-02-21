pragma solidity >=0.7.0 <0.8.6;

contract LRK_LAWS {
    function get_laws(uint8 number) public view returns(string memory) {}
}

contract LRK {
    address private OWNER;
    uint public SMART_CONTRACT_RELEASE_BY_UNIXTIME;
    uint32 public constant CONSTITUTION_RELEASE_BY_UNIXTIME = 720716400;
    string public constant LITHUANIAN_ROOTS_INFO = hex"4c494554555649c5b22054415554410a0ae280932070726965c5a12064617567656cc4af20616dc5be69c5b32073756bc5ab72757369204c69657475766f732076616c73747962c4992c0ae28093206a6f732074656973696e6975732070616d61747573206772696e64757369204c69657475766f7320537461747574616973206972204c69657475766f73205265737075626c696b6f73204b6f6e737469747563696a6f6d69732c0ae2809320c5a1696d746d65c48d696169732061746b616b6c6961692067796e757369207361766f206c61697376c499206972206e657072696b6c6175736f6d7962c4992c0ae280932069c5a1736175676f6a757369207361766f206476617369c4852c2067696d74c4856ac485206b616c62c4852c207261c5a174c48520697220706170726fc48d6975732c0ae2809320c4af6bc5ab6e7964616d612070726967696d74696ec49920c5be6d6f6761757320697220546175746f732074656973c499206c61697376616920677976656e7469206972206b75727469207361766f2074c49776c5b32069722070726f74c4977669c5b320c5be656dc4976a6520e28093206e657072696b6c6175736f6d6f6a65204c69657475766f732076616c73747962c4976a652c0ae280932070756f73656cc49764616d61204c69657475766f7320c5be656dc4976a652074617574696ec4992073616e74617276c4992c0ae28093207369656b64616d612061747669726f732c2074656973696e676f732c206461726e696f732070696c696574696ec4977320766973756f6d656ec497732069722074656973696ec497732076616c73747962c497732c0a617467696d7573696f73204c69657475766f732076616c73747962c497732070696c6965c48d69c5b32076616c696120707269696d6120697220736b656c62696120c5a169c485204b4f4e535449545543494ac4842e";
   // mapping(uint8 => uint8) public laws_per_article;
    
    uint8[16] private LAW_COUNT_PER_ARTICLE = [0, 17, 20, 8, 9, 22, 14, 11, 7, 10, 6, 8, 2, 12, 3, 5];
    mapping(uint8 => address) private LRK_ARTICLE_ADDRESS_MAP;
    //mapping(uint8 => uint8) public LRK_ARTICLE_LAW_MAP;


    constructor() {
        OWNER = msg.sender;
        SMART_CONTRACT_RELEASE_BY_UNIXTIME = block.timestamp;
        LRK_ARTICLE_ADDRESS_MAP[1] = 0xEAa2BA969827e60215E691a8B7eD98F0E1Ea4103;
        LRK_ARTICLE_ADDRESS_MAP[2] = 0xEAa2BA969827e60215E691a8B7eD98F0E1Ea4103;
        LRK_ARTICLE_ADDRESS_MAP[3] = 0xb929Baa8147C86025b04974EF39492185A791aec;
        LRK_ARTICLE_ADDRESS_MAP[4] = 0x57BD34512C5b8FbfDbB6A35f7FF1c2f5AD32F987;
        LRK_ARTICLE_ADDRESS_MAP[5] = 0xAA31967fa6Cb809f9c1E89A903Ce0FBa6e100127;
        LRK_ARTICLE_ADDRESS_MAP[6] = 0xba260dDbfC1B037A1D493a43061c62504cf3D172;
        LRK_ARTICLE_ADDRESS_MAP[7] = 0xEb5eF7cc8E8FBe02180082983529A263F14bDa85;
        LRK_ARTICLE_ADDRESS_MAP[8] = 0xd7F18e09072a51B53285854d2E817a2D2Dbb64d0;
        LRK_ARTICLE_ADDRESS_MAP[9] = 0xD9b4B24e08463B339fFf3589f02cf757D51869B9;
        LRK_ARTICLE_ADDRESS_MAP[10] = 0x69021b10BaaBe49023a379E94c8B8F387196a5Fc;
        LRK_ARTICLE_ADDRESS_MAP[11] = 0x03b43Af3e1B61E50B857B3c28c99eFEf17B37eB2;
        LRK_ARTICLE_ADDRESS_MAP[12] = 0xFAC8d14dba5dff733F084c534964717b997813D2;
        LRK_ARTICLE_ADDRESS_MAP[13] = 0xD7d3433e33d26992468862E23c418F5f3dBd344d;
        LRK_ARTICLE_ADDRESS_MAP[14] = 0x70725BEFE6fF762371F2b4160d8201a10b20195F;
        LRK_ARTICLE_ADDRESS_MAP[15] = 0xEAa2BA969827e60215E691a8B7eD98F0E1Ea4103;
        
        // Creates a map containing Article => Law map data for all laws (150+)
        //mapArticlesToLaws();
        
        //for (uint8 i = 0; i < LAW_COUNT_PER_ARTICLE.length; i++){
        //    laws_per_article[i] = LAW_COUNT_PER_ARTICLE[i];
        //}
        
        
    }

    function get_total_laws_count() public view returns(uint8 result) {
        for (uint8 i = 0; i < LAW_COUNT_PER_ARTICLE.length; i++) {
            result = result + LAW_COUNT_PER_ARTICLE[i];
        }
    }
/*
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
    */

// #############################

    // Returns the law range for the Nth article
    function getArticleRange(uint8 _number) public view returns(uint8 _start, uint8 _end){
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
    
    function getArticleNumFromLaw(uint8 _law_number) public view returns (uint8 result){
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

/*
    function mapArticlesToLaws() private {
        uint8 _total_laws = get_total_laws_count();
        uint8 _article_num;

        for (uint8 i = 1; i <= _total_laws; i++){
            _article_num = getArticleNumFromLaw(i);
            LRK_ARTICLE_LAW_MAP[i] = _article_num;
        }
    }

    function getArticlesToLawTest(uint8 _number) public view returns (uint8 result){
        result = LRK_ARTICLE_LAW_MAP[_number];
    }
*/

    function read_law(uint8 _number) public view returns (string memory result) {
        uint8 _article = getArticleNumFromLaw(_number);
        address _addr = LRK_ARTICLE_ADDRESS_MAP[_article];
        //uint8 test = 5;
        //return _addr;
        result = LRK_LAWS(_addr).get_laws(_number);
        
        //return LRK_LAWS(_addr).get_laws(_number);
        return result;

    }
    
//    function read_test(uint8 _number) public view returns (string memory){
        //return LRK_LAWS(LRK_CONTRACT_ADDRESS[5]).get_laws(_number);
    //}
    
    
    modifier laws_requirements(uint8 number) {
        require(number >= 1 && number <= 155, "There is no law with this number");
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
