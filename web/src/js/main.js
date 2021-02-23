var CONTRACT_ADDRESS = '0xcc9bC7675eeaEe40D108c93138FEcaE2cFca822c';
var ABI = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"date","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SubscribeDonatedPeople","type":"event"},{"inputs":[],"name":"kill_sc","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"CONSTITUTION_RELEASE_BY_UNIXTIME","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"donated_people","outputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_number","type":"uint8"}],"name":"get_article_range","outputs":[{"internalType":"uint8","name":"_start","type":"uint8"},{"internalType":"uint8","name":"_end","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_total_laws_count","outputs":[{"internalType":"uint8","name":"result","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LITHUANIA_FLAG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LITHUANIAN_ROOTS_INFO","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LRK_ARTICLES","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LRK_TITLE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OWNER","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_number","type":"uint8"}],"name":"read_law","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SC_AUTHORS","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SMART_CONTRACT_RELEASE_BY_UNIXTIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');

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
  window.web3 = new Web3(window.web3.currentProvider || new Web3.providers.HttpProvider('http://localhost:8545'));
  // no need to ask for permission
}
else {
  window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
}
console.log (window.web3.currentProvider)

CONTRACT = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

// User Accounts
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
  document.getElementById('client_Account').innerHTML = client_account;
  web3.eth.defaultAccount = client_account;
});


// LRK Title
(function () {
  CONTRACT.methods.LRK_TITLE().call().then( function( title ) { 
    $("#lrktitle").text(" " + title);
  });
})();

// LT FLAG
(function () {
  CONTRACT.methods.LITHUANIA_FLAG().call().then( function( image ) { 
    $(".ltflag").attr("src",image);
  });
  
})();

// Authors
(function () {
  CONTRACT.methods.SC_AUTHORS().call().then( function( authors ) { 
    $("#authors").html(authors);
  });
})();

// Donated People
(function () {
  CONTRACT.methods.donated_people(1).call().then( function( donated ) { 
    console.log(donated);
  });
})();

// LAWS
(function () {

  CONTRACT.methods.get_total_laws_count().call().then( function( total_laws ){
    for (let i = 1; i <= 15; i++) {

      addLaw(i);
    };
  });
})();

function addLaw(lawnum) {
  var li = document.createElement('li');
  var hr = document.createElement('hr');
  li.setAttribute('class', 'law');

  CONTRACT.methods.read_law(lawnum).call().then( function( law_value ){
    li.textContent = law_value;
    document.getElementById("parent").appendChild(li);
    document.getElementById("parent").appendChild(hr);
  });
}

// ARTICLES

function addArticle(articlenum){

}

function getArticleName(articlenum){
  CONTRACT.methods.LRK_ARTICLES(articlenum).call().then( function( article_name ) { 
    console.log(article_name);
  });
}

function getArticleRange(articlenum){
  CONTRACT.methods.get_article_range(articlenum).call().then( function( result ){
    //console.log(result[0]);
    //return result;
  });
}


// SC Publish date
(function () {
  CONTRACT.methods.SMART_CONTRACT_RELEASE_BY_UNIXTIME().call().then( function( sc_release_date ) { 
  let a = new Date(sc_release_date * 1000);
  let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  let hours = ['00', '01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let day = a.getDate();
  let hour = hours[a.getHours()];
  let min = a.getMinutes();
  let sec = a.getSeconds();
  let time = year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec ;
  $("#screleasedate").html(time);
  });
})();

// Donation
function contribute_to_the_project() {
  CONTRACT.methods.OWNER().call().then( function(scauthors) {
    const amount = "0.0005"; 
    const amountToSend = web3.utils.toWei(amount, "ether"); // Convert to wei value
    web3.eth.sendTransaction({ from:client_account,to:scauthors, value:amountToSend }).then( function(tx) { ;
    console.log("Transaction: ", tx); 
    });
  });
};