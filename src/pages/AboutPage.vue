<template>
    <div id = "main_canvas">
        <div id="about_me_section" style="margin-bottom: 40px; display: flex; color: whitesmoke;">
            <div style="margin-right: 40px;">
                <h1 id="about_me_title" style="text-decoration: underline; text-underline-offset: 10px;">About me</h1>
                <h3 id="about_me_content" style="text-align: justify;">Thank you for visiting my website, it is a pleasure to have you here! I hope you had a great experience exploring my projects, blog posts and experience. 
                    If you are interested in getting in touch, feel free to navigate to <a href="/contacts">contacts</a> to find ways to get in touch with me! 
                </h3>
            </div>

            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; 
            border-style: solid; border-color: whitesmoke; padding: 15px; margin-top: 20px;">
                <h3>Looking for my resume? Click the button below!</h3>
                <button style="color: black;">View resume <i class="fa fa-file"></i></button>
            </div>
        </div>
        <hr>        
        <div style="display: flex; margin-bottom: 40px; margin-top: 40px;">
            <div style="width: 30%; display: flex; flex-direction: column; justify-content: center;">
                <img style="max-width: 100%; max-height: 100%; margin-bottom: 10px;" src="../assets/images/programminglead.png">
                <figcaption style="color: whitesmoke; text-align: center;">My robotics team <a href="https://www.instagram.com/p/CGmsgj0BT9S/?img_index=2" target="_blank">instagram post</a> introducing me as their programming lead in 2021 season.</figcaption>
            </div>

            <div style="width: 70%; display: flex; justify-content: center; align-items: center; text-align: justify; margin-left: 50px;">
                <div>
                    <h2 id="background_title" style="color: whitesmoke; text-decoration: underline; text-underline-offset: 10px;">Background</h2>
                    <h3 id="background_content" style="color: whitesmoke;">I originally came from Hanoi, Vietnam  <span class="fi fi-vn"></span> , but I went to Toronto, Canada <span class="fi fi-ca"></span>  when I was 15 for high school, and I later went to Eindhoven,
                    the Netherlands <span class="fi fi-nl"></span> to pursue a Bachelor degree in Computer Science at Eindhoven University, which I obtained in 2024. 
                    <br><br>
                    My passion for programming started when I picked up Java in my junior year of high school as I aspired to be a core developer for my high school robotics team, and I have been
                    restlessly learning ever since. I am a strong believer that knowledge and experience is not something to be taken for granted, so I strive to keep myself busy and educated
                    through personal projects, internships and part time jobs to strengthen my foothold in the software development industry.
                    </h3>
                </div>
                
            </div>
        </div>
        <hr>

        <div>
        <h2 id="skills_title" style="color: whitesmoke; text-decoration: underline; text-underline-offset: 10px;">Skills</h2>

        <h3 id="skills_content" style="color: whitesmoke;">I have the most experience with <span style="font-weight: bold; color: red;">Java</span>, but I also have working knowledge of <span style="font-weight: bold; color: #5C8BC6;">Python, and C++</span>. 
        I have experience with building full-stack web applications using the <span style="font-weight: bold; color: #42B882;">MEVN (MongoDB, ExpressJS, Vue, NodeJS)</span> tech-stack, how to write parallel 
        computing programs using the <span style="font-weight: bold; color: #78B800;">NVIDIA CUDA C++ framework</span>, and how to build a data pipeline with a visualization dashboard using 
        <span style="color: #00C1CD; font-weight: bold;">Pyspark, Airflow and Python</span>. Some usage of the technology I mentioned can be found in my list of <a href="/projects">personal projects</a>,
        and others can be found in past experiences in my resume. 
        </h3><br>
        </div>
       
    </div>

</template>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/terminal');
@import url('/node_modules/flag-icons/css/flag-icons.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

#main_canvas {
  background-color: #1E1F22;
  height: 100%;
  overflow-y: auto;
  padding: 20px 40px 20px 40px;
  font-family: 'Terminal', sans-serif;
}

</style>