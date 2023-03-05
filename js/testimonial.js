const simpanData = [{
    nama: "Gajah",
    quote: "Mamalia Terbesar",
    image: "https://www.tanjungpinangpos.co.id/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/11/fromandroid-a1a22b6760b28af0a2a79e36bd5e08fc.jpg.webp",
    rating: 2,
},
{
    nama: "Semut ",
    quote: "Semut Suka Gula",
    image: "https://asset.kompas.com/crops/3YcngmR3WtpyuVlWZu643I6X5JY=/196x127:1724x1146/750x500/data/photo/2022/05/07/627657e2d1bfb.jpg",
    rating: 1,

},
{
    nama: "GKJW Mojowarno",
    quote: "Gereja Jawa Pertama di Jawa Timur",
    image: "https://radarjombang.jawapos.com/wp-content/uploads/2018/11/gkjw-mojowarno-gereja-jawa-tertua-di-indonesia_m_103761.jpg",  
    rating: 5,
}];


function summonTestimonial(){
    let testiHtml = "";
    
    simpanData.forEach((item)=>{
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
summonTestimonial();

function filteredData(rating){
    let testiHtml = "";

    const testiFilter = simpanData.filter((item) => {
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



   











