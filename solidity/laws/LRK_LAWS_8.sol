pragma solidity >=0.7.0 <0.8.6;

contract LRK_LAWS_8 {
    
    mapping(uint8 => string) private LAW_VALUE;

    constructor(){
        LAW_VALUE[102] = hex"4b6f6e737469747563696e697320546569736d617320737072656e64c5be69612c20617220c4af73746174796d6169206972206b697469205365696d6f20616b746169206e6570726965c5a174617261756a61204b6f6e737469747563696a61692c206f205265737075626c696b6f73205072657a6964656e746f20697220567972696175737962c4977320616b74616920e28093206e6570726965c5a174617261756a61204b6f6e737469747563696a6169206172626120c4af73746174796d616d732e0a4b6f6e737469747563696e696f20546569736d6f20737461747573c485206972206a6f20c4af67616c696f6a696dc5b32076796b64796d6f20747661726bc485206e75737461746f204c69657475766f73205265737075626c696b6f73204b6f6e737469747563696e696f20546569736d6f20c4af73746174796d61732e";
        LAW_VALUE[103] = hex"4b6f6e737469747563696ec4af20546569736dc4852073756461726f20392074656973c4976a61692c20736b697269616d6920646576796e657269656d73206d6574616d732069722074696b207669656e6169206b6164656e63696a61692e204b6f6e737469747563696e697320546569736d6173206b6173207472656a69206d657461692061746e61756a696e616d6173207669656e7520747265c48d64616c69752e20506f2074726973206b616e6469646174757320c4af204b6f6e737469747563696e696f20546569736d6f2074656973c4976a757320736b69726961205365696d61732069c5a1206b616e6469646174c5b32c206b757269756f732070617465696b6961205265737075626c696b6f73205072657a6964656e7461732c205365696d6f205069726d696e696e6b61732069722041756bc5a1c48d69617573696f6a6f20546569736d6f207069726d696e696e6b61732c206f2074656973c4976a616973206a756f7320736b69726961205365696d61732e0a4b6f6e737469747563696e696f20546569736d6f207069726d696e696e6bc4852069c5a120c5a1696f20746569736d6f2074656973c4976ac5b320736b69726961205365696d6173205265737075626c696b6f73205072657a6964656e746f207465696b696d752e0a4b6f6e737469747563696e696f20546569736d6f2074656973c4976a6169732067616c692062c5ab746920736b697269616d69206e65707269656b6169c5a174696e676f732072657075746163696a6f73204c69657475766f73205265737075626c696b6f732070696c6965c48d6961692c20747572696e7479732061756bc5a174c4856ac4af2074656973696ec4af2069c5a173696c6176696e696dc485206972206e65206d61c5be65736ec4af206b616970203130206d6574c5b32074656973696e696f206172206d6f6b736c696e696f2070656461676f67696e696f20646172626f20706167616c2074656973696e696e6b6f207370656369616c7962c49920737461c5bec4852e";
        LAW_VALUE[104] = hex"4b6f6e737469747563696e696f20546569736d6f2074656973c4976a61692c20656964616d69207361766f2070617265696761732c20797261206e657072696b6c6175736f6d69206e756f206a6f6b696f732076616c73747962696ec4977320696e737469747563696a6f732c2061736d656e73206172206f7267616e697a6163696a6f73206972207661646f7661756a6173692074696b204c69657475766f73205265737075626c696b6f73204b6f6e737469747563696a612e0a50726965c5a12070726164c49764616d692065697469207361766f2070617265696761732c204b6f6e737469747563696e696f20546569736d6f2074656973c4976a6169205365696d65207072697369656b69612062c5ab74692069c5a174696b696d69204c69657475766f73205265737075626c696b6169206972204b6f6e737469747563696a61692e0a4b6f6e737469747563696e696f20546569736d6f2074656973c4976a616d73207461696b6f6d6920646172626f20697220706f6c6974696ec49773207665696b6c6f732061707269626f6a696d61692c206e757374617479746920746569736dc5b32074656973c4976a616d732e0a4b6f6e737469747563696e696f20546569736d6f2074656973c4976a6169207475726920746f6b69c485207061742061736d656e73206e656c6965c48d69616d7962c497732074656973c499206b616970206972205365696d6f206e61726961692e";
        LAW_VALUE[105] = hex"4b6f6e737469747563696e697320546569736d6173206e616772696ec4976a6120697220707269696d6120737072656e64696dc4852c206172206e6570726965c5a174617261756a61204c69657475766f73205265737075626c696b6f73204b6f6e737469747563696a6169204c69657475766f73205265737075626c696b6f7320c4af73746174796d6169206972206b697469205365696d6f20707269696d746920616b7461692e0a4b6f6e737469747563696e697320546569736d6173207461697020706174206e616772696ec4976a612c206172206e6570726965c5a174617261756a61204b6f6e737469747563696a616920697220c4af73746174796d616d733a0a3129205265737075626c696b6f73205072657a6964656e746f20616b7461693b0a3229205265737075626c696b6f7320567972696175737962c4977320616b7461692e0a4b6f6e737469747563696e697320546569736d6173207465696b69612069c5a176616461733a0a3129206172206e656275766f207061c5be65697374692072696e6b696dc5b320c4af73746174796d616920706572205265737075626c696b6f73205072657a6964656e746f206172205365696d6f206e617269c5b32072696e6b696d75733b0a3229206172205265737075626c696b6f73205072657a6964656e746f20737665696b61746f732062c5ab6b6cc497206c656964c5be6961206a616d20697220746f6c69617520656974692070617265696761733b0a3329206172204c69657475766f73205265737075626c696b6f73207461727074617574696ec49773207375746172747973206e6570726965c5a174617261756a61204b6f6e737469747563696a61693b0a3429206172205365696d6f206e617269c5b32069722076616c73747962c4977320706172656967c5ab6ec5b32c206b757269656d732070726164c49774612061706b616c746f732062796c612c206b6f6e6b726574c5ab73207665696b736d61692070726965c5a174617261756a61204b6f6e737469747563696a61692e";
        LAW_VALUE[106] = hex"54656973c499206b7265697074697320c4af204b6f6e737469747563696ec4af20546569736dc4852064c4976c2031303520737472616970736e696f207069726d6f6a6f6a652064616c796a65206e75726f647974c5b320616b74c5b3207475726920567972696175737962c4972c206e65206d61c5be696175206b61697020312f3520766973c5b3205365696d6f206e617269c5b32c20746169702070617420746569736d61692e0a44c4976c205265737075626c696b6f73205072657a6964656e746f20616b74c5b320737574696b696d6f207375204b6f6e737469747563696a6120697220c4af73746174796d61697320c4af204b6f6e737469747563696ec4af20546569736dc48520747572692074656973c499206b72656970746973206e65206d61c5be696175206b61697020312f3520766973c5b3205365696d6f206e617269c5b320697220746569736d61692e0a44c4976c20567972696175737962c4977320616b74c5b320737574696b696d6f207375204b6f6e737469747563696a6120697220c4af73746174796d61697320c4af204b6f6e737469747563696ec4af20546569736dc4852067616c69206b72656970746973206e65206d61c5be696175206b61697020312f3520766973c5b3205365696d6f206e617269c5b32c20746569736d61692c207461697020706174205265737075626c696b6f73205072657a6964656e7461732e0a4b69656b7669656e61732061736d756f20747572692074656973c499206b7265697074697320c4af204b6f6e737469747563696ec4af20546569736dc4852064c4976c204b6f6e737469747563696a6f732031303520737472616970736e696f207069726d6f6a6f6a6520697220616e74726f6a6f6a652064616c797365206e75726f647974c5b320616b74c5b32c206a65696775206ac5b32070616772696e647520707269696d74617320737072656e64696d6173207061c5be656964c49720c5a1696f2061736d656e73206b6f6e737469747563696e657320746569736573206172206c61697376657320697220c5a169732061736d756f2069c5a16e6175646f6a6f2076697361732074656973696ec497732067796e79626f7320707269656d6f6e65732e20c5a0696f732074656973c4977320c4af677976656e64696e696d6f20747661726bc485206e75737461746f204b6f6e737469747563696e696f20546569736d6f20c4af73746174796d61732e0a5265737075626c696b6f73205072657a6964656e746f207465696b696d6173204b6f6e737469747563696e69616d20546569736d7569206172205365696d6f206e75746172696d61732069c5a174697274692c20617220616b74617320737574696e6b61207375204b6f6e737469747563696a612c20737573746162646f20c5a1696f20616b746f2067616c696f6a696dc4852e0a507261c5a1797469204b6f6e737469747563696e696f20546569736d6f2069c5a17661646f732067616c69205365696d61732c206f2064c4976c205365696d6f2072696e6b696dc5b3206972207461727074617574696e69c5b3207375746172c48d69c5b320e28093206972205265737075626c696b6f73205072657a6964656e7461732e0a4b6f6e737469747563696e697320546569736d617320747572692074656973c499206174736973616b79746920707269696d7469206e616772696ec49774692062796cc4852061722072656e6774692069c5a1766164c4852c206a65696775206b72656970696d61736973206772696e64c5be69616d6173206e652074656973696e69616973206d6f7479766169732e0a537472616970736e696f2070616b656974696d61733a0a4e722e20584949492d323030342c20323031392d30332d32312c207061736b656c6274612054415220323031392d30342d30322c20692e206b2e20323031392d3035333330";
        LAW_VALUE[107] = hex"4c69657475766f73205265737075626c696b6f7320c4af73746174796d617320286172206a6f2064616c6973292061726261206b69746173205365696d6f20616b74617320286172206a6f2064616c6973292c205265737075626c696b6f73205072657a6964656e746f20616b7461732c20567972696175737962c4977320616b74617320286172206a6f2064616c697329206e6567616c692062c5ab7469207461696b6f6d69206e756f20746f73206469656e6f732c206b6169206f66696369616c696169207061736b656c6269616d6173204b6f6e737469747563696e696f20546569736d6f20737072656e64696d61732c206b61642061746974696e6b616d617320616b74617320286172206a6f2064616c6973292070726965c5a174617261756a61204c69657475766f73205265737075626c696b6f73204b6f6e737469747563696a61692e0a4b6f6e737469747563696e696f20546569736d6f20737072656e64696d6169206b6c617573696d6169732c206b757269756f73204b6f6e737469747563696a6120707269736b69726961206a6f206b6f6d706574656e63696a61692c207972612067616c7574696e696169206972206e65736b756e64c5be69616d692e0a42796c6f6a6520706167616c204b6f6e737469747563696a6f732031303620737472616970736e696f206b6574766972746f6a6f6a652064616c796a65206e75726f6479746f2061736d656e73206b72656970696dc485736920707269696d746173204b6f6e737469747563696e696f20546569736d6f20737072656e64696d61732c206b6164204c69657475766f73205265737075626c696b6f7320c4af73746174796d617320286172206a6f2064616c6973292061726261206b69746173205365696d6f20616b74617320286172206a6f2064616c6973292c205265737075626c696b6f73205072657a6964656e746f20616b7461732c20567972696175737962c4977320616b74617320286172206a6f2064616c6973292070726965c5a174617261756a61204b6f6e737469747563696a61692c207972612070616772696e64617320c4af73746174796d6f206e757374617479746120747661726b612061746e61756a696e74692070726f636573c4852064c4976c207061c5be65697374c5b320746f2061736d656e73206b6f6e737469747563696e69c5b3207465697369c5b3206172206c6169737669c5b320c4af677976656e64696e696d6f2e0a52656d64616d61736973204b6f6e737469747563696e696f20546569736d6f2069c5a17661646f6d69732c204b6f6e737469747563696a6f732031303520737472616970736e696f20747265c48d696f6a6f6a652064616c796a65206e75726f6479747573206b6c617573696d75732067616c7574696e616920737072656e64c5be6961205365696d61732e0a537472616970736e696f2070616b656974696d61733a0a4e722e20584949492d323030342c20323031392d30332d32312c207061736b656c6274612054415220323031392d30342d30322c20692e206b2e20323031392d3035333330";
        LAW_VALUE[108] = hex"4b6f6e737469747563696e696f20546569736d6f2074656973c4976a6f20c4af67616c696f6a696d6169206e757472c5ab6b7374612c206b61693a0a3129207061736962616967696120c4af67616c696f6a696dc5b3206c61696b61733b0a3229206a6973206d6972c5a174613b0a33292061747369737461747964696e613b0a3429206e6567616c692065697469207361766f20706172656967c5b32064c4976c20737665696b61746f732062c5ab6b6cc497733b0a3529205365696d6173206ac4af207061c5a1616c696e612069c5a120706172656967c5b32061706b616c746f732070726f6365736f20747661726b612e";
    }

    function get_laws(uint8 _number) public view returns (string memory result) {
        result = LAW_VALUE[_number];
        return result;
    }
}