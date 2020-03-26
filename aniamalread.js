const fs=require('fs')
var cat=0
var flag=1


fs.readFile(__dirname+"/animal.txt",function (err,data) {
    if(err) throw err

    strdata= data.toString()
    let ind=0

    while(flag!=0){
        ind= strdata.indexOf("cat",ind)
        if(ind=-1)
        flag=0//not found 
        else
        cat++//found 
    }
    
    console.log(cat)
})

//console.log(cat)//=0 beacuse of async 
//the data collected is stored in the form of strings and \n comes where enters are there 

//weava