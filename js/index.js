connectbtn=document.getElementById("connectbtn");
connectbtn.onclick=detectWallet;
function detectWallet()
{
    console.log("testfunction");
    console.log(window.aptos);
    if (!window.aptos) {
        alert('Please install WELLDONE Wallet extension');
      } else
      {
        alert("welldone installed !");
      }
}