const testiData = new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.npoint.io/79ce0a839b72a553712d",true);

    xhr.onload = () =>{
        if(xhr.status === 200){
           resolve(JSON.parse(xhr.response)); 
        }else{
            reject("ERROR");
        }
    }
    xhr.onerror = ()=>{
        reject("GAK ISO");
    }
    xhr.send();
});

async function TampilSemuaData(){
    const response = await testiData;
    console.log(response)
    
    let testiHtml = "";
    response.forEach((item)=>{
        testiHtml += `
        <div class="card-warp">
            <div class="card-post">
                <div class="testi-img">
                    <img src="${item.image}" alt="">
                    </div>
                    <div class="testi-quote">
                        <p>${item.quote} </p>
                    </div>
                    <div class="testi-name">
                        <h5>${item.nama}</h5>
                    </div>
                    <p class="rating">
                        ${item.rating}
                        <i class="fa-solid fa-star"></i>
                    </p>
                </div>
            </div>
         </div>`
    })
    document.getElementById("card-testi").innerHTML = testiHtml;
}

TampilSemuaData();

async function filteredData(rating){

    const response = await testiData;
    let testiHtml = "";

    const testiFilter = response.filter((item) => {
        return item.rating === rating;
    })

    if(testiFilter.length === 0){
        testiHtml = `<h1> Data Tidak Ada </h1>`;
    }else{
        testiFilter.forEach((item)=>{
            testiHtml += `
            <div class="card-warp">
                <div class="card-post">
                    <div class="testi-img">
                        <img src="${item.image}" alt="">
                        </div>
                        <div class="testi-quote">
                            <p>${item.quote} </p>
                        </div>
                        <div class="testi-name">
                            <h5>${item.nama}</h5>
                        </div>
                        <p class="rating">
                            ${item.rating}
                            <i class="fa-solid fa-star"></i>
                        </p>
                    </div>
                </div>
             </div>`
        })
    }

    document.getElementById("card-testi").innerHTML = testiHtml;
}