let datas = []; 


function getData(event){
    event.preventDefault();
    let projectName = document.getElementById("projectn").value;
    let description = document.getElementById("description").value;
    let sdate = new Date(document.getElementById("sdate").value);
    let edate = new Date(document.getElementById("edate").value);
    let img = document.getElementById("attach-files").files;

    let nodejs = document.getElementById("checkbox-nodejs").checked;
    let nextjs = document.getElementById("checkbox-next").checked;
    let reactjs = document.getElementById("checkbox-reactjs").checked;
    let typescript = document.getElementById("checkbox-typescript").checked;

    let icons = [nodejs, nextjs, typescript,reactjs];

    img = URL.createObjectURL(img[0]);

    if(projectName == ""){
        return alert("Project Cannot be empty");
    } else if (description == "") {
        return alert("Description Cannot be empty");
    } else if (description.length < 80) {
        return alert("Description must be more than 80 Characters");
    } else if (sdate == "") {
        return alert("Date Cannot be empty");
    } else if (edate == "") {
        return alert("Date Cannot be empty");
    }
    
    let getDuration = edate.getTime() - sdate.getTime();
    let resultTime = Math.floor(getDuration / (1000 * 60 * 60 * 24));
    

    
    let data = {
        projectName,
        description,
        img,
        icons,
        resultTime
    };

    datas.push(data);
    showData();

}



function showData (){

    for(let i = 0; i < datas.length;i++){
        contents.innerHTML += `<div class="card-post">
        <img class="post-img" src="${datas[i].img}">
        <div class="title-date">
            <h1 class="title">${datas[i].projectName}</h1>
            <h3 class="date">Durasi : ${datas[i].resultTime} Hari</h3>
        </div>
        <div class="post-content">
            <p>${datas[i].description}</p>
        </div>
        <div class="tag-tech" id="tag-tech">
            ${datas[i].icons[0] ? `<img class="nodejs">` : ""}
            ${datas[i].icons[1] ? `<img class="nextjs">` : ""}
            ${datas[i].icons[2] ? `<img class="reactjs">` : ""}
            ${datas[i].icons[3] ? `<img class="typescript">` : ""}
        </div>
        <div class="post-button">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    </div>`;
    }
}
