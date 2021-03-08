function create_blank(text) {

  //console.log(words)
  if(text == " "){return}
  //var new_text=""
  var list_words_elem = document.getElementById(text)

  for(let i=0;i<text.length;i++){
    const rand = Math.random() < 0.5
    //Foe each letter create an html element and add the letter to it.
    var elem = document.createElement("p")
    elem.setAttribute("id",text+text.charAt(i)+i)
    var t=document.createTextNode(text.charAt(i))
    elem.appendChild(t)

	if (rand==0){ //The letter is not a blank
    //non-blank letter gets placed in the list item
    list_words_elem.appendChild(elem)
	}
	else{
    //new_text+="_"
    var area = document.getElementById("fill_letters")
    area.appendChild(elem)
    elem_v='#'+elem.id
    $(elem_v).draggable()
    //Create an placeholder and set it to _ for blank
    var blank = document.createElement(text+c+"b")
    var b=document.createTextNode("_")
    blank.appendChild(b)
    list_words_elem.appendChild(blank)
	}
  }
  
//var elem = document.getElementById('text_with_blank');

//elem.textContent = elem.textContent +new_text;
//const li_id = '#'+text
//$(li_id).html(new_text)
}


