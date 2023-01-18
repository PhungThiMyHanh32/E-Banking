
window.onload = Recharge();
function Recharge(){
    document.querySelector("#Recharge").innerHTML = `
<div class="center">
    <div style="color: black;" class="column-recharge">
        <p style="color: black;"><i class="fa fa-bank"></i> Số tài khoản</p>
        <p style=" font-weight:bold; color: black; margin: 0.5em; margin-left: 2em">097422481213123</p>
        <p style="color: black;"><i class='fas fa-coins'></i> Số dư</p>
        <p class="alignright" style="margin: 0em; font-size:24px; font-weight:bold; color : #EE2E2E">2.000.000 VND</p>
    </div>

    <div class="column-recharge-2" ">
        <p><i class='fas fa-phone-square-alt' ></i> Số điện thoại được nạp</p>
        <div>
        <input type="text" id="input-phone-number" name="firstname" placeholder=" Số điện thoại">
        <button class = "button-recharge" style="background-color: white; "onclick = "changePhoneNumber(5)"><i class="far fa-address-book" style = "color : red" ></i></button>    
        <button class = "button-recharge" style="float: right;" onclick = "changePhoneNumber(1)"><img class="img-recharge-phone" src="images/avt.jpg" >&ensp;Nguyễn</button>    
        <button class = "button-recharge" style="float: right;" onclick = "changePhoneNumber(2)"><img class="img-recharge-phone" src="images/avt.jpg" >&ensp;Hạnh</button>
        <button class = "button-recharge" style="float: right;" onclick = "changePhoneNumber(3)"><img class="img-recharge-phone" src="images/avt.jpg" >&ensp;Trần A</button>
        <button class = "button-recharge" style="float: right;" onclick = "changePhoneNumber(4)"><img class="img-recharge-phone" src="images/avt.jpg" >&ensp;Mỹ Hạnh</button>
        
        
        </div>
        <p style = "color : #EE2E2E; font-size : 0.8em ; padding : 0.2em"><i class="fas fa-info-circle" style = "color : #EE2E2E;"> </i>&ensp;Bỏ trống nếu nạp cho chính mình</p>
        <p><i class="fas fa-coins"></i> Mệnh giá</p>
        <div>
            <p onclick = "changeColor(1)" id = "changeColor1" class="recharge-money" style="float: left;">10.000đ</p>
            <p onclick = "changeColor(3)" id = "changeColor3" class="recharge-money" style="float: right;">30.000đ</p>
            <p onclick = "changeColor(2)" id = "changeColor2" class="recharge-money" style="float: center;">20.000đ</p>
            
            
        </div>
        <div>
            <p onclick = "changeColor(4)" id = "changeColor4" class="recharge-money" style="float: left;">50.000đ</p>
            <p onclick = "changeColor(6)" id = "changeColor6" class="recharge-money" style="float: right;">200.000đ</p>
            <p onclick = "changeColor(5)" id = "changeColor5" class="recharge-money" style="float: center;">100.000đ</p>
        </div>
        <div>
            <p onclick = "changeColor(7)" id = "changeColor7" class="recharge-money" style="float: left;">300.000đ</p>
            <p onclick = "changeColor(8)" id = "changeColor8" class="recharge-money" style="float: center;">500.000đ</p>
        </div>
        
        </div>
        
    </p>
</div>
        <div class = "button-recharge-phone">
            <input type="button" class="button" value="Tiếp tục" onclick ="AcceptRecharge()">
        </div>
            `
}

function AcceptRecharge(){
    document.querySelector("#Recharge").innerHTML =`
    <div class="center">
        <div class="name-column">Xác nhận</div>
        <div style="color: #C4C4C4;" class="column-accept-recharge">
           
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft" >Tài khoản nguồn</p>
                <p class="alignright-bold">18110000028436</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft">Số điện thoại</p>
                <p class="alignright-red">0914080804</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft">Mệnh giá</p>
                <p class="alignright-red">10.000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft">Phí</p>
                <p class="alignright">0 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft">VAT</p>
                <p class="alignright">0 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft">Chiết khấu</p>
                <p class="alignright">500 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft">Thanh toán</p>
                <p class="alignright-red">9.500 VND</p>
            </div>
        </div>
       
       
        
    </div>
    <div class = "button-accept-recharge-phone">
        <input type="button" class="button" value="Trở lại" onclick ="Recharge()">
        <input type="button" class="button" value="Xác nhận" onclick ="window.location.href='home.html'">
    </div>
    `
}

function changeColor(id){
    for(let i = 1;i<9;i++){ 
        document.getElementById('changeColor'+i).style.backgroundColor="#ECECF6";
    }
    document.getElementById('changeColor'+id).style.backgroundColor="#A3A3BF";
}

function changePhoneNumber(id){
    switch(id){
        case 1: document.getElementById("input-phone-number").value = "0974224812"; break;
        case 2: document.getElementById("input-phone-number").value = "0914080804"; break;
        case 3: document.getElementById("input-phone-number").value = "0707306918"; break;
        case 4: document.getElementById("input-phone-number").value = "0967479503"; break;
    }
    
    
}