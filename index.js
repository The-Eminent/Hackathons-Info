 let url = "https://kontests.net/api/v1/all"
 let response = fetch(url)
 response.then((v) => {
         return v.json()
 }).then((contests) => {
         console.log(contests)
         ihtml = ""
         for (item in contests) {
                 console.log(contests[item])
                 ihtml += `
                 <div class="card mx-2 my-2" style="width: 22rem;">
                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
                                 <div class="card-body">
                                         <h5 class="card-title">${contests[item].name}</h5>
                                         <p class="card-text"> <span id="status">Status - </span>${contests[item].status}</p>
                                         <p><span id="site">Website - </span> ${contests[item].site}</p>
                                         <p class="card-text"> <span id="hours">In 24 Hours? - </span> ${contests[item].in_24_hours} </p>
                                         <p id="start">Starts at: ${contests[item].start_time}
                                         <p id="end">Starts at: ${contests[item].end_time}
                                         <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
                                 </div>
                         </div>
                 `
         }
         cardContainer.innerHTML = ihtml
 })
