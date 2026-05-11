function fetchData(userName,callback) {

    console.log("Fetching data");
    callback({id:2,userName,age:22,email:"sufyanali.dev@gmail.com"})

}

function fetchUserPost(userId,callback) {

    console.log("Fetching user posts");
    callback({userId,posts:["hey","good morning",'how are you']})
    
}
fetchData("Sufyan",function(data) {
    console.log(data);
    
    fetchUserPost(data.id,function(data) {

        console.log(data);
            
    })
})