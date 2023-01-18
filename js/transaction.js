window.onload = Transaction();
function Transaction() {
    document.querySelector("#Transaction").innerHTML = `

<div class="row">
    <div class="center">
        <div class="name-column-transaction">Thông tin tài khoản thanh toán</div>
        <div style="color: #C4C4C4;" class="column-transaction">
           
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft-black"><i class="fas fa-user-tie"></i> Tên chủ tài khoản</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft">&nbsp;PHUNG THI MY HANH</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft-black"> <i class="fas fa-university"></i> Tài khoản nguồn</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft">1788888899999</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft-black"><i class="fas fa-dollar-sign"></i>&nbsp;Số dư</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignright" style = "color : red; font-weight : bold; font-size:23px; margin-top:0.2em ">30.000.000 VND</p>
            </div>
        </div>
       
        </div>
    </div>
    <div>
        <div class="name-column-transaction-benefit">Tài khoản thụ hưởng</div>
        <div style="color: #C4C4C4;" class="column-transaction-1">
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft-black"><i class="fas fa-user-tie"></i> Tên tài khoản thụ hưởng</p>
            </div>
        </div>

        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft">TRAN THI MY HANH</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft-black"><i class="fas fa-university"></i> Tài khoản thụ hưởng</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft">477777777888</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft"></p>
            </div>
        </div>
       
        </div>
    </div>
  </div>
  <div class="center">
    <div class="name-column-transaction-info">Thông tin chuyển tiền</div>
    <div style="color: #C4C4C4;" class="column-transaction-info">
    <div style="color: #C4C4C4;" class="column-transaction-info-mini">
        <div style="clear : both;">
            <p class="alignleft" style = "color : #44A7DA; font-weight : bold;"><i class='fas fa-coins'></i> Số tiền</p>
        </div>
    </div>
    <div class = "column-transaction-info-mini-money">
        <div style="clear : both;">
            <p class="alignright" >500,000 VND</p>
        </div>
    </div>
    <div style="color: #C4C4C4;" class="column-transaction-info-mini">
        <div style="clear : both;">
            <p class="alignleft" ><i class="fas fa-user-tie"></i> Đối tượng chịu phí</p>
        </div>
    </div>
    <div style="color: #C4C4C4;" class="column-transaction-info-mini">
        <div style="clear : both; ">
            <div class="alignleft">
                <label class="radio-inline">
                    <input type="radio" name="optradio" checked >&emsp;Người chuyển
                  </label>
            </div>
            <div class="alignright">
                <label class="radio-inline">
                    <input type="radio" name="optradio">&emsp;Người nhận
                </label>
            </div>
              
        </div>
    </div>
    <div style="color: #C4C4C4;" class="column-transaction-info-mini">
        <div style="clear : both;">
            <p class="alignleft" style = "color : #44A7DA; font-weight : bold"><i class="fas fa-clipboard"></i> Nội dung giao dịch</p>
            <div class="alignright">
                <label class="radio-inline" style = "position: relative; top:-10px">
                <input type="radio" name="gender" value="male" checked >&emsp;Chuyển tiền
                </label>
            </div> 
            
        </div>
        
    </div>
   
    </div>
</div>

    <div class = "button-recharge-phone" style="padding-top:0em">
            <input type="button" class="button" value="Tiếp tục" onclick ="TransactionInfo()">
    </div>

            `
}

function TransactionInfo() {
    document.querySelector("#Transaction").innerHTML = `
    <div class="center">
        <div class="name-column">Thông tin tài khoản tiền vay</div>
        <div style="color: #C4C4C4;" class="column-history">
           
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Tên người thụ hưởng</p>
                <p class="alignright-bold">TRAN THI MY HANH</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Tài khoản thụ hưởng</p>
                <p class="alignright-bold">31410003035831</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Đối tượng chịu phí</p>
                <p class="alignright">Người chuyển</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Số tiền</p>
                <p class="alignright-red-bold">500,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Phí</p>
                <p class="alignright">1,100 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">VAT</p>
                <p class="alignright">100VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Ngày giao dịch</p>
                <p class="alignright">05/01/2023 12:46:25</p>
            </div>
        </div>
        <div style="color: #C4C4C4; height:3.5em" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Nội dung</p>
                <p class="alignright">Chuyển tiền</p>
            </div>
        </div>      
        
    </div>

    <div class = "button-accept-recharge-phone">
        <input type="button" class="button" value="Trở lại" onclick ="Transaction()">
        <input type="button" class="button" value="Xác nhận" onclick ="window.location.href='home.html'">
    </div>
            `
}