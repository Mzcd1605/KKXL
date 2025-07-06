// Thay đổi nội dung búc thư ở đây
var letterContent =" Chúc Mừng Sinh Nhật Đại Ka Của Bin 
Hôm nay là một ngày vô cùng quan trọng mà bin khờ lại quơn mất ước gì giờ có cỗ máy thời gian là bin quay lại thời gian úp mặt zô gối kỉm điểm lại bản thân mất thui.Chúc đại ka sinh nhật zui zẻ nhá.Mong cho sức khỏe má đại ka hồi phục nhanh chóng để có thể quay lại bình thường .Năm sau cũng là một năm quan trọng với đại ka chúc đại ka năm sau sẽ đạt được điểm số cao đạt được trường mình mong mún nhó.Hem có tự ti nữa và ngủ sớm, ăn đúng bữa để tránh kiệt sức và đau dạ dày sức khỏe cải thiện hơn.
Bin khờ hết văn òi
ĐẠI KA ĐỪNG BÙN BIN NHÁ BIN XIN LŨI NHÌU Ạ
KÍ TÊN
BIN KHỜ QUÁ KHỜ

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})