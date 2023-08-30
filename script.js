try{
    fetch("./imdex.json")
    .then((response) => response.json())
    .then((data)=> (
        searchItems(data)
    ))
    .catch(Promice);
}catch(msg){
 console.warning(msg)
}

function searchItems(items){

}