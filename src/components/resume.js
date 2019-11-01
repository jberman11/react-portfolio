import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Jarret Berman</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Aspiring Full-Stack (MERN) Web Developer with a wealth of experience working on diverse teams in different environments and fields in leadership roles. Able to quickly learn and apply accquired knowledge as well as problem-solve and collaborate to create efficient solutions. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>3605 Steck Ave Apt. 1033, Austin, Tx, 78759</p>
            <h5>Phone</h5>
            <p>(512) 971 - 1259</p>
            <h5>Email</h5>
            <p>jarretberman@gmail.com</p>
            <h5>Web</h5>
            <p>jarretberman.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2010}
              endYear={2012}
              schoolName="Austin Community College"
              schoolDescription="Local Community College where I studied Mathematics."
               />

               <Education
                 startYear={2012}
                 endYear={2016}
                 schoolName="University of North Texas"
                 schoolDescription="4-year University where I Majored in French, and studied Theater, Mathematics, and Computer Science"
                  />
                  <Education
              startYear={2010}
              endYear={2012}
              schoolName="University of Texas at Austin"
              schoolDescription="Completed their Full-Stack Web Development Bootcamp"
               />
                <hr style={{borderTop: '3px solid #e22947'}} />
{/* 
              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} /> */}
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={85}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={45}
                      />
                      <Skills 
                        skill = "MongoDB"
                        progress={25}
                        />
                        <Skills 
                          skill = "MySQL"
                          progress={25}
                          />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
