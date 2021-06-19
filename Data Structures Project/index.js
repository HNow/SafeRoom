var animation= bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg' ,
    loop:false,
    autoplay: true,
    path: 'https://raw.githubusercontent.com/HNow/data-for-bodymovin/main/data.json',
    
    }

    )
    /*this javscript document workas to create an animation variable by calling on bodymovin.loadAnimation
    The variable then gets the div with the is "bm" which was defined earlier. It then sets the renderer to SVG and 
    has properties which can be set to boolean values such as loop and autoplay. The final line of the code points to
    the JSON data which is hosted online through a github repository  */