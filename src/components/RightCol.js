import People from "./People";
import Events from "./Events";
export default function RightCol(){
    return(
        <div style={{position:'sticky', top:'30px'}}>
            <div class="third-col-first mt-5">
              <div class="text-center p-3" style={{width:'60%'}}>
                <h2>lorem ipsu dolor sit</h2>
                <p>Lorem Ipsum</p>
                <button>View More</button>
              </div>
            </div>

            <People></People>

           <Events></Events>

            

          </div>
    );
}