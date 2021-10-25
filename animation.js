
    function menu()
    {   
        var x=0;    //variable to store current menu state

        if(x==0)    //open menu
        {
        document.getElementById("menu").src="pic/menu.png";
        document.getElementByClassName("menu-bttn").style.background="dodgerblue";

        x=1;    //set current menu state
        }

        else if(x==1)   //close menu
        {               
        document.getElementById("menu").src="pic/menu-blue.png";
        document.getElementsByClassName("menu-bttn").style.background="white";

        x=0;    //set current menu state
        }
    }

    function hover()
    {      
        document.getElementById("menu").src="pic/menu-hover.png";
    }

    function unhover()
    {  
        document.getElementById("menu").src="pic/menu-blue.png";
    }

    function hireHover()
    {
        document.getElementById("hire-me").style.width="13vw";
        
    }

    function hireUnhover()
    {
        document.getElementById("hire-me").style.width="12vw";
    }

    function dark(value)
    {
        if(value==1)
        {
            document.getElementById("blue").style.left="2vw";
            document.getElementById("dark").style.display="none";
            document.getElementById("blue").style.display="block";
        }

        else if(value==0)
        {
            document.getElementById("blue").style.display="none";
            document.getElementById("dark").style.display="block";
        }
    }

    /*
    <div class="big-box">
    <pre class="big-text">
Hello,
I am Banhi Bikash Saha
And I am a website designer
    </pre>
    <pre class="small-text">
I am 21 years old and an aspiring young coder.
Currently I am doing my Bachelors in Computer application.
I chose this very course because I always liked technology
and was always thrilled thinking that I can build something 
amazing.I like to learn new things that help me enhance
myself...
    </pre>

    <button type="button" id="hire-me" onmouseover="hireHover()" onmouseleave="hireUnhover()">Hire Me</button>
</div>
<img id="line" src="pic/line.png" alt="line">
<div style="margin-top: 0%;" class="small-box">

    <div class="card">
        <div class="pic-container">       
            <img id="mypic" src="pic/mypic1.png" alt="my pic">
        </div>
        <p class="title">Website Designer</p>
    </div>
</div>*/