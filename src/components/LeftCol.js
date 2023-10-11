export default function LeftCol() {
    return (
        <div style={{position:'sticky', top:'30px'}}>
            <div className="profile-card mt-5">
              <div>
                <img src="img/bannerpic.png" alt="" style={{width: '100%'}} />
              </div>
              <div>
                <img src="img/user.png" alt="" id="profile-photo" />
                <div className="profile-details">
                  <h4>Lorem</h4>
                  <p>UI/UX Designer</p>
                </div>
              </div>
            </div>

            <div className="left-options mt-4">
              <ul>
                <li><a href=""><i className="fa-regular fa-circle-play"></i> Departments</a></li>
                <li><a href=""><i className="fa-solid fa-chalkboard-user"></i> Leave Management</a></li>
                <li><a href=""><i className="fa-solid fa-graduation-cap"></i> Training & Development</a></li>
                <li><a href=""><i className="fa-regular fa-file-lines"></i> Documents</a></li>
                <li><a href=""><i className="fa-solid fa-thumbtack"></i> Circular</a></li>
                <li><a href=""><i className="fa-solid fa-ranking-star"></i> Leader Board </a></li>
                <li><a href=""><i className="fa-solid fa-gear"></i> Settings</a></li>
              </ul>
            </div>

            <div className="discussion-forum">
              <div>
                <h3>Discussion Forum Topics</h3>
              </div>
              <div className="p-2">
                <div className="tags">
                  <p>Work</p>
                </div>
                <div className="tags">
                  <p>Business</p>
                </div>
                <div className="tags">
                  <p>HR</p>
                </div>
                <div className="tags">
                  <p>User Interface</p>
                </div>
                <div className="tags">
                  <p>Digital</p>
                </div>
                <div className="tags">
                  <p>Freelance</p>
                </div>
                <div className="tags">
                  <p>Development</p>
                </div>

              </div>
            </div>
          </div>
    );
}