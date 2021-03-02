var CONTRACT_ADDRESS = '0x569107E9Ca94217A2349cE2601eD28Fdd81ea6d7';
var ABI = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"date","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SubscribeDonatedPeople","type":"event"},{"inputs":[],"name":"kill_sc","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"CONSTITUTION_RELEASE_BY_UNIXTIME","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"donated_people","outputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_number","type":"uint8"}],"name":"get_article_range","outputs":[{"internalType":"uint8","name":"_start","type":"uint8"},{"internalType":"uint8","name":"_end","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_total_laws_count","outputs":[{"internalType":"uint8","name":"result","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"how_many_people_donated","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LITHUANIA_FLAG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LITHUANIAN_ROOTS_INFO","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LRK_ARTICLES","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LRK_TITLE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OWNER","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_number","type":"uint8"}],"name":"read_law","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SC_AUTHORS","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SMART_CONTRACT_RELEASE_BY_UNIXTIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');

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

  CONTRACT.methods.donated_people(4).call().then( function( donated ) { 
    console.log(donated)
    robohash = `https://robohash.org/` + donated.addr + `.png?set=set1&size=24x24`
    $("#donator_robo").attr("src",robohash);
    $("#donator_addr").text(donated.addr);
    $("#donated_date").text(format_date(donated.timestamp));
    $("#donated_amount").text(format_wei_to_full_num(donated.amount) + ' BNB');

  });
})();


// LAWS
(async () => {

  CONTRACT.methods.LITHUANIAN_ROOTS_INFO().call().then( function( roots ) { 
    add_law_custom_text(roots, "intro", "roots");
  });

    for (let i = 12; i <= 12 ; i++) {
      await add_article(i, "laws", "article", "article");
      let article_range = await get_article_range(i);
      let law_start = article_range[0];
      let law_end = article_range[1];

      for (let j = law_start; j <= law_end; j++) {
        if (j == 155){
          break;
        }
        await add_law(j, "laws", "law");
      };

      // DIRTY HACK
      // 7th ARTICLE DOES NOT WORK IN LOOP (???)
      if (i == 7){
        for (let k = 91; k <= 101; k++) {
          await add_law(k, "laws", "law");
        };
      }
    };
    await add_law(155, "outro", "outro");
    document.getElementById("loading").style.display = "none";
})();

// DONATORS
(async () => {
  donator_count = await CONTRACT.methods.how_many_people_donated().call().then( function( donator_count ) { 
    return donator_count;
  });
  for (i = 1; i <= donator_count; i++){
    //console.log(i);
    await add_donator(i);

  }
})();

function add_article(articlenum, location, class_id) {
  return new Promise(function(resolve){
    var h3 = document.createElement('h3');
    var hr = document.createElement('hr');

    h3.setAttribute('class', class_id);
    article_value = get_article_name(articlenum).then( (value) => { return value; });
    article_value.then(function (value){
      h3.textContent = value;
      document.getElementById(location).appendChild(h3);
      document.getElementById(location).appendChild(hr);
      resolve();
    });
  });
}

function add_law(lawnum, location, class_id) {
  return new Promise(function(resolve){
    var li = document.createElement('li');
    var hr = document.createElement('hr');

    li.setAttribute('class', class_id);
    law_value = get_law(lawnum).then( (value) => { return value; });
    law_value.then(function (value){
      li.textContent = value;
      document.getElementById(location).appendChild(li);
      document.getElementById(location).appendChild(hr);
      resolve();
    });
  });
}

function add_law_custom_text(text, location, class_id){
  return new Promise(function(resolve){
    var p = document.createElement('p');

    p.setAttribute('class', class_id);
    p.textContent = text;
    document.getElementById(location).appendChild(p);
    resolve();
    //});
  });
}

function get_article_name(articlenum){
  let article_name = CONTRACT.methods.LRK_ARTICLES(articlenum).call().then( (value) => { return value; });
  return article_name;
}

function get_law(lawnum){
  let law_value = CONTRACT.methods.read_law(lawnum).call().then( (value) => { return value; });
  return law_value;
}

function get_total_laws(){
  let law_count = CONTRACT.methods.get_total_laws_count().call().then( (value) => { return value; });
  return law_count;
}

function get_article_range(articlenum){
  let start = CONTRACT.methods.get_article_range(articlenum).call().then( ( value ) => { return value; });
  return(Promise.resolve(start));
}

function add_donator(donatorid){
  return new Promise(function(resolve){

    CONTRACT.methods.donated_people(donatorid).call().then( function( donator ) {
      //console.log(donator);
      robohash = `https://robohash.org/` + donator.addr + `.png?set=set1&size=24x24`

      let table = document.getElementById("donator_table");
      let row = document.getElementById("donator_row");
      let clone = row.cloneNode(true);
      clone.id = "donator_row" + donatorid;
      console.log(clone);
      table.appendChild(clone);

      //$("#donator_robo").attr("src",robohash);
      //$("#donator_addr").text(donator.addr);
      //$("#donated_date").text(format_date(donator.timestamp));
      //$("#donated_amount").text(format_wei_to_full_num(donator.amount) + ' BNB');

    });
    resolve();
  });
}

// SC Publish date
(function () {
  CONTRACT.methods.SMART_CONTRACT_RELEASE_BY_UNIXTIME().call().then( function( sc_release_date ) { 
  $("#screleasedate").html(format_date(sc_release_date));
  });
})();

// Donation
function contribute_to_the_project() {
  const amount = "0.0004"; 
  const amountToSend = web3.utils.toWei(amount, "ether"); // Convert to wei value
  web3.eth.sendTransaction({ 
    from: client_account,
    to: CONTRACT.options.address, 
    value: amountToSend 
  }).then( function(tx) { ;
  console.log("Transaction: ", tx); 
  });
}

function format_date(timestamp) {
  let a = new Date(timestamp * 1000);
  let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  let hours = ['00', '01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let day = a.getDate();
  let hour = hours[a.getHours()];
  let min = a.getMinutes();
  let sec = a.getSeconds();
  let time = year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

function format_wei_to_full_num(wei) {
  let kwei = wei / 1000;
  let mwei = kwei / 1000;
  let gwei = mwei / 1000;
  let szabo = gwei / 1000;
  let finney = szabo / 1000;
  let full_num = finney / 1000; // 1 ETH or BNB
  return full_num;
}

