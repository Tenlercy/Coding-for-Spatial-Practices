console.log( "this work" );

let array_one = [
    "a house of wood",
    "a house of brick",
    "a house of broken dishes",
    "a house of discarded clothing",
    "a house of dust"
  ];

  let array_two = [
    "among other houses",
    "among small hills",
    "among high montains",
    "by a river",
    "by an abandoned lake"
  ];

  function renderPoem(){
    // 1.grab random element from array one
    let element_from_array_one = array_one[Math.floor(Math.random()*array_one.length)];
    // 2.grab random element from array two
    let element_from_array_two = array_two[Math.floor(Math.random()*array_two.length)];
    // 3.create a new paragraph element
    let paragraph = document.createElement("p");

    paragraph.textContent = `${element_from_array_one} ${element_from_array_two}`;


    // 4.append the paragraph to the div
    poem.appendChild(paragraph)
  }

  let button = document.querySelector("button");
  button.addEventListener("click", renderPoem);