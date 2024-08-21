<template >
    <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
    <div id = "project_container">
        <div style="width: fit-content;">
            <img style="width: 175px; height: 100%; background-size: cover;" :src="require('../assets/images/' + projectLogo)">
        </div>
        <div style="color: whitesmoke; margin-left: 20px;">
            <h1>{{ projectName }}</h1>
            <h4>{{ projectDescription }}</h4>
            <h5>Technologies: {{ projectTechnology }}</h5>
            <a :href="projectLink">Link to project</a>
        </div>
    </div>
    
</template>

<style>
#project_container {
    border-style: dashed;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    margin-top: 20px;
}
</style>

<script>
export default {
    props: ["projectLogo", "projectName", "projectDescription", "projectTechnology", "projectLink"],
    setup(props) {
        console.log(props.projectLogo);
    }
}
</script>