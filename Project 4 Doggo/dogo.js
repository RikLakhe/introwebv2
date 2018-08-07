const DOG_LIST_URL = "https://dog.ceo/api/breeds/list/all";

const promise = fetch(DOG_LIST_URL);

const listing = document.querySelector('.list');

promise.then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
}).then(function(processedResponse) {
    const selectList = document.createElement("Select");
    const breeds = processedResponse.message;

    console.log(breeds[])

    // breeds.forEach(function(dog) {
    //     if (breeds[dog].length >= 1) {
    //         for (i = 0; i < breeds[dog].length; i++) {
    //             selectList.appendChild('<option value="' + dog + '-' + breeds[dog][i] + '">' + breeds[dog][i] + ' ' + dog + '</option>');


    //         }
    //     }
    // })
})


// selectList.option = dataArray;
// listing.appendChild(selectList);
// console.log(dataArray);
// dataArray.forEach(element => {
//     console.log(dataArray[element].message);
//     // li.innerText = dataArray[element].message;
//     // listing.appendChild(li);
// });