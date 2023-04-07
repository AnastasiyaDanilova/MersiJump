const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")
const count = document.querySelector(".count")
const coin = document.querySelector("#coin")

let countValue = parseInt(count.value)

document.addEventListener("keydown", function(event) {
  setTimeout(() => {
    countMore()
  }, 150);
  jump();

});

function jump () {
  if (dino.classList != "jump") {
    dino.classList.add("jump")
  }
  setTimeout( function() {
    dino.classList.remove("jump")
  }, 300)
};

let isAlive = setInterval ( function () {
  let dinoTop = parseInt(dino.getBoundingClientRect().top)
  let dinoleft = parseInt(dino.getBoundingClientRect().left)
  let dinoRight = parseInt(dino.getBoundingClientRect().right)

  let cactusLeft = parseInt(cactus.getBoundingClientRect().left)

  if (cactusLeft < dinoRight  && cactusLeft > dinoleft && dinoTop >=500 ) {
    alert("GAME OVER!!")
    count.value = 0
  }

  
}, 10)

function countMore () {
  let dinoTop = parseInt(dino.getBoundingClientRect().top)
  let dinoleft = parseInt(dino.getBoundingClientRect().left)
  let dinoRight = parseInt(dino.getBoundingClientRect().right)

  let coinLeft = parseInt(coin.getBoundingClientRect().left)

  if (coinLeft < dinoRight  && coinLeft > dinoleft ) {
    countValue = countValue+1
    console.log("ye z b xt")
  }
  count.value = countValue
}

// коряво работает счетчик 