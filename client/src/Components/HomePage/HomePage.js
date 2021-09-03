import React from 'react';

function About() {

    return(    
        <div class="pusher">
      <div class="ui inverted vertical masthead center aligned segment">
        <div class="ui text container">
          <h1 class="ui inverted header">Git Hire</h1>
          <h2>Lets Git You Working!</h2>
          <div class="ui huge primary button">
            View our Jobs  <i class= "globe icon"></i>
          </div>
        </div>
      </div>
      <div class="ui vertical stripe segment">
        <div class="ui middle aligned stackable grid container">
          <div class="row">
            <div class="eight wide column">
              <h3 class="ui header">We Help Find a Job for You! </h3>
              <p>We developed this site to help you find work. With Git hire there are no paywalls or other requirements to use our application, just sign in and Git Searching! </p>
              <h3 class="ui header">We Make Applying Easier!</h3>
              <p> We have taken time to create a simple and easy way to search and apply for jobs. </p>
            </div>
            <div class="six wide right floated column">
              <img class="ui fluid image" src="./business-people-group.jpeg"/>
            </div>
          </div>
          <div class="row">
            <div class="center aligned column">
              <a class="ui huge button">Git Started<i class= "chevron circle right icon"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>


    )
}

export default About;