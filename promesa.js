        var con = 1;
        const url = "https://rickandmortyapi.com/api/character/"+con.toString();

        if(con==1){
            fetch(url).then((response) => response.json())
            .then((data) =>{
                document.getElementById("IMG").src=data.image;
                document.getElementById('name').innerHTML = data.name;
                document.getElementById('status').innerHTML = data.status;
                document.getElementById('specie').innerHTML = data.species;
                document.getElementById('gender').innerHTML = data.gender;
                document.getElementById('origin').innerHTML = data.origin.name;
            })
            .catch((error) => console.log("error: ", error))
        }

        document.getElementById("boton1").onclick = function () { 
            con=(con-1)%671; //numero de personajes
            if(con<1)con=671;
            const url = "https://rickandmortyapi.com/api/character/"+con.toString();

            fetch(url).then((response) => response.json())
            .then((data) =>{
                document.getElementById("IMG").src=data.image;
                document.getElementById('name').innerHTML = data.name;
                document.getElementById('status').innerHTML = data.status;
                document.getElementById('specie').innerHTML = data.species;
                document.getElementById('gender').innerHTML = data.gender;
                document.getElementById('origin').innerHTML = data.origin.name;
            })
            .catch((error) => console.log("error: ", error))
         };

        document.getElementById("boton2").onclick = function () { 
            con=(con+1)%671; //numero de personajes
            if(con==0)con=1;

            const url = "https://rickandmortyapi.com/api/character/"+con.toString();

            fetch(url).then((response) => response.json())
            .then((data) =>{
                document.getElementById("IMG").src=data.image;
                document.getElementById('name').innerHTML = data.name;
                document.getElementById('status').innerHTML = data.status;
                document.getElementById('specie').innerHTML = data.species;
                document.getElementById('gender').innerHTML = data.gender;
                document.getElementById('origin').innerHTML = data.origin.name;
            })
            .catch((error) => console.log("error: ", error))
         };

