let finalURL=`https://api.covid19api.com/summary`;
console.log(finalURL);

function GetCountries(){fetch(finalURL).then((response)=>response.json()).then((data)=> {
    let html="";
    console.log(data);
    
   data.Countries.forEach(element => {
    
    console.log(element.TotalRecovered);
    html+=`
                    <tbody>
                        <tr>
                            <td scope="col" class="text-info" >${element.Country}</td>
                            <td scope="col" class="text-warning">${element.TotalConfirmed}</td>
                            <td scope="col" class="text-success">${element.TotalRecovered}</td>
                            <td scope="col" class="text-danger">${element.TotalDeaths}</td>
                        </tr>
                    </tbody>
    

    `
   });
   document.getElementById('tbody').innerHTML=html;
     
        

})}
GetCountries();
function Search(){
    let value=document.querySelector('#form input').value;
    fetch(finalURL)
    .then(response=>response.json())
    .then(data=>{
        let html="";
        data.Countries.forEach(info=>{
            let exist_info=info.Country.toLowerCase().includes(value.toLowerCase());
            if(exist_info){
                html+=`
                <tbody>
                    <tr>
                        <td scope="col" class="text-info" >${info.Country}</td>
                        <td scope="col" class="text-warning">${info.TotalConfirmed}</td>
                        <td scope="col" class="text-success">${info.TotalRecovered}</td>
                        <td scope="col" class="text-danger">${info.TotalDeaths}</td>
                    </tr>
                </tbody>

        `
            }
     
        })
        document.getElementById('tbody').innerHTML=html;
    })
}
Search();

function GetUsers() {
    fetch(finalURL)
    .then(response => response.json())
    .then(data => {
       let html = '';
       data.Countries.forEach(info => {

        html += `
                    <tbody>
                        <tr>
                            <td scope="col" class="text-info" >${info.Country}</td>
                            <td scope="col" class="text-warning">${info.TotalConfirmed}</td>
                            <td scope="col" class="text-success">${info.TotalRecovered}</td>
                            <td scope="col" class="text-danger">${info.TotalDeaths}</td>
                        </tr>
                    </tbody>
        `
       })
       document.getElementById('tbody').innerHTML=html;
    })
    .catch(error => console.log(error))
}

GetUsers();
