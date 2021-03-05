const CONTRACT_ADDRESS = '0xb7D88E9b57ec022cD69c30f0BF93C1211E748914';
const ABI = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"date","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SubscribeDonators","type":"event"},{"inputs":[],"name":"kill_sc","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"CONSTITUTION_RELEASE_BY_UNIXTIME","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"donators","outputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"donators_count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_number","type":"uint8"}],"name":"get_article_range","outputs":[{"internalType":"uint8","name":"_start","type":"uint8"},{"internalType":"uint8","name":"_end","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_total_laws_count","outputs":[{"internalType":"uint8","name":"result","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LITHUANIA_FLAG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LITHUANIAN_ROOTS_INFO","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LRK_ARTICLES","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LRK_TITLE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OWNER","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_number","type":"uint8"}],"name":"read_law","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SC_AUTHORS","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SMART_CONTRACT_RELEASE_BY_UNIXTIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');
const NETWORK_ID = 97; // BNB network id;
const PROVIDERS = [
'https://data-seed-prebsc-1-s1.binance.org:8545',
'https://bsc-dataseed.binance.org',
'seed.lietuvos-respublikos-konstitucija.crypto'
];
var defined_user_web3;
var defined_client_address;

if (window.ethereum) {
  window.web3 = new Web3(window.ethereum)

  try {
      ethereum.enable()
      web3.eth.net.getId().then((id) => (id == NETWORK_ID) ? run_the_engine(window.web3) : metamask_fallback());

  } catch (error) {
      console.log('user rejected permission')
  }
}
else if (window.web3) {
  window.web3 = new Web3(window.web3.currentProvider);
  web3.eth.net.getId().then((id) => (id == NETWORK_ID) ? run_the_engine(window.web3) : metamask_fallback());
}
else {
  metamask_fallback();
}

function metamask_fallback() {
  window.web3 = new Web3(new Web3.providers.HttpProvider(PROVIDERS[0]) ||
  new Web3(new Web3.providers.HttpProvider(PROVIDERS[1])) ||
  new Web3(new Web3.providers.HttpProvider(PROVIDERS[2])));
  run_the_engine(window.web3);
}

function run_the_engine(web3) {
  defined_user_web3 = web3;
  CONTRACT = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

  web3.eth.getAccounts(function(err, accounts) {
    if (err != null) {
      //alert("Error retrieving accounts.");
      return;
    }
    if (accounts.length == 0) {
      //alert("No client_account found! Make sure the Ethereum client is configured properly.");
      return;
    }

    else if (accounts.length >= 1) {
      defined_client_address = accounts[0];
      document.getElementById('client_account').innerHTML = defined_client_address;
      web3.eth.defaultAccount = defined_client_address;
    } 
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


        if (i == 7){
          for (let k = 91; k <= 101; k++) {
            await add_law(k, "laws", "law");
          };
        }
      };
      await add_law(155, "outro", "outro");
      document.getElementById("loader").style.display = "none";
  })();

  // DONATORS
  (async () => {
    donator_count = await CONTRACT.methods.donators_count().call().then( function( donator_count ) { 
      return donator_count;
    });

    for (i = donator_count; i >= 1; i--){
      donator_data = await get_donator_data(i);
      //await add_donator(i);
      await add_donator(i, donator_data);
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


  // Get Donator Info
  function get_donator_data(donatorid) {
    let donator_data = CONTRACT.methods.donators(donatorid).call().then( ( value ) => { return value; });
    return(Promise.resolve(donator_data));
  }

  function add_donator(id, donator_data){
    return new Promise(function(resolve){

        robohash = `https://robohash.org/` + donator_data.addr + `.png?set=set1&size=36x36`

        let table_body = document.getElementById("donator_table").getElementsByTagName('tbody')[0];
        let new_row = table_body.insertRow();
        new_row.id = 'row' + id;

        let donated_amount_cell = new_row.insertCell(0);
        donated_amount_cell.innerHTML = format_wei_to_full_num(donator_data.amount) + ' BNB';
        
        let current_row = document.getElementById(new_row.id); 
        let time_donated_cell = current_row.insertCell(0);
        time_donated_cell.innerHTML = format_date(donator_data.timestamp);

        let address_cell = current_row.insertCell(0);
        address_cell.innerHTML = donator_data.addr;

        let robo_cell = current_row.insertCell(0);
        let img = document.createElement('img');
        img.src = robohash;
        robo_cell.innerHTML = "<img src='" + robohash + "' alt='loading...'/>";

      resolve();
    });
  }

  // SC Publish date
  (function () {
    CONTRACT.methods.SMART_CONTRACT_RELEASE_BY_UNIXTIME().call().then( function( sc_release_date ) { 
    $("#screleasedate").html(format_date(sc_release_date));
    });
  })();

  function format_date(timestamp) {
    let a = new Date(timestamp * 1000);
    let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    let hours = ['00', '01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
    let days = ['00', '01','02','03','04','05','06','07','08','09','10','12','13','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let day = days[a.getDate()];
    let hour = hours[a.getHours()];
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
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

}

  // Donation
function contribute_to_the_project() {
  if (defined_client_address != undefined) {
    let amount;
    amount = amount_validation()

    if (amount != undefined) {
      const amountToSend = defined_user_web3.utils.toWei(amount, "ether"); // Convert to wei value
      web3.eth.sendTransaction({ 
        from: defined_client_address,
        to: CONTRACT.options.address, 
        value: amountToSend 
      }).then( function(tx) {
      console.log("Transaction: ", tx.status); 
      });

    } else {
      alert("Jūsų nurodyta suma nėra validi. Prašome peržiūrėti ar nurodėte tinkamus skaičius!")
    }

  } else {
    alert("Jūs neturite susidiegę 'Metamask' įskiepio arba naudojate ne 'BSC blockchain'")
  }
}

function amount_validation() {
  let value = $("#amount").val();
  let user_input_amount = parseFloat(value).toFixed(12);
  if (user_input_amount > 0 && user_input_amount < 9007199254740992) {
    return user_input_amount
  }
}