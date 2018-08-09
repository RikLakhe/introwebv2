const DOG_LIST_URL = "https://dog.ceo/api/breeds/list/all";

const promise = fetch(DOG_LIST_URL);

const listing = document.querySelector('.list');

promise.then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
}).then(function(processedResponse) {
    // const selectList = document.createElement("option");
    // const breeds = processedResponse.message;
    const dogListing = Object.keys(processedResponse.message);
    // for (let i = 0; i < dogListing.length; i++) {
    //     console.log(dogListing[i]);
    // }
    let toAdd = "";
    dogListing.forEach(element => {
        console.log(element);
        let dogName = element;
        // selectList.value = dogName;
        // selectList.innerText = dogName;
        // listing.appendChild(selectList);

        let theList = `<option value = '${dogName}'>${dogName}</option>`;
        toAdd += theList;
    });

    listing.innerHTML = toAdd;

});

function SetData() {
    var dogoName = listing.options[listing.selectedIndex].value;
    const DOG_img_URL = `https://dog.ceo/api/breed/${dogoName}/images/random`;
    return DOG_img_URL;
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);

const doggos = document.querySelector(".dog-picture");

function addNewDoggo() {
    const promise = fetch(SetData());
    promise
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            doggos.appendChild(img);
        });
}
// const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// const doggos = document.querySelector(".doggos");

// function addNewDoggo() {
//     const promise = fetch(DOG_URL);
//     promise
//         .then(function (response) {
//             const processingPromise = response.json();
//             return processingPromise;
//         })
//         .then(function (processedResponse) {
//             const img = document.createElement("img");
//             img.src = processedResponse.message;
//             img.alt = "Cute doggo";
//             doggos.appendChild(img);
//         });
// }
// document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);


// selectList.option = dataArray;
// listing.appendChild(selectList);
// console.log(dataArray);
// dataArray.forEach(element => {
//     console.log(dataArray[element].message);
//     // li.innerText = dataArray[element].message;
//     // listing.appendChild(li);
// });