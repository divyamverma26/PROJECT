var b = document.getElementsByClassName("thumb");
var c = document.getElementById("main");
var x=document.getElementById("book");
var z=document.getElementById("me");
function change(id) {
    var a=document.getElementById(id);
    c.src=a.src;
    if(id=='i1'){
        x.innerHTML=' "Atomic Habits" by James Clear delves into the power of tiny changes, known as atomic habits, that compound over time. The book also discusses the significance of identity-based habits, where aligning habits with one-s self-image promotes lasting change.';
    }
    else if(id=='i2'){
        x.innerHTML='Ikigai is a Japanese concept that translates to "reason for being" or "purpose in life." It centers around finding fulfillment by aligning one-s passions, talents, mission, and societal needs. By discovering what you love, what you are good at, what the world needs, and what you can be paid for, Ikigai promotes a balanced and purposeful life.';
    }
    else if(id=='i3'){
        x.innerHTML='"The Subtle Art of Not Giving a F*ck" is a bestselling self-help book by Mark Manson. It challenges traditional self-help advice by advocating for a more realistic and nuanced approach to life. Manson argues that we should focus on what truly matters to us and let go of societal pressures and superficial concerns.';
    }
    else if(id=='i4'){
        x.innerHTML='The psychology of money explores the emotional and behavioral aspects of financial decision-making. It delves into how our beliefs, attitudes, biases, and experiences influence our financial choices. Understanding the psychology of money involves recognizing patterns such as risk aversion, loss aversion, and the impact of emotions like fear and greed on investment decisions.';
    }
    else if(id=='i5'){
        c.style.objectFit='';
        x.innerHTML='When it comes to books, the saying "The name of the book is still the second most important thing, starting is first" underscores the significance of a captivating beginning.';
    }
}