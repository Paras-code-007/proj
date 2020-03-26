const fs=require('fs')


fs.readFile(__dirname+"/animal.txt",function (err,data) {
    var cat=0
    var flag=1
    
    var searchText= "monkey"; 
    if(err) throw err

    strdata= data.toString()
    let ind= strdata.indexOf(searchText,0)
    while(ind+3 <= strdata.length && flag!=0)
    { 
        ind= strdata.indexOf(searchText,ind)
        if(ind==-1)
        flag=0 //not found
        else
        cat=cat+1//found
        ind=ind+1;
    }
    console.log(cat)
})

//console.log(cat)//=0 beacuse of async 
//the data collected is stored in the form of strings and \n comes where enters are there 

//weava
