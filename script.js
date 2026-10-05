function checkSpam() {

  let message = document.getElementById("message").value;
  let result = document.getElementById("result");

  if (message.trim() === "") {
    result.innerHTML = "⚠️ Please enter a message.";
    return;
  }

  let spamWords = [
    "win",
    "prize",
    "free",
    "congratulations",
    "offer",
    "click",
    "urgent",
    "cash"
  ];

  let lowerMessage = message.toLowerCase();

  let isSpam = spamWords.some(word =>
    lowerMessage.includes(word)
  );

  if (isSpam) {
    result.innerHTML = "🚨 SPAM MESSAGE";
  } else {
    result.innerHTML = "✅ NOT SPAM";
  }
}