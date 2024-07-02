const button = document.getElementById('Button').addEventListener('click', function(){
    const colors = [
        'linear-gradient(to right, #f3904f, #3b4371)',
        'linear-gradient(to right, #ee0979, #ff6a00)',
        'linear-gradient(to right, #a770EF, #cf8bf3, #fdb99b)',
        'linear-gradient(to right, #00c3ff , #ffff1c)',
        'linear-gradient(to right, #fffc00, #ffffff)',
        'linear-gradient(to right, #093028, #237a57)',
        'linear-gradient(to right, #ffffff, #191654)',
        'linear-gradient(to right,#4568dc , #b06ab3)',
    ];

    const randomgradient = Math.floor(Math.random() * colors.length);
    var gradientcolor = document.body.style.background =colors[randomgradient];
    document.getElementById("colortext").innerHTML="Current background Color is " + gradientcolor;
});
