// Function called whenever user tab on any box
let arr = ["","","","","","","","",""];
let f=false;

let b1 =  document.getElementById("b1");

function myfunc() {

    // Setting DOM to all boxes or input field
    // Checking if Player X won or not and after
    // that disabled all the other fields
    if (arr[0]==="X" && arr[1]==="X"&& arr[2]==="X") {
        document.getElementById('print')
            .innerHTML = "Player X won";
        f=true;
        window.alert('Player X won');
    }
    else if (arr[0]==="X" && arr[3]==="X"&& arr[6]==="X") {
        document.getElementById('print')
            .innerHTML = "Player X won";
f=true;
        window.alert('Player X won');
    }
    else if (arr[6]==="X" && arr[7]==="X" && arr[8]==="X") {
        document.getElementById('print')
            .innerHTML = "Player X won";
        f=true;
        window.alert('Player X won');
    }
    else if (arr[2]==="X" && arr[5]==="X" && arr[8]==="X") {
        document.getElementById('print')
            .innerHTML = "Player X won";
        f=true;
        window.alert('Player X won');
    }
    else if (arr[0]==="X" && arr[4]==="X" && arr[8]==="X") {
        document.getElementById('print')
            .innerHTML = "Player X won";
        f=true;
        window.alert('Player X won');
    }
    else if (arr[2]==="X" && arr[4]==="X" && arr[6]==="X") {
        document.getElementById('print')
            .innerHTML = "Player X won";
        f=true;
        window.alert('Player X won');
    }
    else if (arr[1]==="X" && arr[4]==="X" && arr[7]==="X") {
        document.getElementById('print')
            .innerHTML = "Player X won";
        f=true;
        window.alert('Player X won');
    }
    else if (arr[3]==="X" && arr[4]==="X" && arr[5]==="X") {
        document.getElementById('print')
            .innerHTML = "Player X won";
        f=true;
        window.alert('Player X won');
    }

        // Checking of Player X finsh
        // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if (arr[0]==="0" && arr[1]==="0" && arr[2]==="0") {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        f=true;
        window.alert('Player 0 won');
    }
    else if (arr[0]==="0" && arr[3]==="0"&& arr[6]==="0") {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        f=true;
        window.alert('Player 0 won');
    }
    else if (arr[6]==="0" && arr[7]==="0" && arr[8]==="0") {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        f=true;
        window.alert('Player 0 won');
    }
    else if (arr[2]==="0" && arr[5]==="0" && arr[8]==="0") {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        f=true;
        window.alert('Player 0 won');
    }
    else if (arr[0]==="0" && arr[4]==="0" && arr[8]==="0") {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        f=true;
        window.alert('Player 0 won');
    }
    else if (arr[2]==="0" && arr[4]==="0" && arr[6]==="0") {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        f=true;
        window.alert('Player 0 won');
    }
    else if (arr[1]==="0" && arr[4]==="0" && arr[7]==="0") {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        f=true;
        window.alert('Player 0 won');
    }
    else if (arr[3]==="0" && arr[4]==="0" && arr[5]==="0") {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        f=true;
        window.alert('Player 0 won');
    }
    if (f){
       b1.disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }

        // Checking of Player 0 finsh
    // Here, Checking about Tie
    else if ((arr[0]==="X" || arr[0]==="0") && (arr[1]==="X"
            || arr[1]==="0") && (arr[2]==="X" || arr[2]==="0") &&
        (arr[3]==="X" || arr[3]==="0") && (arr[4]==="X" || arr[4]==="0") && (arr[5]==="X" || arr[5]==="0") &&
        (arr[6]==="X" || arr[6]==="0") && (arr[7]==="X" || arr[7]==="0") && (arr[8]==="X" || arr[8]==="0")) {
        document.getElementById('print')
            .innerHTML = "Match Tie";
        window.alert('Match Tie');
    }
    else {

        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }

}

// Function to reset game
function myfunc_2() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
    for (let i=0;i<9;i++){
        arr[i]="";
    }

}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function StepPlayer(element,number){
    element.disabled=true;
    if (flag==1){
        element.value="X";
        arr[number]="X";
        flag=0;
    } else{
        element.value="0";
        arr[number]="0";
        flag=1;
    };

    myfunc();
}

function SaveGame(){
    alert("123");
    $.ajax({
        url: "http://localhost:8080/tictactoe/post",
        type:'POST',
        contentType:"application/json;charset=utf-8",
        data:JSON.stringify(arr),
        success:function () {
            window.alert('SUCCESS');
        },
        error:function (e) {
            window.alert('ERROR');

        }
    });

}

function GetGame(){
    $.ajax({
        url: "http://localhost:8080/tictactoe/get",
        type: 'GET',
        dataType:'json',
        success: function (data) {
            alert(data);
            arr=data;
            document.getElementById('b1').value = arr[0];
            if (arr[0]!=="X"){
                document.getElementById('b1').enabled=true;
            }
            document.getElementById("b2").value =arr[1];
            if (arr[1]!=="X"){
                document.getElementById('b2').enabled=true;
            }
            document.getElementById("b3").value = arr[2];
            if (arr[2]!=="X"){
                document.getElementById('b3').enabled=true;
            }
            document.getElementById("b4").value =arr[3];
            if (arr[3]!=="X"){
                document.getElementById('b4').enabled=true;
            }
            document.getElementById("b5").value = arr[4];
            if (arr[4]!=="X"){
                document.getElementById('b5').enabled=true;
            }
            document.getElementById("b6").value = arr[5];
            if (arr[5]!=="X"){
                document.getElementById('b6').enabled=true;
            }
            document.getElementById("b7").value = arr[6];
            if (arr[6]!=="X"){
                document.getElementById('b7').enabled=true;
            }
            document.getElementById("b8").value = arr[7];
            if (arr[7]!=="X"){
                document.getElementById('b8').enabled=true;
            }
            document.getElementById("b9").value = arr[8];
            if (arr[8]!=="X"){
                document.getElementById('b9').enabled=true;
            }
        }

    })
}
