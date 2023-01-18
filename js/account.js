
window.onload = Account();
function Account() {
    document.querySelector("#Account").innerHTML = `
    <div class = "center">
        <div class="account" onclick="AccountInfo()">
            <p><i class="fa fa-info-circle"></i>&emsp;&emsp;Truy vấn thông tin tài khoản&emsp;&emsp;</p>
            <i class="fa fa-arrow-right"></i>
        </div>  
    </div>

    <div class = "center">
        <div class="account" onclick="HistoryTransaction()">
            <p><i class='fas fa-history'></i>&emsp;&emsp;Lịch sử giao dịch&emsp;&emsp;</p>
            <i class="fa fa-arrow-right"></i>
        </div>  
    </div>
    
            `
}

function AccountInfo() {
    document.querySelector("#Account").innerHTML = `
    <nav class="tm-nav">
    <ul>
        <li >
            <a onclick = "Account()"><i class='fas fa-arrow-left'></i>Quay lại</a>
        </li>
    </ul>
    </nav>
    <div class = "center">
    <div class="account-info-1" >
        <p><i class="fa fa-info-circle"></i>&emsp;&emsp;Tài khoản thanh toán&emsp;&emsp;<i class="fa fa-arrow-right"></i></p>
    </div>  
    <div class="account-info-2" onclick = "AccountInfoPay()">
        <div>
        <p class="alignleft">Số dư khả dụng</p>
        <p class="alignright-bold">500,000,000 VND</p>
        </div>
    </div> 
</div>
<div class = "center">
    <div class="account-info-1" >
        <p><i class="fa fa-info-circle"></i>&emsp;&emsp;Tài khoản tiết kiệm&emsp;&emsp;<i class="fa fa-arrow-right"></i></p>
    </div>  
    <div class="account-info-2" onclick = "AccountInfoSaving()">
        <div">
        <p class="alignleft">Số dư khả dụng</p>
        <p class="alignright-bold">500,000,000 VND</p>
        </div>
    </div> 
</div>
<div class = "center">
    <div class="account-info-1">
        <p><i class="fa fa-info-circle"></i>&emsp;&emsp;Tài khoản tiền vay&emsp;&emsp;<i class="fa fa-arrow-right"></i></p>
    </div>  
    <div class="account-info-2" onclick = "AccountInfoLoan()">
        <div>
        <p class="alignleft">Số dư khả dụng</p>
        <p class="alignright-bold">50,000,000 VND</p>
        </div>
    </div> 
</div>`
}
function HistoryTransaction() {
    document.querySelector("#Account").innerHTML = `
    <nav class="tm-nav">
    <ul>
        <li >
            <a onclick = "Account()"><i class='fas fa-arrow-left'></i>Quay lại</a>
        </li>
    </ul>
    </nav>
    <div class="center">
        <div class="name-column-history">Lịch sử giao dịch</div>
        <div style="color: #C4C4C4;" class="column-history">
           
            <div class="center">
                
                <input type="email" placeholder=" Search..." class="column-history-search-text" required="required">
                
                <!-- <div style="color: #C4C4C4;" class="column-history-search">
                    
                </div> -->
  
            </div>
        <div style="color: #C4C4C4; " class="column-history-info">
            <div style="clear : both;">
                <p class="alignleft"></p>
                <p class="alignright">07:33:22 20/08/2023</p>
            </div>
            <div style="clear : both; ">
                <p class="alignleft">Chuyển khoản cho</p>
                <p class="alignright-bold">18110000028436</p>
            </div>
            <div style="clear : both;">
                <p class="alignleft">Số tiền</p>
                <p class="alignright-red">20,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-history-info">
            <div style="clear : both;">
                <p class="alignleft"></p>
                <p class="alignright">10:33:22 20/08/2023</p>
            </div>
            <div style="clear : both;">
                <p class="alignleft">Chuyển khoản cho</p>
                <p class="alignright-bold">18110000028436</p>
            </div>
            <div style="clear : both;">
                <p class="alignleft">Số tiền</p>
                <p class="alignright-red">20,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-history-info">
            <div style="clear : both;">
                <p class="alignleft"></p>
                <p class="alignright">17:33:12 20/08/2023</p>
            </div>
            <div style="clear : both;">
                <p class="alignleft">Chuyển khoản cho</p>
                <p class="alignright-bold">18110000028436</p>
            </div>
            <div style="clear : both;">
                <p class="alignleft">Số tiền</p>
                <p class="alignright-red">20,000 VND</p>
            </div>
        </div>

        
        </div>
        
    </div>
    `
}

function AccountInfoPay() {
    document.querySelector("#Account").innerHTML = `
    <nav class="tm-nav">
        <ul>
            <li class="active">
                <a onclick = "AccountInfoPay()"><i class='fab fa-amazon-pay'></i></span> Tài khoản thanh toán</a>
            </li>
            <li >
                <a onclick = "AccountInfoSaving()"><i class='fas fa-piggy-bank'></i></span>Tài khoản tiết kiệm</a>
            </li>
            <li>
                <a onclick = "AccountInfoLoan()"><i class='fas fa-hand-holding-usd'></i>Tài khoản tiền vay</a>
            </li>
            <li >
                <a onclick = "AccountInfo()"><i class='fas fa-arrow-left'></i>Quay lại</a>
            </li>
        </ul>
    </nav>
    <div class="center">
        <div class="name-column-account">Thông tin tài khoản thanh toán</div>
        <div style="color: #C4C4C4;" class="column-history">
           
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Tên tài khoản</p>
                <p class="alignright">Phùng Thị Mỹ Hạnh</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Số tài khoản</p>
                <p class="alignright-bold">18110000028436</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Số dư hiện tại</p>
                <p class="alignright-red">500,000,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Số dư khả dụng</p>
                <p class="alignright-red">500,000,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Tiền phong tỏa</p>
                <p class="alignright-red">100,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Loại tiền</p>
                <p class="alignright">VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay-cnm">
            <div style="clear : both;">
                <p class="alignleft">Chi nhánh mở</p>
                <p class="alignright">NH TMCP H&P VN - CN QUAN THU DUC - SAI GON</p>
            </div>
        </div>
       
        </div>
        
    </div>
    `
}

function AccountInfoSaving() {
    document.querySelector("#Account").innerHTML = `
    <nav class="tm-nav">
        <ul>
            <li>
                <a onclick = "AccountInfoPay()"><i class='fab fa-amazon-pay'></i></span>Tài khoản thanh toán</a>
            </li>
            <li class="active">
                <a onclick = "AccountInfoSaving()"><i class='fas fa-piggy-bank'></i></span> Tài khoản tiết kiệm</a>
            </li>
            <li>
                <a onclick = "AccountInfoLoan()"><i class='fas fa-hand-holding-usd'></i>Tài khoản tiền vay</a>
            </li>
            <li >
                <a onclick = "AccountInfo()"><i class='fas fa-arrow-left'></i>Quay lại</a>
            </li>
        </ul>
    </nav>
    <div class="center">
        <div class="name-column-account">Thông tin tài khoản tiền vay</div>
        <div style="color: #C4C4C4;" class="column-history">
           
        <div style="color: #C4C4C4;" class="column-account-info-pay-saving">
            <div style="clear : both;">
                <p class="alignleft">Tên tài khoản</p>
                <p class="alignright">Phùng Thị Mỹ Hạnh</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay-saving">
            <div style="clear : both;">
                <p class="alignleft">Số tài khoản</p>
                <p class="alignright-bold">18110000028436</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay-saving">
            <div style="clear : both;">
                <p class="alignleft">Ngày mở</p>
                <p class="alignright">01/01/2023 14:02:33</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay-saving">
            <div style="clear : both;">
                <p class="alignleft">Ngày đáo hạn</p>
                <p class="alignright">04/01/2023 20:02:10</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay-saving">
            <div style="clear : both;">
                <p class="alignleft">Lãi suất</p>
                <p class="alignright-red">3,000,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay-saving">
            <div style="clear : both;">
                <p class="alignleft">Số tiền gốc</p>
                <p class="alignright-red">100,000,000VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay-saving">
            <div style="clear : both;">
                <p class="alignleft">Tiền thực hưởng</p>
                <p class="alignright-red">3,000,000VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay-saving">
            <div style="clear : both;">
                <p class="alignleft">Tiền lãi cuối kì</p>
                <p class="alignright-red">3,000,000VND</p>
            </div>
        </div>
       
       
        </div>
        
    </div>
    `
}

function AccountInfoLoan() {
    document.querySelector("#Account").innerHTML = `
    <nav class="tm-nav">
        <ul>
            <li>
                <a onclick = "AccountInfoPay()"><i class='fab fa-amazon-pay'></i></span>Tài khoản thanh toán</a>
            </li>
            <li>
                <a onclick = "AccountInfoSaving()"><i class='fas fa-piggy-bank'></i></span>Tài khoản tiết kiệm</a>
            </li>
            <li class="active">
                <a onclick = "AccountInfoLoan()"><i class='fas fa-hand-holding-usd'></i> Tài khoản tiền vay</a>
            </li>
            <li >
                <a onclick = "AccountInfo()"><i class='fas fa-arrow-left'></i>Quay lại</a>
            </li>
        </ul>
    </nav>
    <div class="center">
        <div class="name-column-account">Thông tin tài khoản tiết kiệm</div>
        <div style="color: #C4C4C4;" class="column-history">
           
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Mã giao dịch</p>
                <p class="alignright-bold">345892</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Thời gian GD</p>
                <p class="alignright">01/01/2023 13:33:33</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Số tiền GD</p>
                <p class="alignright-red">300,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay-loan-1">
            <div style="clear : both;">
                <p class="alignleft">Tài khoản ghi </p>
                <p class="alignright">01/01/2023 14:02:33</p>
            </div>
            <div style="clear : both;">
                <p class="alignleft">nợ/ghi có</p>
                <p class="alignright"></p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay-loan-2">
            <div style="clear : both;">
                <p class="center" style="width: 10%; color:#60000;">Mô tả</p>
            </div>
        </div>
       
       
        </div>
        
    </div>
    `
}