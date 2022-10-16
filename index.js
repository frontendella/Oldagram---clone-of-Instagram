const posts = [
    {
        name: "Daniella Haynes",
        username: "olivia2331",
        location: "Zundert, Netherlands",
        avatar: "images/profile-1.jpg",
        post: "images/ocean.jpg",
        comment: "ocean always leaves a space for thought",
        likes: 21
    },
    {
        name: "Samia Wilson",
        username: "elisb9893",
        location: "Ornans, France",
        avatar: "images/profile-2.jpg",
        post: "images/balance.jpg",
        comment: "it's important to find a balance",
        likes: 125
    },
    {
        name: "Brandon Bolton",
        username: "mikh8736",
        location: "Paris, France",
        avatar: "images/profile-3.jpg",
        post: "images/work.jpg",
        comment: "are you working today?",
        likes: 151
    }
]

const post = document.getElementById("main")



let html = ''
for (let i = 0; i < posts.length; i++) {
    html += `
<section class="each_post">
    <div class="profile">
        <img src="${posts[i].avatar}" alt="avatar_image" class="profile-image">
        <p class="profile_data name">${posts[i].name}</p>
        <span class="country">${posts[i].location}</span>
    </div>
        <img src="${posts[i].post}" alt="First post" class="post_image">
    <div class="icons">
        <img src="images/like.svg" alt="like_button"" class="icon heart">
        <img src="images/icon-comment.png" alt="share_button" class="icon">
        <img src="images/icon-dm.png" alt="comment_button" class="icon">
    </div>
        <p class="likes" id="like">${posts[i].likes} likes</p>
        <p class="comment"><span class="name">${posts[i].username}</span> ${posts[i].comment}</p>
</section>`
}

post.innerHTML = html




const likeBtn = document.getElementsByClassName("heart")
// likeBtn.addEventListener('click', () => {
//     let currentLikes = document.getElementById("like")
//     plusLike = Number(currentLikes.innerText.match(/\d+/g)) + 1
//     currentLikes.textContent = `${plusLike} likes`
// })

// for (let i = 0; i < likeBtn.length; i++ ) {
//     likeBtn[i].addEventListener("click", () => {
//         let currentLikes = document.getElementById("like")
//         likesUpdated()
//     })
// }

// function likesUpdated(el, index){
//     el.innerHTML = `${posts[index].likes} likes`
// }