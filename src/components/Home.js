import LeftCol from './LeftCol'
import MidFirst from './MidFirst'
import Stories from './Stories'
import Post from './Post'
import RightCol from './RightCol'
import BottomNav from './BottomNav'
export default function Home() {
    return (
        <div>
            <section>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3 d-none d-lg-block">
                            <LeftCol></LeftCol>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <MidFirst></MidFirst>
                            <Stories></Stories>
                            <Post image="img/meet1.jpg" user='img/user.png'></Post>
                            <Post image="img/meet2.jpg" user='img/user2.png'></Post>
                            <Post image="img/group.png" user='img/user3.png'></Post>
                            <Post image="img/bannerpic.png" user='img/user4.png'></Post>
                        </div>
                        <div className='col-3 d-none d-lg-block'>
                            <RightCol></RightCol>
                        </div>
                    </div>
                </div>
            </section>

            <BottomNav></BottomNav>
        </div>
    )
}