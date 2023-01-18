window.onload = InterestVND();
function InterestVND(){
    document.querySelector("#Utilities").innerHTML =`
    <nav class="tm-nav">
    <ul>
        <li class="active">
            <a onclick = "InterestVND()"><span class="tm-nav-deco"></span> Lãi xuất tiền gửi VND</a>
        </li>
        <li>
            <a onclick = "InterestDollars()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi Dollars</a>
        </li>
        <li>
            <a onclick = "FindMap()"><span class="tm-nav-deco"></span>Tìm kiếm ATM</a>
        </li>
        <li>
            <a onclick = "ExchangeRate()"><span class="tm-nav-deco"></span>Tỷ giá ngoại lệ</a>
        </li>
        <li>
            <a onclick = "ExchangeInfo()"><span class="tm-nav-deco"></span>Trao đổi thông tin</a>
        </li>
    </ul>
</nav>
            <div class="center-utilities">
            <div class="grid-container">
                <div class="grid-item-name">LOẠI TIỀN GỬI</div>
                <div class="grid-item-name">LĨNH LÃI CUỐI KỲ(%/NĂM)</div>
                <div class="grid-item-name">LĨNH LÃI HÀNG NĂM(%/NĂM)</div>  
                <div class="grid-item-name">LĨNH LÃI HÀNG 6 THÁNG(%/NĂM)</div>
                <div class="grid-item-name">LĨNH LÃI HÀNG QUÝ(%/NĂM)</div>
                <div class="grid-item-name">LĨNH LÃI HÀNG THÁNG(%/NĂM)</div>  
    
                <div class="grid-item">Không kỳ hạn</div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>  
                <div class="grid-item"></div>
                <div class="grid-item">0,80</div>
                <div class="grid-item"></div>  
    
                <div class="grid-item-1">Có kỳ hạn</div>
                <div class="grid-item-1"></div>
                <div class="grid-item-1"></div>  
                <div class="grid-item-1"></div>
                <div class="grid-item-1"></div>
                <div class="grid-item-1"></div>  
    
                <div class="grid-item">1-5 tháng</div>
                <div class="grid-item">5,00</div>
                <div class="grid-item"></div>  
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item">4,94</div>  
    
                <div class="grid-item-1">6 tháng</div>
                <div class="grid-item-1">7,10</div>
                <div class="grid-item-1"></div>  
                <div class="grid-item-1"></div>
                <div class="grid-item-1">6,96</div>
                <div class="grid-item-1">6,87</div>  
    
                <div class="grid-item">12 tháng</div>
                <div class="grid-item">7,50</div>
                <div class="grid-item"></div>  
                <div class="grid-item">7,06</div>
                <div class="grid-item">6,98</div>
                <div class="grid-item">6,93</div>  
    
                <div class="grid-item-1">24 tháng</div>
                <div class="grid-item-1">7,55</div>
                <div class="grid-item-1">7,00</div>  
                <div class="grid-item-1">6,88</div>
                <div class="grid-item-1">6,81</div>
                <div class="grid-item-1">6,77</div>  
    
                <div class="grid-item">36 tháng</div>
                <div class="grid-item">7,55</div>
                <div class="grid-item">7,01</div>  
                <div class="grid-item">6,89</div>
                <div class="grid-item">6,82</div>
                <div class="grid-item">6,78</div>  
            </div>
        </div>
       

        `
}

function InterestDollars(){
    document.querySelector("#Utilities").innerHTML =`
    <nav class="tm-nav">
    <ul>
        <li>
            <a onclick = "InterestVND()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi VND</a>
        </li>
        <li class="active">
            <a onclick = "InterestDollars()"><span class="tm-nav-deco"></span> Lãi xuất tiền gửi Dollars</a>
        </li>
        <li>
            <a onclick = "FindMap()"><span class="tm-nav-deco"></span>Tìm kiếm ATM</a>
        </li>
        <li>
            <a onclick = "ExchangeRate()"><span class="tm-nav-deco"></span>Tỷ giá ngoại lệ</a>
        </li>
        <li>
            <a onclick = "ExchangeInfo()"><span class="tm-nav-deco"></span>Trao đổi thông tin</a>
        </li>
    </ul>
</nav>
            <div class="center-utilities">
            <div class="grid-container">
                <div class="grid-item-name">LOẠI TIỀN GỬI</div>
                <div class="grid-item-name">LĨNH LÃI CUỐI KỲ(%/NĂM)</div>
                <div class="grid-item-name">LĨNH LÃI HÀNG NĂM(%/NĂM)</div>  
                <div class="grid-item-name">LĨNH LÃI HÀNG 6 THÁNG(%/NĂM)</div>
                <div class="grid-item-name">LĨNH LÃI HÀNG QUÝ(%/NĂM)</div>
                <div class="grid-item-name">LĨNH LÃI HÀNG THÁNG(%/NĂM)</div>  
    
                <div class="grid-item">Không kỳ hạn</div>
                <div class="grid-item">0,5</div>
                <div class="grid-item">02,5</div>  
                <div class="grid-item">1</div>
                <div class="grid-item">0,80</div>
                <div class="grid-item"></div>  
    
                <div class="grid-item-1">Có kỳ hạn</div>
                <div class="grid-item-1"></div>
                <div class="grid-item-1"></div>  
                <div class="grid-item-1"></div>
                <div class="grid-item-1"></div>
                <div class="grid-item-1"></div>  
    
                <div class="grid-item">1-5 tháng</div>
                <div class="grid-item">5,00</div>
                <div class="grid-item"></div>  
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item">4,94</div>  
    
                <div class="grid-item-1">6 tháng</div>
                <div class="grid-item-1">1,10</div>
                <div class="grid-item-1"></div>  
                <div class="grid-item-1"></div>
                <div class="grid-item-1">6,96</div>
                <div class="grid-item-1">6,87</div>  
    
                <div class="grid-item">12 tháng</div>
                <div class="grid-item">7,50</div>
                <div class="grid-item"></div>  
                <div class="grid-item">7,06</div>
                <div class="grid-item">6,98</div>
                <div class="grid-item">6,93</div>  
    
                <div class="grid-item-1">24 tháng</div>
                <div class="grid-item-1">7,55</div>
                <div class="grid-item-1">7,00</div>  
                <div class="grid-item-1">6,88</div>
                <div class="grid-item-1">6,81</div>
                <div class="grid-item-1">6,77</div>  
    
                <div class="grid-item">36 tháng</div>
                <div class="grid-item">7,55</div>
                <div class="grid-item">7,01</div>  
                <div class="grid-item">6,89</div>
                <div class="grid-item">6,82</div>
                <div class="grid-item">6,78</div>  
            </div>
        </div>
       

        `
}

function FindMap(){
    document.querySelector("#Utilities").innerHTML =`
    <nav class="tm-nav">
    <ul>
        <li>
            <a onclick = "InterestVND()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi VND</a>
        </li>
        <li>
            <a onclick = "InterestDollars()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi Dollars</a>
        </li>
        <li  class="active">
            <a onclick = "FindMap()"><span class="tm-nav-deco"></span> Tìm kiếm ATM</a>
        </li>
        <li>
            <a onclick = "ExchangeRate()"><span class="tm-nav-deco"></span>Tỷ giá ngoại lệ</a>
        </li>
        <li>
            <a onclick = "ExchangeInfo()"><span class="tm-nav-deco"></span>Trao đổi thông tin</a>
        </li>
    </ul>
</nav>
    <div class="center">
   <iframe class = "width-google-map"src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15673.40400524896!2d106.7824431470384!3d10.860885299316301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBIDV!5e0!3m2!1sen!2s!4v1577457235576!5m2!1sen!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>

  </div>
        `
}

function ExchangeRate(){
    document.querySelector("#Utilities").innerHTML =`
    <nav class="tm-nav">
    <ul>
        <li>
            <a onclick = "InterestVND()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi VND</a>
        </li>
        <li>
            <a onclick = "InterestDollars()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi Dollars</a>
        </li>
        <li>
            <a onclick = "FindMap()"><span class="tm-nav-deco"></span>Tìm kiếm ATM</a>
        </li>
        <li  class="active">
            <a onclick = "ExchangeRate()"><span class="tm-nav-deco"></span> Tỷ giá ngoại lệ</a>
        </li>
        <li>
            <a onclick = "ExchangeInfo()"><span class="tm-nav-deco"></span>Trao đổi thông tin</a>
        </li>
    </ul>
</nav>
    <div class="center-utilities">
    <div class="grid-container-rechange-rate" >
        <div class="grid-item-rechange-rate-header" style="border-left: 0.2em solid #44A7DA;"></div>
        <div class="grid-item-rechange-rate-header">Mã NT</div>
        <div class="grid-item-rechange-rate-header">Mua CK</div>  
        <div class="grid-item-rechange-rate-header">Mua MT</div>
        <div class="grid-item-rechange-rate-header" style="border-right: 0.2em solid #44A7DA;">Bán</div>


        <div class="grid-item-rechange-rate" style="border-left: 0.2em solid #44A7DA;">
            <img class = "img-utilities" src="images/countries/American.jpg" alt="">
        </div>
        <div class="grid-item-rechange-rate">USD<sub>1</sub></div>
        <div class="grid-item-rechange-rate">23,140.00</div>  
        <div class="grid-item-rechange-rate">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-right: 0.2em solid #44A7DA;">23,260.00</div>

        <div class="grid-item-rechange-rate" style="border-left: 0.2em solid #44A7DA;">
            <img class = "img-utilities" src="images/countries/American.jpg" alt="">
        </div>
        <div class="grid-item-rechange-rate">USD<sub>2</sub></div>
        <div class="grid-item-rechange-rate">23,140.00</div>  
        <div class="grid-item-rechange-rate">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-right: 0.2em solid #44A7DA;">23,260.00</div> 

        <div class="grid-item-rechange-rate" style="border-left: 0.2em solid #44A7DA;">
            <img class = "img-utilities" src="images/countries/American.jpg" alt="">
        </div>
        <div class="grid-item-rechange-rate">USD<sub>3</sub></div>
        <div class="grid-item-rechange-rate">23,140.00</div>  
        <div class="grid-item-rechange-rate">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-right: 0.2em solid #44A7DA;">23,260.00</div> 
        
        <div class="grid-item-rechange-rate" style="border-left: 0.2em solid #44A7DA;">
            <img class = "img-utilities" src="images/countries/Kingdom.png" alt="">
        </div>
        <div class="grid-item-rechange-rate">GBP</div>
        <div class="grid-item-rechange-rate">23,140.00</div>  
        <div class="grid-item-rechange-rate">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-right: 0.2em solid #44A7DA;">23,260.00</div> 
        
        <div class="grid-item-rechange-rate" style="border-left: 0.2em solid #44A7DA;">
            <img class = "img-utilities" src="images/countries/Hong_Kong.png" alt="">
        </div>
        <div class="grid-item-rechange-rate">HKD</div>
        <div class="grid-item-rechange-rate">23,140.00</div>  
        <div class="grid-item-rechange-rate">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-right: 0.2em solid #44A7DA;">23,260.00</div>
        
        <div class="grid-item-rechange-rate" style="border-left: 0.2em solid #44A7DA;">
            <img class = "img-utilities" src="images/countries/Japan.png" alt="">
        </div>
        <div class="grid-item-rechange-rate">JPY</div>
        <div class="grid-item-rechange-rate">23,140.00</div>  
        <div class="grid-item-rechange-rate">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-right: 0.2em solid #44A7DA;">23,260.00</div>

        <div class="grid-item-rechange-rate" style="border-left: 0.2em solid #44A7DA;">
            <img class = "img-utilities" src="images/countries/Formosa.jpg" alt="">
        </div>
        <div class="grid-item-rechange-rate">THB</div>
        <div class="grid-item-rechange-rate">23,140.00</div>  
        <div class="grid-item-rechange-rate">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-right: 0.2em solid #44A7DA;">23,260.00</div> 
        
        <div class="grid-item-rechange-rate" style="border-left: 0.2em solid #44A7DA;">
            <img class = "img-utilities" src="images/countries/Australia.png" alt="">
        </div>
        <div class="grid-item-rechange-rate">AUD</div>
        <div class="grid-item-rechange-rate">23,140.00</div>  
        <div class="grid-item-rechange-rate">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-right: 0.2em solid #44A7DA;">23,260.00</div>

        
        <div class="grid-item-rechange-rate" style="border-left: 0.2em solid #44A7DA;border-bottom: 0.2em solid #44A7DA;">
            <img class = "img-utilities" src="images/countries/Canada.jpg" alt="">
        </div>
        <div class="grid-item-rechange-rate" style="border-bottom: 0.2em solid #44A7DA;">CAD</div>
        <div class="grid-item-rechange-rate" style="border-bottom: 0.2em solid #44A7DA;">23,140.00</div>  
        <div class="grid-item-rechange-rate" style="border-bottom: 0.2em solid #44A7DA;">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-bottom: 0.2em solid #44A7DA; border-right: 0.2em solid #44A7DA;">23,260.00</div>
        
    </div>
</div>
       

        `
}

function ExchangeInfo(){
    document.querySelector("#Utilities").innerHTML =`
    <nav class="tm-nav">
    <ul>
        <li>
            <a onclick = "InterestVND()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi VND</a>
        </li>
        <li>
            <a onclick = "InterestDollars()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi Dollars</a>
        </li>
        <li>
            <a onclick = "FindMap()"><span class="tm-nav-deco"></span>Tìm kiếm ATM</a>
        </li>
        <li>
            <a onclick = "ExchangeRate()"><span class="tm-nav-deco"></span>Tỷ giá ngoại lệ</a>
        </li>
        <li  class="active">
            <a onclick = "ExchangeInfo()"><span class="tm-nav-deco"></span> Trao đổi thông tin</a>
        </li>
    </ul>
</nav>
    <div class = "center">
        <div class="exchange-info-1"  >
            <p>Hotline: 19001000</p>
        </div>  
        <div clas="exchange-info-2"></div>
        <textarea class="exchange-info-3" name="text" cols="40" rows="2" placeholder="Nhập văn bản"></textarea> 
        
       
        
    </div>
    <div class = "button-utilities">
        <input type="button" class="button" value="Tiếp tục" onclick ="TransactionInfo()">
    </div>
        `
}