//scope refers the power of execution of variables till their particular area 


if (true) {
    const username = "ronak"
    if(username === "ronak"){
        const website = " youtube"
        console.log(username + website);
    }
   // console.log(website);   we cannot access website here coz website scope is limited inside if statement in{}

}
 //console.log(username); cannot access here coz username is limited in {}
