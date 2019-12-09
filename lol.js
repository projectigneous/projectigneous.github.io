setInterval(async function() {
  var ftch = await fetch("https://api.github.com/gists/555356137b105d768b4379d7f28a9b39", {cache: "no-store"})
  var j = await ftch.json()
  j = JSON.parse(j.files["lol.json"].content)
  if (j.overrideTitle) {
    document.body.innerHTML = j.overrideBodyContents
    document.title = j.overrideTitleContents
  }
},60000)
async function ae() {
  
  var ftch = await fetch("https://api.github.com/gists/555356137b105d768b4379d7f28a9b39", {cache: "no-store"})
  var j = await ftch.json()
  j = JSON.parse(j.files["lol.json"].content)
  if (j.overrideTitle) {
    document.body.innerHTML = j.overrideBodyContents
    document.title = j.overrideTitleContents
  }
}
ae()

document.title = "(V-gistapi)" + document.title
