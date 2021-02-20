// web3 provider with fallback for old version
if (window.ethereum) {
  window.web3 = new Web3(window.ethereum)
  try {
      // ask user for permission
      ethereum.enable()
      // user approved permission
  } catch (error) {
      // user rejected permission
      console.log('user rejected permission')
  }
}
else if (window.web3) {
  window.web3 = new Web3(window.web3.currentProvider)
  // no need to ask for permission
}
else {
  window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
}
console.log (window.web3.currentProvider)

// contractAddress and abi are setted after contract deploy
var CONTRACT_ADDRESS = '0xB55D8cFC73D44857b880e8D6381F97aA2FbDCDE2';
var ABI = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"CONSTITUTION_RELEASE_BY_UNIXTIME","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LITHUANIAN_ROOTS_INFO","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SMART_CONTRACT_RELEASE_BY_UNIXTIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_total_laws_count","outputs":[{"internalType":"uint8","name":"result","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"kill_sc","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"laws_per_article","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_number","type":"uint8"}],"name":"read_laws_1","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_number","type":"uint8"}],"name":"read_laws_2","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]');

//CONTRACT instance
CONTRACT = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

// Accounts
var client_account;

web3.eth.getAccounts(function(err, accounts) {
  if (err != null) {
    alert("Error retrieving accounts.");
    return;
  }
  if (accounts.length == 0) {
    alert("No client_account found! Make sure the Ethereum client is configured properly.");
    return;
  }
  client_account = accounts[0];
  console.log('Account: ' + client_account);
  web3.eth.defaultAccount = client_account;
});

//Smart CONTRACT functions
function registerSetInfo() {
  info = $("#newInfo").val();
  CONTRACT.methods.setInfo (info).send( {from: client_account}).then( function(tx) { 
    console.log("Transaction: ", tx); 
  });
  $("#newInfo").val('');
}

function get_laws_info() {
  CONTRACT.methods.read_laws_1(1).call().then( function( info ) { 
    console.log("Output: ", info);
    document.getElementById('law1_Info').innerHTML = info;
  });    
    CONTRACT.methods.read_laws_1(2).call().then( function( info ) { 
    console.log("Output: ", info);
    document.getElementById('law2_Info').innerHTML = info;
  });  
    CONTRACT.methods.read_laws_1(3).call().then( function( info ) { 
    console.log("Output: ", info);
    document.getElementById('law3_Info').innerHTML = info;
  });  
    CONTRACT.methods.read_laws_1(4).call().then( function( info ) { 
    console.log("Output: ", info);
    document.getElementById('law4_Info').innerHTML = info;
  });  
}
