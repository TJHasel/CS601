

// getting button element
const button = document.getElementById("clickme");

// listener set for click event to function
button.addEventListener("click", myFunction);

let url = "data.json";

function myFunction() {
   // receiving data from data.json
   fetch( url ) 
   // response object returned
   .then(response => {
       const resp = response.status
        // if response status is 200 (success), run the following block
        if (resp == 200) {
             // receiving data from data.json and grabbing target from DOM
            return response.json().then(data => {
                const target = document.getElementById("target")
                 // iterating through the returned data to have the school attributes be displayed in place of "target"
                for (let x of data) {
                target.innerHTML += `<p>${x.school}</p>`
              }
            })
        }

         // if status code does not equal 200, run the following block
        else {
            const err = document.getElementById("error")
            err.innerHTML += `error in retrieving data`
        }
   })
    // catching other errors
   .catch(e => console.log('error!', e))
}


