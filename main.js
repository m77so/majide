const $generatedText = document.getElementById("generatedText")
const updateLink = ()=>{
  let text = $generatedText.innerText
  document.getElementById("tweet-generated-text").setAttribute("href","https://twitter.com/intent/tweet?text="+encodeURIComponent(text))
}

updateLink()

for(let inputDom of document.getElementsByTagName("input")){
  inputDom.addEventListener("input",(ev)=>{
    let v = ev.target.value
    let name = ev.target.name
    for(let phDom of document.getElementsByClassName("ph-"+name)){
      phDom.innerHTML = v
      phDom.classList.add("ph-change")
      setTimeout(()=>{phDom.classList.remove("ph-change")},200)
    }
    updateLink()
  })
  inputDom.addEventListener("focus",(ev)=>{

    let name = ev.target.name
    for(let phDom of document.getElementsByClassName("ph-"+name)){
      phDom.classList.add("ph-focus")
    }
  })
  inputDom.addEventListener("blur",(ev)=>{
    let name = ev.target.name
    for(let phDom of document.getElementsByClassName("ph-"+name)){
      phDom.classList.remove("ph-focus")
    }
  })

}

// http://konyu.hatenablog.com/entry/2015/04/05/235432
function selectDomElm(obj){
  var range = document.createRange();
  range.selectNodeContents(obj);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}
$generatedText.addEventListener("click",()=>{selectDomElm($generatedText)})