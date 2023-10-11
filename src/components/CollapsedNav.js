export default function CollapsedNav(){
    return (
        <section className="collapsed-nav">
    <div className="nav-panel d-flex d-lg-none justify-content-between">
      <div className="p-2">
        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="fa-solid fa-bars"></i></button>

        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
          id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
          <div className="offcanvas-header">
            
            <a href="index.html"><img src="img/logo.png" alt="" /></a>

            <div>
              <i className="fa-solid fa-bell"></i>
              <i className="fa-regular fa-user"></i>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
          </div>
          <div className="offcanvas-body">
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
        </div>


      </div>
      <div className="p-2">
        <a href="index.html"><img src="img/logo.png" alt="" /></a>
      </div>
      <div className="p-2">
        <i className="fa-solid fa-comment-dots me-2"></i>
        <i className="fa-solid fa-bell me-2"></i>
      </div>
    </div>
  </section>
    );
}