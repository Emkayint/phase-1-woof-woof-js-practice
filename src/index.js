
function getNames(){
     document.getElementById('dog-bar').innerHTML = '';
    return    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then(data => {
        data.forEach( elem => {
            let toDis = document.getElementById('dog-bar')
            let btn = document.createElement('button')
            btn.innerHTML = `${elem.name}`
            toDis.appendChild(btn)
            btn.addEventListener('click', () => {
                document.getElementById('dog-info').innerHTML = "";
                let dog_info = document.getElementById('dog-info')
            
                let img = document.createElement('div')
                // h1.innerText = elem.name
                let good;
                if(elem.isGoodDog === true){
                    good = "good dog"
                } else {
                    good = "bad dog"
                }

                img.innerHTML = `<img src = '${elem.image}'>
                <h3> ${elem.name}</h3>
                <button> ${good} </button>
                `
                dog_info.appendChild(img)

            })
        })
    })
}

document.addEventListener("DOMContentLoaded", displayData)


function displayData(){
    getNames()
    let btntoFilter = document.getElementById('good-dog-filter')

    btntoFilter.addEventListener('click', ()=> {
     document.getElementById('dog-bar').innerHTML = '';

        if(btntoFilter.innerText === "Filter good dogs: OFF"){
            btntoFilter.innerText = 'Filter good dogs: ON'
            document.getElementById('dog-info').innerHTML = "";

            fetch('http://localhost:3000/pups')
            .then(res => res.json())
            .then(data => {
                let newArr = []
                function filterData(){
                    data.forEach(elem => {if(elem.isGoodDog === true){
                        newArr.push(elem)
                    }
                })

                }
                filterData()

                console.log(newArr)
                // let results = data.filter(filterData)

                // console.log(results)
                newArr.forEach( elem => { 

                    // console.log(elem)
                    let toDis = document.getElementById('dog-bar')
                    let btn = document.createElement('button')
                    btn.innerHTML = `${elem.name}`
                    toDis.appendChild(btn)
                    btn.addEventListener('click', () => {
                        document.getElementById('dog-info').innerHTML = "";
                        let dog_info = document.getElementById('dog-info')
                    
                        let img = document.createElement('div')
                        // h1.innerText = elem.name
                        let good = "Good Dog";
                        

                        img.innerHTML = `<img src = '${elem.image}'>
                        <h3> ${elem.name}</h3>
                        <button> ${good} </button>
                        `
                        dog_info.appendChild(img)

                    })
                })
            })
        } else {
            document.getElementById('dog-info').innerHTML = "";
            btntoFilter.innerText = "Filter good dogs: OFF"
            getNames()
        }
        

    })
} 