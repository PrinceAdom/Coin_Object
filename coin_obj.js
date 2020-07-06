let coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random() * 2)
    },
    toString: function() {
        if(this.state == 1){
            return "Heads"
        }else{
            return "Tails"
        }
    },
    toHTML: function() {
        let image = document.createElement('img');
        if(this.state == 1){
            image.src = "./images/head.jpg"
            //image.setAttribute("src", "./images/head.jpg")
        }else{
            image.setAttribute("src", "./images/tail.jpg")
        }
        image.style.width = "30%"
        image.style.height = "auto"
        return image;
    }
};

function display20Flips(){
    for(var i = 0; i < 20; i++){
        if(i == 0){
            var h1 = document.createElement("h1")
            h1.append("20 Coin Flips:")
            document.querySelector("body").appendChild(h1)
        }
        coin.flip()
        document.querySelector("body").append("Flip #" + (i+1) + ": " + (coin.toString()))
        document.querySelector("body").appendChild(document.createElement("br"))
    }
}

function display20Images(){
    for(var j = 0; j < 20; j++){
        coin.flip()
        console.log("coin state: " + coin.state)
        var h1 = document.createElement("h3")
        h1.append("Coin State: " + coin.state + " ==> " + coin.toString())
        document.querySelector("body").appendChild(h1)
        document.querySelector("body").appendChild(coin.toHTML())
        document.querySelector("body").appendChild(document.createElement("br"))
    }
}


//display20Flips()
display20Images()



