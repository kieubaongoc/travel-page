var count = false;

function myNameShow() {
    if(count == true)
    {
        count = false;
        var obj = document.querySelector("span.text-slogan");
        obj.innerHTML = "hi, I'm kieubaongoc";
    }
    else
    {
        count = true;
        var obj = document.querySelector("span.text-slogan");
        obj.innerHTML = "Parallax Website";
    }
}

