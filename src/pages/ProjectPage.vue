<template>
    <div id = "main_canvas">
        <h1 style="color: whitesmoke;">Projects</h1>
        <ProjectCard
            projectLogo="splines.png"
            projectName="Spline interpolator"
            projectDescription="A mathematical tool to solve for a bezier or cubic curve that connects an user-input series of points on a 2D plane."
            projectTechnology="Java 14, Gradle, JUnitTest"
            projectLink="https://github.com"
        ></ProjectCard>
        <ProjectCard
            projectLogo="bta.png"
            projectName="Break the Algo website"
            projectDescription="A full-stack website for a student-lead career association in Eindhoven University of Technology."
            projectTechnology="VueJS, ExpressJS, NodeJS, MongoDB"
            projectLink="https://github.com"
        ></ProjectCard>
        
    </div>


</template>

<style scoped>
#main_canvas {
    background-color: #1E1F22;
    height: 100%;
    overflow-y: auto;
    padding: 20px 40px 20px 40px;
    font-family: 'Terminal', sans-serif;
}
</style>

<script>
import ProjectCard from '@/components/ProjectCard.vue';

export default {
    components: {
        ProjectCard,
    }
}


</script>
