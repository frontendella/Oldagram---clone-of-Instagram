const posts = [
    {
        name: "Daniella Haynes",
        username: "olivia2331",
        location: "Zundert, Netherlands",
        avatar: "images/profile-1.jpg",
        post: "images/ocean.jpg",
        comment: "ocean always leaves a space for thought",
        likes: 21,
        liked: false
    },
    {
        name: "Samia Wilson",
        username: "elisb9893",
        location: "Ornans, France",
        avatar: "images/profile-2.jpg",
        post: "images/balance.jpg",
        comment: "it's important to find a balance",
        likes: 125,
        liked: false
    },
    {
        name: "Brandon Bolton",
        username: "mikh8736",
        location: "Paris, France",
        avatar: "images/profile-3.jpg",
        post: "images/work.jpg",
        comment: "are you working today?",
        likes: 151,
        liked: false
    }
]

const post = document.getElementById("main")
let heart = "images/icon-heart.png"

let html = ''
for (let i = 0; i < posts.length; i++) {
    html += `
<section class="each_post">
    <div class="profile">
        <img src="${posts[i].avatar}" alt="avatar_image" class="profile-image">
        <p class="profile_data name">${posts[i].name}</p>
        <span class="country">${posts[i].location}</span>
    </div>
    <div>
    <svg class="heart-icon">
        <use xlink:href="#icon-heart"></use>
    </svg>
        <img src="${posts[i].post}" alt="First post" class="post_image">
    </div> 
    <div class="icons">
        <img src = "${heart}" alt="like_button"" class="icon heart">
        <img src="images/icon-comment.png" alt="share_button" class="icon">
        <img src="images/icon-dm.png" alt="comment_button" class="icon">
    </div>
        <p class="likes" id="like">${posts[i].likes} likes</p>
        <p class="comment"><span class="name">${posts[i].username}</span> ${posts[i].comment}</p>
</section>`
}

post.innerHTML = html


// To "like" and "unlike" the post
let numberOfLikes = document.getElementsByClassName("likes")
let userPost = document.getElementsByClassName("post_image")
let likeBtn = document.getElementsByClassName("heart")
const heartIcon = document.getElementsByClassName('heart-icon')
let likeIcon = "images/like.png"


for (let i = 0; i < userPost.length; i++) {
    likeBtn[i].addEventListener("click", () => {
        if (posts[i].liked == false) {
            toLike(i)
            updateLikes(numberOfLikes[i], i)
        } else if (posts[i].liked == true) {
            removeLike(i)
            updateLikes(numberOfLikes[i], i)
        }
    })
}

for (let i = 0; i < userPost.length; i++) {
    userPost[i].addEventListener("dblclick", () => {
        if (posts[i].liked == false) {
            toLike(i)
            updateLikes(numberOfLikes[i], i)
            doubleClicked(i)
        }
    })
}

const toLike = (i) => {
    posts[i].liked = true
    posts[i].likes += 1
    likeBtn[i].src = likeIcon
}

const removeLike = (i) => {
    posts[i].liked = false
    posts[i].likes -= 1
    likeBtn[i].src = heart
}
function updateLikes(el, index) {
    el.innerHTML = `${posts[index].likes} likes`
}

function doubleClicked(i) {
    heartIcon[i].classList.add('like');
    setTimeout(() => {
        heartIcon[i].classList.remove('like')
    }, 1200)
}