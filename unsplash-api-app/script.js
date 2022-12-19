/*

    1. connect to API and get data
    2. build row structure
    3. add data to rows

*/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
        let container = document.getElementById('container');

        let res = JSON.parse(xhttp.responseText)
        for (row of res) {
            let photoCtr = document.createElement('div')
            photoCtr.classList.add('photo-ctr')
            photoCtr.innerHTML = `
                <img class='photo' src=${row.urls.full}>
                <p class='description'>Description: ${row.alt_description} </p>
                <p class='author'> Author: ${row.user.name} </p>
                <p class='created-at'>Created At: ${new Date(row.created_at).toLocaleString()} </p>
            `
            container.appendChild(photoCtr)
        }
    }
};
xhttp.open("GET", "https://api.unsplash.com/photos/?client_id=IlnS6fpD9lAWsY_ZVXFFWOaDmF74VsCfwn_CendI3tw", true);
xhttp.send()