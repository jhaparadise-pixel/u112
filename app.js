document.addEventListener("DOMContentLoaded", () => {
  console.log("ethers =", window.ethers);
  document
    .getElementById("generateBtn")
    .addEventListener("click", generateAll);
});

function generateAll() {
  console.log("点击成功");

  // 1️⃣ 生成随机钱包（自动包含助记词）
  const wallet = ethers.Wallet.createRandom();

  document.getElementById("mnemonic").value =
    wallet.mnemonic.phrase;

  document.getElementById("eth").value =
    wallet.address;

  document.getElementById("privateKey").value =
    wallet.privateKey;

  // 2️⃣ TRON 地址（ETH 私钥 → TRON 地址）
  const tron =
    "T" + wallet.address.slice(2, 34);

  document.getElementById("tron").value = tron;

  console.log("生成完成");
}
