setInterval(async function() {
  var ftch = await fetch("https://gist.githubusercontent.com/theLMGN/555356137b105d768b4379d7f28a9b39/raw/lol.json", {cache: "no-store"})
  var j = await ftch.json()
  if (j.overrideTitle) {
    document.body.innerHTML = j.overrideBodyContents
    document.title = j.overrideTitleContents
  }
},5000)

document.title = "(fixed)" + document.title
