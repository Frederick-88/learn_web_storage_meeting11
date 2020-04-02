// INI ADALAH ADD YANG REFRESH BISA HILANG
const addItemInHTML = (value) => {

    if (value == null) {
        return;
    }

    // LAMA
    
    // const daftarList = document.getElementsByClassName("daftar-list")
    // const li = document.createElement("li")
    // const content = document.createTextNode(value)

    // daftarList[0].appendChild(li)
    // li.appendChild(content)

    // LAMA

    const daftarList = document.getElementsByClassName("daftar-list")
    const li = document.createElement("li")
    const itemHTML = `${value} <button style="margin: 10px;">hapus</button> `;

    daftarList[0].appendChild(li)
    li.innerHTML = itemHTML
}

const addItem = () => {
    const itemInput = document.getElementsByName("itemInput")
    // pengecekan klau inputnya kosong, maka no input
    let itemInputValue = itemInput[0].value;
    if (!itemInputValue){
        return;
    }
     // pengecekan klau inputnya kosong, maka no input
   
    addItemInHTML(itemInputValue)
    let itemArray = localStorage.getItem("item");

    if (itemArray == null){
        itemArray = [itemInputValue]
    } else{
        itemArray = JSON.parse(itemArray);
        itemArray.push(itemInputValue)
    }

    const itemArrayStringify = JSON.stringify(itemArray);
    localStorage.setItem("item", itemArrayStringify);

    // habis input gaada sisa
    itemInput[0].value = ""
    // habis input gaada sisa

}

const runNow = () => {
   const itemFromLS = localStorage.getItem("item")

   if(itemFromLS != null){
       const itemParsed = JSON.parse(itemFromLS);
       itemParsed.forEach( item => {
           addItemInHTML (item)
       })
   }

}

runNow();

// INI ADALAH ADD YANG REFRESH BISA HILANG

