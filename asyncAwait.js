const sampleData=async()=>{
    try{
        let responce=await fetch("https://www.google.com");
        console.log(responce)
    }
    catch(err){
        console.log("Error accessing google:"+err)
    }   
}
sampleData()