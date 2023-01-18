
window.onload = Recharge();
function Recharge(){
    document.querySelector("#Recharge").innerHTML = `

    <div class="center">
    <div class="input-container-beneficiaries">
    <i class="fa fa-search icon-beneficiaries"></i>
        <input class="input-field-beneficiaries" type="text" placeholder="Username" name="usrnm" style="width:80%">
       
        </div>
    </div>
    


<div class="center">
        <div class="column-beneficiaries" >
        <div style="color: #C4C4C4;" class="column-beneficiaries-mini">
        <div style="clear : both;">
            <p class="alignright">0500 0000 12345</p>
            <div class="badge" style = "background: #37DC94;">M</div>
            <div class="badge-fake">&emsp;Mỹ Hạnh</div>
        </div>
        </div>
        <div style="color: #C4C4C4;" class="column-beneficiaries-mini">
        <div style="clear : both;">
            <p class="alignright">0500 0000 12346</p>
            <div class="badge" style = "background: #268AFF;">H</div>
            <div class="badge-fake">&emsp;Hạnh Hạnh</div>
        </div>
        </div>
        
        <div style="color: #C4C4C4;" class="column-beneficiaries-mini">
        <div style="clear : both;">
            <p class="alignright">0500 0000 12347</p>
            <div class="badge" style = "background: #FA5C65;">P</div>
            <div class="badge-fake">&emsp;Phùng Thị Mỹ Hạnh</div>
        </div>
        </div>

        <div style="color: #C4C4C4;" class="column-beneficiaries-mini">
        <div style="clear : both;">
            <p class="alignright">0500 0000 12348</p>
            <div class="badge" style = "background: #e13fb9;">P</div>
            <div class="badge-fake">&emsp;Phùng Hạnh</div>
        </div>
        </div>

        </div>
</div>
            `
}

function AcceptRecharge(){
    document.querySelector("#Recharge").innerHTML =`
    <nav class="tm-nav">
        <ul>
            <li >
                <a href = "home.html"><span class="tm-nav-deco"></span>Tiếp tục</a>
            </li>
            <li >
                <a onclick = "Recharge()"><span class="tm-nav-deco"></span>Trở lại</a>
            </li>
        </ul>
    </nav>
    <div class="center">
        <div class="name-column">Xác nhận</div>
        <div style="color: #C4C4C4;" class="column-history">
           
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft" >Tài khoản nguồn</p>
                <p class="alignright">18110000028436</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft">Số điện thoại</p>
                <p class="alignright">0914080804</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft">Mệnh giá</p>
                <p class="alignright">10,000 VND</p>
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
                <p class="alignright">9,500 VND</p>
            </div>
        </div>
       
       
        </div>
        
    </div>`
}
