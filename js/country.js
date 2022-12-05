let apiURL=`https://api.covid19api.com/summary`;
console.log(apiURL);

function getCriticsCountries(){
    fetch(apiURL).then((response)=>response.json()).then((data)=>{
    let html="";
    
    data.Countries.forEach(element=>{
        // console.log(element.TotalDeaths);
        if(element.TotalDeaths>10000){
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

        }
    });
    document.getElementById('criticscountry').innerHTML=html;
})


}
getCriticsCountries();



