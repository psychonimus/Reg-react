export default function Story(props){
    return(
        <div class="story d-flex justify-content-center">
                <img src={props.image} alt="" class=""/>
                <div class="story-overlay">
                  <h4>{props.user}</h4>
                </div>
              </div>
    );
}