import { useState } from "react";


export default function Post(props){
    const[like, setLike] = useState(0)

    function tapLike(){
        setLike(like + 1)
    }

    return (
        <div class="posts-section mt-4 mb-2">
            <div class="d-flex justify-content-between align-items-center">
              <div class="p-3 d-flex align-items-center user-profile">
                <img src={props.user} alt="" class="img-fluid"/>
                <div class="user-detail">
                  <h4>Lorem</h4>
                  <p>UI/UX Designer</p>
                </div>
              </div>
              <div class="p-3">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>

            <div class="p-3">
              <p class="caption">Lorem ipsum dolor sit</p>
            </div>

            <div>
              <img src={props.image} alt="" class="img-fluid p-md-2" style={{borderRadius:'15px'}}/>
            </div>

            <div class="p-3 d-flex align-items-center stats justify-content-between mt-3">
              <div class="d-flex align-items-center">
                <div class="text-center">
                  <button class="position-relative"><i class="fa-regular fa-thumbs-up like" onClick={tapLike}></i>
                    <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">
                      {like}
                      <span class="visually-hidden">unread messages</span>
                    </span></button>
                </div>
                <div class="text-center">
                  <button><i class="fa-regular fa-comment"></i></button>
                </div>
                <div class="text-center">
                  <button><i class="fa-solid fa-share"></i></button>
                </div>
              </div>
              <div>
                <button><i class="fa-regular fa-bookmark"></i></button>
              </div>
            </div>

            <div class="d-flex justify-content-center p-3">
              <div class="comment d-flex justify-content-between align-items-center">
                <div>
                  <img src={props.user} alt="" class="img-fluid"/>
                  <input type="text" placeholder="Write a Comment.."/>
                </div>
                <div class="comment-icon">
                  <i class="fa-solid fa-microphone-lines"></i>
                  <i class="fa-regular fa-image"></i>
                </div>
              </div>

            </div>

          </div>
    );
}