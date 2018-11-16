var doubleTheValue = (v) => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(v*2);
        }, 3000);
    });
}

doubleTheValue(10).then((res)=>{
    console.log(res);
});

// However the above can not be recalled again and again like following
//var totolVal = doubleTheValue(10) + doubleTheValue(20);

//Instead you can use a promise chain like follows
doubleTheValue(10).then((res1)=> {
    doubleTheValue(20).then((res2) => {
        console.log("Tot: " + (res1 + res2));
    });
});

//Similarly we can use awit expression to wait for promises to return.
//Await it valid only inside aync function

async function calculateTot() {
    //await expression makes promise to return 
    var tot = await doubleTheValue(10) + await doubleTheValue(20);
    return tot;
}

calculateTot().then((res) => {
    console.log("Value with avait : " + res);
});
