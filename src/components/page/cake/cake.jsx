import React from "react";
import VideoPlayer from 'react-video-js-player';
import video from "../Media/cakev.mp4"
import "./cake.css"
function Cake() {

    const videoScr = video;
  return (
    <div className="cake">
      <div></div>
      <div className="cakeBottom">
          <VideoPlayer />
                   

        <p>
          <h4>INGREDIENTS:</h4> <br/>
                    1 cup white sugar<br/>
                    ½ cup butter<br/>
                    2 eggs<br/>
                    2 teaspoons vanilla extract<br/>
                    1 ½ cups all-purpose flour<br/>
                    1 ¾ teaspoons baking powder<br/>
                    ½ cup milk<br/>
                    <h4>Steps:</h4> <br/>
                    Step 1: Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x9 inch pan or line a muffin pan with paper liners.<br/>
                    <br/>
                    Step 2: In a medium bowl, cream together the sugar and butter. Beat in the eggs, one at a time, then stir in the vanilla. Combine flour and baking powder, add to the creamed mixture and mix well. Finally stir in the milk until batter is smooth. Pour or spoon batter into the prepared pan.
                    <br/><br/>
                    Step 3: Bake for 30 to 40 minutes in the preheated oven. For cupcakes, bake 20 to 25 minutes. Cake is done when it springs back to the touch.
                    
                    Hello
        </p>
      </div>
    </div>
  );
}

export default Cake;