let first_number = "";
let global = 0;

//=====================Numbers===================
document.getElementById("0").addEventListener('click', function(e){
    if (first_number == "0"){
        first_number = "";
    }
    else{
        first_number+="0";
        document.getElementById("screen").value=first_number;
    }
    
})
document.getElementById("1").addEventListener('click', function(e){
    first_number+="1";
    document.getElementById("screen").value=first_number;
})
document.getElementById("2").addEventListener('click', function(e){
    first_number+="2";
    document.getElementById("screen").value=first_number;
})
document.getElementById("3").addEventListener('click', function(e){
    first_number+="3";
    document.getElementById("screen").value=first_number;
})
document.getElementById("4").addEventListener('click', function(e){
    first_number+="4";
    document.getElementById("screen").value=first_number;
})
document.getElementById("5").addEventListener('click', function(e){
    first_number+="5";
    document.getElementById("screen").value=first_number;
})
document.getElementById("6").addEventListener('click', function(e){
    first_number+="6";
    document.getElementById("screen").value=first_number;
})
document.getElementById("7").addEventListener('click', function(e){
    first_number+="7";
    document.getElementById("screen").value=first_number;
})
document.getElementById("8").addEventListener('click', function(e){
    first_number+="8";
    document.getElementById("screen").value=first_number;
})
document.getElementById("9").addEventListener('click', function(e){
    first_number+="9";
    document.getElementById("screen").value=first_number;
})
//==============Plus minus divide Multiply=================
document.getElementById("plus").addEventListener('click', function(e){
    first_number+="+";
    document.getElementById("screen").value=first_number;
})

document.getElementById("minus").addEventListener('click', function(e){
    first_number+="-";
    document.getElementById("screen").value=first_number;
})
document.getElementById("x").addEventListener('click', function(e){
    first_number+="*";
    document.getElementById("screen").value=first_number;
})
document.getElementById("divide").addEventListener('click', function(e){
    first_number+="/";
    document.getElementById("screen").value=first_number;
})
//=================Point=================
document.getElementById("dot").addEventListener('click', function(e){
    first_number+=".";
    document.getElementById("screen").value=first_number;
})

// ===============Memory Functionality===============
document.getElementById("ms").addEventListener('click', function(e){
    global = parseInt(first_number);
    document.getElementById("screen").value=first_number;
})

document.getElementById("mplus").addEventListener('click', function(e){
    global += parseInt(first_number);
})

document.getElementById("mc").addEventListener('click', function(e){
    global = 0;
    document.getElementById("screen").value=global;
    first_number = global;
})

document.getElementById("mr").addEventListener('click', function(e){
    document.getElementById("screen").value=global;
    first_number = global;
}
)
//=================Plus--Minus====================
document.getElementById("plus_minus").addEventListener('click', function(e){
    result = parseInt(first_number) * -1;
    document.getElementById("screen").value=result;
    first_number = result;
})
//=============Square Root=============
document.getElementById("sqrt").addEventListener('click', function(e){
    result = parseInt(first_number);
    square_root = Math.sqrt(result);
    document.getElementById("screen").value=square_root;
    first_number = square_root;
})
//================Into 2===============
document.getElementById("into2").addEventListener('click', function(e){
    result = parseInt(first_number) * 2;
    document.getElementById("screen").value=result;
    first_number = result;
})

//================1 by x===============
document.getElementById("1byx").addEventListener('click', function(e){
    result = 1 / parseInt(first_number);
    document.getElementById("screen").value=result;
    first_number = result;
})
//=================Clear All===============
document.getElementById("c").addEventListener('click', function(e){
    first_number="";
    document.getElementById("screen").value=first_number;
})




//================Equals=================
document.getElementById("equal").addEventListener('click', function(e){
    result = eval(first_number);
    document.getElementById("screen").value=result;
    first_number = result;
    document.getElementById("screen").value=result;
})