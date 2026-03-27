function analyzeText() {
  var text = document.getElementById("inputText").value;
  if (text.trim() === "") {
    alert("Please enter some text first!");
    return;
  }
  var charCount = text.length;
  var wordCount = text.trim().split(/\s+/).length;
  var reversed = text.split("").reverse().join("");
  document.getElementById("charCount").innerText = charCount;
  document.getElementById("wordCount").innerText = wordCount;
  document.getElementById("reversedText").innerText = reversed;
  document.getElementById("results").style.display = "block";
}
