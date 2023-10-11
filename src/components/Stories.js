import Story from "./Story";
export default function Stories(){
    return(
        <div class="stories-section mt-3">
            <div class="d-flex stories-container" >
              <div class="story">
                <img src="img/story1.png" alt="" class=""/>
                <div class="story-overlay">
                  <i class="fa-solid fa-square-plus" style={{color:'#FFFFFF'}}></i>
                  <h4>Add Story</h4>
                </div>
              </div>
              <Story user='Jessica' image='img/story1.png'></Story>
              <Story user='Dave' image='img/story2.png'></Story>
              <Story user='Dave' image='img/meet1.jpg'></Story>
              <Story user='Batista' image='img/story3.png'></Story>
           
              <Story user='Batista' image='img/story3.png'></Story>
              <Story user='Brock' image='img/story4.png'></Story>

              
            </div>
          </div>
    );
}