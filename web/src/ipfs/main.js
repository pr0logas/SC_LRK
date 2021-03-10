const CONTRACT_ADDRESS = '0xb7D88E9b57ec022cD69c30f0BF93C1211E748914';
const ABI = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"date","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SubscribeDonators","type":"event"},{"inputs":[],"name":"kill_sc","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"CONSTITUTION_RELEASE_BY_UNIXTIME","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"donators","outputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"donators_count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_number","type":"uint8"}],"name":"get_article_range","outputs":[{"internalType":"uint8","name":"_start","type":"uint8"},{"internalType":"uint8","name":"_end","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_total_laws_count","outputs":[{"internalType":"uint8","name":"result","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LITHUANIA_FLAG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LITHUANIAN_ROOTS_INFO","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LRK_ARTICLES","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LRK_TITLE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OWNER","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_number","type":"uint8"}],"name":"read_law","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SC_AUTHORS","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SMART_CONTRACT_RELEASE_BY_UNIXTIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');
const NETWORK_ID = 97; // BNB network id;
const PROVIDERS = [
'https://data-seed-prebsc-1-s1.binance.org:8545',
'https://bsc-dataseed.binance.org',
'seed.lietuvos-respublikos-konstitucija.net'
];
var defined_user_web3;
var defined_client_address;
var donation_completed = false;
var bar_width = 0;
var progress = 0;


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

  // ARTICLE1
  (async () => {
    await add_article(1, "article1", "article", "skirsnis1");
    let article_range = await get_article_range(1);
    let law_start = article_range[0];
    let law_end = article_range[1];

    for (let j = law_start; j <= law_end; j++) {
      await add_law(j, "article1", "law");
    };
  })();

  // ARTICLE2
  (async () => {
    await add_article(2, "article2", "article", "skirsnis2");
    let article_range = await get_article_range(2);
    let law_start = article_range[0];
    let law_end = article_range[1];

    for (let j = law_start; j <= law_end; j++) {
      await add_law(j, "article2", "law");
    };
  })();

  // ARTICLE3
  (async () => {
    await add_article(3, "article3", "article", "skirsnis3");
    let article_range = await get_article_range(3);
    let law_start = article_range[0];
    let law_end = article_range[1];

    for (let j = law_start; j <= law_end; j++) {
      await add_law(j, "article3", "law");
    };
  })();

  // ARTICLE4
  (async () => {
    await add_article(4, "article4", "article", "skirsnis4");
    let article_range = await get_article_range(4);
    let law_start = article_range[0];
    let law_end = article_range[1];

    for (let j = law_start; j <= law_end; j++) {
      await add_law(j, "article4", "law");
    };
  })();

  // ARTICLE5
  (async () => {
    await add_article(5, "article5", "article", "skirsnis5");
    let article_range = await get_article_range(5);
    let law_start = article_range[0];
    let law_end = article_range[1];

    for (let j = law_start; j <= law_end; j++) {
      await add_law(j, "article5", "law");
    };
  })();

  // ARTICLE6
  (async () => {
    await add_article(6, "article6", "article", "skirsnis6");
    let article_range = await get_article_range(6);
    let law_start = article_range[0];
    let law_end = article_range[1];

    for (let j = law_start; j <= law_end; j++) {
      await add_law(j, "article6", "law");
    };
  })();

  // ARTICLE7
  (async () => {
    await add_article(7, "article7", "article", "skirsnis7");
    let article_range = await get_article_range(7);
    //let law_start = article_range[0];
    //let law_end = article_range[1];

    for (let j = 91; j <= 101; j++) {
      await add_law(j, "article7", "law");
    };
  })();

  // ARTICLE8
  (async () => {
    await add_article(8, "article8", "article", "skirsnis8");
    let article_range = await get_article_range(8);
    let law_start = article_range[0];
    let law_end = article_range[1];

    for (let j = law_start; j <= law_end; j++) {
      await add_law(j, "article8", "law");
    };
  })();

  // ARTICLE9
  (async () => {
    await add_article(9, "article9", "article", "skirsnis9");
    let article_range = await get_article_range(9);
    let law_start = article_range[0];
    let law_end = article_range[1];

    for (let j = law_start; j <= law_end; j++) {
      await add_law(j, "article9", "law");
    };
  })();

  // ARTICLE10
  (async () => {
    await add_article(10, "article10", "article", "skirsnis10");
    let article_range = await get_article_range(10);
    let law_start = article_range[0];
    let law_end = article_range[1];

    for (let j = law_start; j <= law_end; j++) {
      await add_law(j, "article10", "law");
    };
  })();

  // ARTICLE11
  (async () => {
    await add_article(11, "article11", "article", "skirsnis11");
    let article_range = await get_article_range(11);
    let law_start = article_range[0];
    let law_end = article_range[1];

    for (let j = law_start; j <= law_end; j++) {
      await add_law(j, "article11", "law");
    };
  })();

  // ARTICLE12
  (async () => {
    await add_article(12, "article12", "article", "skirsnis12");
    let article_range = await get_article_range(12);
    let law_start = article_range[0];
    let law_end = article_range[1];

    for (let j = law_start; j <= law_end; j++) {
      await add_law(j, "article12", "law");
    };
  })();

  // ARTICLE13
  (async () => {
    await add_article(13, "article13", "article", "skirsnis13");
    let article_range = await get_article_range(13);
    let law_start = article_range[0];
    let law_end = article_range[1];

    for (let j = law_start; j <= law_end; j++) {
      await add_law(j, "article13", "law");
    };
  })();

  // ARTICLE14
  (async () => {
    await add_article(14, "article14", "article", "skirsnis14");
    let article_range = await get_article_range(14);
    let law_start = article_range[0];
    let law_end = article_range[1];

    for (let j = law_start; j <= law_end; j++) {
      await add_law(j, "article14", "law");
    };
  })();

  // ARTICLE15
  (async () => {
    await add_article(15, "article15", "article", "skirsnis15");
    let article_range = await get_article_range(15);
    let law_start = article_range[0];
    let law_end = article_range[1];

    for (let j = law_start; j <= law_end; j++) {
      if (j == 155){
        break;
      }
      await add_law(j, "article15", "law");
    };
    await add_law(155, "outro", "outro");

  })();


  // DONATORS
  (async () => {
    donator_count = await get_donator_count();

    for (i = donator_count; i >= 1; i--){
      donator_data = await get_donator_data(i);
      await add_donator(i, donator_data, false);
    }
  })();

  function add_article(articlenum, location, class_id, id) {
    return new Promise(function(resolve){
      var h3 = document.createElement('h3');
      var hr = document.createElement('hr');

      h3.setAttribute('class', class_id);
      h3.setAttribute('id', id);
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
        increment_progress_bar();
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


  function get_donator_count() {
    let donator_count = CONTRACT.methods.donators_count().call().then( ( value ) => { return value; });
    return(Promise.resolve(donator_count));
  }

  function get_donator_data(donatorid) {
    let donator_data = CONTRACT.methods.donators(donatorid).call().then( ( value ) => { return value; });
    return(Promise.resolve(donator_data));
  }

  function add_donator(id, donator_data, from_start){
    return new Promise(function(resolve){

        robohash = `https://robohash.org/` + donator_data.addr + `.png?set=set1&size=36x36`

        let table_body = document.getElementById("donator_table").getElementsByTagName('tbody')[0];

        if (from_start == true){
          var new_row = table_body.insertRow(0);
        } else {
          var new_row = table_body.insertRow();
        }

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
        robo_cell.innerHTML = "<img src='" + robohash + "' onerror=\"this.style.display=\'none\'\"/>";

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
    let days = ['00', '01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
    let hours = ['00', '01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
    let minutes = ['00', '01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59']
    let seconds = ['00', '01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59']
    
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let day = days[a.getDate()];
    let hour = hours[a.getHours()];
    let min = minutes[a.getMinutes()];
    let sec = seconds[a.getSeconds()];
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
    let formated_num = parseFloat(full_num).toFixed(8);
    return formated_num.toString()
  }

  setInterval(async function(){
    if (donation_completed == true){
      latest_donator_id = await get_donator_count();
      latest_donator_data = await get_donator_data(latest_donator_id);
      await add_donator(latest_donator_id, latest_donator_data, true);
      donation_completed = false;
    }
  }, 5000);
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
      //console.log("Transaction completed: ", tx.status);
      donation_completed = tx.status;
      });

    } else {
      alert("Jūsų nurodyta suma nėra validi. Prašome peržiūrėti ar nurodėte tinkamus skaičius!")
    }

  } else {
    alert("Jūs neturite susidiegę 'Metamask' įskiepio arba naudojate ne 'Binance Smart Chain' blokų grandinę.")
  }
}

function amount_validation() {
  let value = $("#amount").val();
  let user_input_amount = parseFloat(value).toFixed(8);
  if (user_input_amount > 0 && user_input_amount < 9007199254740992) {
    return user_input_amount
  }
}

function increment_progress_bar() {
  let bar_progress = document.getElementById("bar");
  let incr = 100 / 154;

  if (progress <= 154){
    bar_width = bar_width + incr;
    progress++;; 
    let percent = parseFloat(bar_width).toFixed(0) - 1;
    bar_progress.style.width = bar_width + "%";

  }
}