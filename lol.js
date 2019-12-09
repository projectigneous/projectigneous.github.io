setInterval(async function() {
  var ftch = await fetch("https://gist.githubusercontent.com/theLMGN/555356137b105d768b4379d7f28a9b39/raw/3cdbc149507645f6761e3afa3f3e6dc9f6bdbaf5/lol.json", {cache: "no-store"})
  var j = await ftch.json()
  if (j.overrideTitle) {
    document.body.innerHTML = j.overrideBodyContents
    document.title = j.overrideTitleContents
  }
},5000)
