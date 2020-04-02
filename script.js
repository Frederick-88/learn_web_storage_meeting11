// INI ADALAH ADD YANG REFRESH BISA HILANG
const addItemInHTML = (value) => {

    if (value == null) {
        return;
    }

    const daftarList = document.getElementsByClassName("daftar-list")
    const li = document.createElement("li")
    const content = document.createTextNode(value)

    daftarList[0].appendChild(li)
    li.appendChild(content)
}

const addItem = () => {
    const itemInput = document.getElementsByName("itemInput")
    // console.log(itemInput[0].value);
    let value = itemInput[0].value;
   
    addItemInHTML(itemInput)
    let itemArray = localStorage.getItem("item");
    if ((typeof itemArray) == "string" || (itemArray == null)){
        itemArray = (itemInput)
    } else{
        itemArray.push(itemInput)
    }

    const itemArrayStringify = JSON.stringify(itemArray);
    localStorage.setItem("item", itemArrayStringify);

    // debugger;

}

const runNow = () => {
   const item = localStorage.getItem("item")

   addItemInHTML(item)
}

runNow();

// INI ADALAH ADD YANG REFRESH BISA HILANG

