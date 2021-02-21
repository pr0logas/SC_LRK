pragma solidity >=0.7.0 <0.8.6;

contract LRK_LAWS_7 {
    
    mapping(uint8 => string) private LAW_VALUE;

    constructor(){
        LAW_VALUE[91] = hex"4c69657475766f73205265737075626c696b6f7320567972696175737962c4992073756461726f204d696e697374726173205069726d696e696e6b6173206972206d696e6973747261692e";
        LAW_VALUE[92] = hex"4d696e69737472c485205069726d696e696e6bc485205365696d6f20707269746172696d7520736b697269612069722061746c656964c5be6961205265737075626c696b6f73205072657a6964656e7461732e0a4d696e69737472757320736b697269612069722061746c656964c5be6961204d696e697374726f205069726d696e696e6b6f207465696b696d75205265737075626c696b6f73205072657a6964656e7461732e0a4d696e697374726173205069726d696e696e6b6173206e652076c4976c696175206b61697020706572203135206469656ec5b3206e756f206a6f207061736b7972696d6f20707269737461746f205365696d7569207361766f2073756461727974c485206972205265737075626c696b6f73205072657a6964656e746f2070617476697274696e74c48520567972696175737962c4992069722070617465696b696120737661727374797469206a6f732070726f6772616dc4852e0a567972696175737962c497206772c485c5be696e61207361766f20c4af67616c696f6a696d7573205265737075626c696b6f73205072657a6964656e74756920706f205365696d6f2072696e6b696dc5b320617262612069c5a172696e6b7573205265737075626c696b6f73205072657a6964656e74c4852e0a4e61756a6120567972696175737962c497206761756e6120c4af67616c696f6a696d7573207665696b74692c206b6169205365696d617320706f73c49764796a652064616c797661756a616ec48d69c5b3205365696d6f206e617269c5b32062616c73c5b32064617567756d61207072697461726961206a6f732070726f6772616d61692e";
        LAW_VALUE[93] = hex"50726164c49764616d692065697469207361766f2070617265696761732c204d696e697374726173205069726d696e696e6b6173206972206d696e697374726169205365696d65207072697369656b69612062c5ab74692069c5a174696b696d69204c69657475766f73205265737075626c696b61692c206c61696b79746973204b6f6e737469747563696a6f7320697220c4af73746174796dc5b32e20507269657361696b6f732074656b7374c485206e75737461746f20567972696175737962c4977320c4af73746174796d61732e";
        LAW_VALUE[94] = hex"4c69657475766f73205265737075626c696b6f7320567972696175737962c4973a0a312920747661726b6f206b7261c5a1746f207265696b616c75732c20736175676f204c69657475766f73205265737075626c696b6f732074657269746f72696a6f73206e656c6965c48d69616d7962c4992c20676172616e74756f6a612076616c73747962c497732073617567756dc48520697220766965c5a1c4856ac48520747661726bc4853b0a32292076796b646f20c4af73746174796d7573206972205365696d6f206e75746172696d75732064c4976c20c4af73746174796dc5b320c4af677976656e64696e696d6f2c207461697020706174205265737075626c696b6f73205072657a6964656e746f2064656b72657475733b0a3329206b6f6f7264696e756f6a61206d696e6973746572696ac5b3206972206b6974c5b320567972696175737962c4977320c4af7374616967c5b3207665696b6cc4853b0a34292072656e6769612076616c73747962c497732062697564c5be65746f2070726f6a656b74c485206972207465696b6961206ac4af205365696d75693b2076796b646f2076616c73747962c497732062697564c5be6574c4852c207465696b6961205365696d75692062697564c5be65746f20c4af76796b64796d6f20617079736b616974c4853b0a35292072656e676961206972207465696b6961205365696d75692073766172737479746920c4af73746174796dc5b32070726f6a656b7475733b0a36292075c5be6d657a6761206469706c6f6d6174696e6975732073616e74796b6975732069722070616c61696b6f207279c5a16975732073752075c5be7369656e696f2076616c73747962c4976d6973206972207461727074617574696ec4976d6973206f7267616e697a6163696a6f6d69733b0a37292076796b646f206b697461732070617265696761732c206b757269617320567972696175737962656920706176656461204b6f6e737469747563696a61206972206b69746920c4af73746174796d61692e";
        LAW_VALUE[95] = hex"4c69657475766f73205265737075626c696b6f7320567972696175737962c4972076616c73747962c497732076616c64796d6f207265696b616c757320737072656e64c5be696120706f73c49764c5be69756f736520766973c5b320567972696175737962c49773206e617269c5b32062616c73c5b32064617567756d6120707269696d64616d61206e75746172696d75732e20567972696175737962c4977320706f73c49764c5be69756f73652074616970207061742067616c692064616c7976617574692076616c73747962c49773206b6f6e74726f6c6965726975732e0a567972696175737962c49773206e75746172696d757320706173697261c5a16f204d696e697374726173205069726d696e696e6b617320697220746f732073726974696573206d696e6973747261732e";
        LAW_VALUE[96] = hex"4c69657475766f73205265737075626c696b6f7320567972696175737962c49720736f6c6964617269616920617473616b6f205365696d75692075c5be2062656e6472c48520567972696175737962c49773207665696b6cc4852e0a4d696e6973747261692c207661646f76617564616d69206a69656d73207061766573746f6d732076616c64796d6f2073726974696d732c20617473616b696e6769205365696d75692c205265737075626c696b6f73205072657a6964656e7475692069722074696573696f6769616920706176616c64c5ab73204d696e697374727569205069726d696e696e6b75692e";
        LAW_VALUE[97] = hex"4d696e697374726173205069726d696e696e6b617320617473746f7661756a61204c69657475766f73205265737075626c696b6f73205679726961757379626569206972207661646f7661756a61206a6f73207665696b6c61692e0a4b6f6c206ec4977261204d696e697374726f205069726d696e696e6b6f206172206a6973206e6567616c692065697469207361766f20706172656967c5b32c205265737075626c696b6f73205072657a6964656e746173206e6520696c6765736e69616d206b616970203630206469656ec5b3206c61696b7569204d696e697374726f205069726d696e696e6b6f207465696b696d7520706176656461207669656e616d2069c5a1206d696e69737472c5b3206ac4af207061766164756f74692c206f206b616920746f6b696f207465696b696d6f206ec49772612c205265737075626c696b6f73205072657a6964656e746173207669656e616d2069c5a1206d696e69737472c5b320706176656461207061766164756f7469204d696e69737472c485205069726d696e696e6bc4852e";
        LAW_VALUE[98] = hex"4d696e697374726173207661646f7661756a61206d696e6973746572696a61692c20737072656e64c5be6961206d696e6973746572696a6f73206b6f6d706574656e63696a6169207072696b6c617573616ec48d697573206b6c617573696d75732c2074616970207061742076796b646f206b6974617320c4af73746174796dc5b3206e756d6174797461732066756e6b63696a61732e0a4d696e69737472c485206c61696b696e61692067616c69207061766164756f74692074696b204d696e697374726f205069726d696e696e6b6f207061736b6972746173206b6974617320567972696175737962c49773206e617279732e";
        LAW_VALUE[99] = hex"4d696e697374726173205069726d696e696e6b6173206972206d696e697374726169206e6567616c692075c5be696d7469206a6f6b69c5b3206b6974c5b32072656e6b616dc5b320617220736b697269616dc5b320706172656967c5b32c2064697262746920766572736c6f2c206b6f6d657263696a6f73206172206b69746f6b696f7365207072697661c48d696f736520c4af73746169676f736520617220c4af6d6f6ec49773652c207461697020706174206761757469206b69746f6bc4af2061746c7967696e696dc4852c2069c5a1736b79727573206a616d206e75737461747974c48520706167616c20706172656967617320567972696175737962c4976a65206265692075c5be6d6f6b657374c4af2075c5be206bc5ab727962696ec499207665696b6cc4852e";
        LAW_VALUE[100] = hex"4d696e697374726173205069726d696e696e6b6173206972206d696e697374726169206e6567616c692062c5ab7469207061747261756b74692062617564c5be69616d6f6a6f6e20617473616b6f6d7962c4976e2c207375696d74692c206e6567616c692062c5ab7469206b6974616970207375766172c5be797461206ac5b3206c61697376c4972062652069c5a1616e6b7374696e696f205365696d6f20737574696b696d6f2c206f2074617270205365696d6f20736573696ac5b320e280932062652069c5a1616e6b7374696e696f205265737075626c696b6f73205072657a6964656e746f20737574696b696d6f2e";
        LAW_VALUE[101] = hex"5365696d6f207265696b616c6176696d7520567972696175737962c4972061726261206174736b697269206d696e69737472616920747572692061747369736b616974797469205365696d652075c5be207361766f207665696b6cc4852e0a4b616920706173696b6569c48d69612064617567696175206b61697020707573c497206d696e69737472c5b32c20567972696175737962c49720747572692069c5a1206e61756a6f206761757469205365696d6f20c4af67616c696f6a696d75732e2050726965c5a1696e677520617476656a7520567972696175737962c49720747572692061747369737461747964696e74692e0a567972696175737962c4972070726976616c6f2061747369737461747964696e746920746169702070617420c5a16961697320617476656a6169733a0a3129206b6169205365696d6173206475206b61727475732069c5a12065696cc49773206e657072697461726961206e61756a616920737564617279746f7320567972696175737962c497732070726f6772616d61693b0a3229206b6169205365696d617320766973c5b3205365696d6f206e617269c5b32062616c73c5b32064617567756d6120736c617074752062616c736176696d75207061726569c5a16b6961206e657061736974696bc4976a696dc4852056797269617573796265206172204d696e6973747275205069726d696e696e6b753b0a3329206b6169204d696e697374726173205069726d696e696e6b61732061747369737461747964696e61206172206d6972c5a174613b0a342920706f205365696d6f2072696e6b696dc5b32c206b61692073756461726f6d61206e61756a6120567972696175737962c4972e0a4d696e6973747261732070726976616c6f2061747369737461747964696e74692c206b6169206e657061736974696bc4976a696dc485206a756f20736c617074752062616c736176696d75207061726569c5a16b69612064617567696175206b61697020707573c49720766973c5b3205365696d6f206e617269c5b32e0a567972696175737962c49773206172206d696e697374726f2061747369737461747964696e696dc48520707269696d61205265737075626c696b6f73205072657a6964656e7461732e";
    }

    function get_laws(uint8 _number) public view returns (string memory result) {
        result = LAW_VALUE[_number];
        return result;
    }
}