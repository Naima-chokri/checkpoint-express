const timeAuth=(req,res,next)=>{
    const date1 = new Date();
    const date = date1.getHours();
    const day = date1.getDay()

    // const date = 12;
    // const day = 2;

    if((date<=17 && date>=9) && (day!=0 && day!=1)){
    //if((date<=17 && date>=9) || (day!=0 && day!=1)){
       // res.status(200).send("open");
       next()
    }
    else{
        //  res.status(400).send("close");
        console.log("closekk")
         res.status(400).render('test.ejs');
    }
}
    
module.exports=timeAuth