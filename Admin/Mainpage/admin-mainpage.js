var news = [
    {
        "id": 1,
        "title": "LEO HITS FIVE IN WIN OVER ESTONIA",
        "body": "REPOKER DE LEO ANTE ESTONIA Argentina venció por 5-0 a Estonia en El Sadar de Pamplona (España) en partido amistoso de preparación para el Mundial […]"

    },
    {
        "id": 2,
        "title": "ARGENTINA CLAIM FINALISSIMA 2022 CROWN",
        "body": "The Albiceleste ran out 3-0 winners over the Azzurri at Wembley. Leo captained Argentina and set them on their way […]"
    },
    {
        "id": 3,
        "title": "LEO BAGS ASSIST IN PSG ROUT",
        "body": "Leo Messi registered an assist as the Parisian outfit ran out 5-0 winners over Metz at the Parc des Princes […]"
    },
    {
        "id": 4,
        "title": "LEO HAS ALL EYES ON THE FINALISSIMA",
        "body": "As defending Copa América champions, Leo Messi’s Argentina will take on the current European Championship holders Italy on Wednesday at […]"
    },
    {
        "id": 5,
        "title": "LEO SET FOR LAST LEAGUE OUTING OF SEASON",
        "body": "Leo Messi and his PSG teammates face Metz at the Parc des Princes in the final matchday of the Ligue […]"
    }
]


function disableBtn() {
    document.getElementById("add-button").disabled = true;
}

function enableBtn() {
    document.getElementById("add-button").disabled = false;
}

let rowData = document.querySelector("#rowBody");
var rowNumber;
function data() {
    rowNumber = 0;
    let childRow = news.map(row => {
        return `
        <tr>
            <th scope="row"> ${++rowNumber} </th>
            <td>
                <div class="mb-3">                   
                    <p class="text-wrap" id="title${row.id}">${row.title}</p>
                </div>
            </td>
            <td>
                <div class="mb-3">
                    <p class="text-wrap" id="body${row.id}">${row.body}</p>
                </div>
            </td>
            <td>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Image (Picture only)</label>
                    <input class="form-control" type="file" id="formFile" accept="image/png, image/gif, image/jpeg"/>
                </div>
            </td>
            <td>
                <button type="button" class="btn btn-warning" id="${row.id}" onclick="edit(this.id)">Edit</button>
                <button type="button" class="btn btn-danger" id="${row.id}" onclick="del(this.id)">Delete</button>
            </td>
        </tr>
    `;

    })
        
    rowData.innerHTML = childRow.join("");

    rowData.innerHTML = childRow.join("");
    maxRow = document.createElement("p");
    maxRow.innerHTML = `<p>${rowNumber}/5</p>`;
    rowData.appendChild(maxRow);


    if (rowNumber == 5) {
        disableBtn();
    }
    else {
        enableBtn();
    }

}
function idMod(id){
    for (let i = 0 ; i < news.length ; i++){
        if(news[i].id > id){
            let reduceID = news[i].id;
            news[i].id = reduceID-1;
            console.log(reduceID);
        }
    }
}


function validate() {
    var account = document.getElementById("InputAccount").value;
    var password = document.getElementById("InputPassword1").value;
    login = document.getElementById("login-panel");
    if (account == "admin" && password == "messi") {
        login.remove();
        login = null;
        alert("Login successfully!");
    }
    else {
        alert("Login failed!");
    }
}

function del(id) {
    rowNumber = 0;
    news = news.filter((newsId) => newsId.id != id);
    idMod(id);
    data();
}


let editForm;
let backdrop;

var titleText
var bodyText;
function edit(id){
    let newsData = news.filter((row) => row.id == id)[0];


    editForm = document.createElement('div');
    editForm.className = 'md-3 edit-form';
    editForm.id = 'id-edit';
    editForm.innerHTML = `
    <h1 class="text-center">Edit</h1>
    <label class="form-label">Title</label>
        <textarea class="form-control" id="title-${id}" rows="3"></textarea>
    <label class="form-label">Body</label>
        <textarea class="form-control" id="body-${id}" rows="3"></textarea>
    <button id="save-content" onclick="saveContent(${id})" class="btn btn-success">SAVE</button>`

    document.body.append(editForm);

    titleText = document.querySelector(`#title-${id}`);
    bodyText = document.querySelector(`#body-${id}`);
    titleText.value = newsData.title;
    bodyText.value = newsData.body;

    backdrop = document.createElement('div');
    backdrop.className = 'backdrop';

    document.body.append(backdrop);
    backdrop.addEventListener('click', function(){
        editForm.remove();
        editForm = null;
        backdrop.remove();
        backdrop = null;
    })
}

function saveContent(id){ 
    let selectedRow = news.filter((row) => row.id == id)[0];
    selectedRow.title = titleText.value;
    selectedRow.body = bodyText.value;

    successful = document.createElement('p');
    successful.className = 'success';
    successful.innerHTML = 'Successful!';


    document.getElementById("id-edit").appendChild(successful);
    

    setTimeout(() => {
        editForm.remove();
        editForm = null;
        backdrop.remove();
        backdrop = null;
    }, 1000);
    
    data();
}




function saveContent(){
    let newContent = {
        id : news.length + 1,
        title : inputTitle.value,
        body : inputBody.value,
    }
    news.push(newContent);
    data();
}


function addRow(){
    addForm = document.createElement('div');
    addForm.className = 'md-3 add-form';
    addForm.id = 'id-add';
    addForm.innerHTML = `
    <h1 class="text-center">Add</h1>
    <label class="form-label">Title</label>
        <textarea class="form-control" id="add-title" rows="3"></textarea>
    <label class="form-label">Body</label>
        <textarea class="form-control" id="add-body" rows="3"></textarea>
    <button id="save-content" onclick="saveContent()" class="btn btn-success">SAVE</button>`
    document.body.append(addForm);

    inputTitle = document.getElementById('add-title');
    inputBody = document.getElementById('add-body');


    backdrop = document.createElement('div');
    backdrop.className = 'backdrop';

    document.body.append(backdrop);
    backdrop.addEventListener('click', function(){
        addForm.remove();
        addForm = null;
        backdrop.remove();
        backdrop = null;
    })
}
inputTitle = document.getElementById('add-title');
inputBody = document.getElementById('add-body');


function saveContent(){
    let newContent = {
        id : news.length + 1,
        title : inputTitle.value,
        body : inputBody.value,
    }
    if (rowNumber == 5){
        return;
    }
    else {
        news.push(newContent);
    }
    data();
}

data();





