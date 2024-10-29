<script setup>
</script>

<template>
    <div id="viewport">
        <!-- Sidebar -->
        <div id="sidebar">
            <ul class="nav">
                <li>
                    <a href="#">
                        <i class="zmdi zmdi-view-dashboard"></i> Dashboard
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="zmdi zmdi-link"></i> Registro de Serviços
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="zmdi zmdi-widgets"></i> Gestão de Serviços
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="zmdi zmdi-calendar"></i> Operações Técnicas
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500');

body {
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
}

#viewport {
    padding-left: 250px;
    transition: all 0.5s ease;
}

#sidebar {
    z-index: 1000;
    position: fixed;
    left: 250px;
    width: 250px;
    height: 100%;
    margin-left: -250px;
    overflow-y: auto;
    background: #37474F;
    transition: all 0.5s ease;
}

#sidebar header {
    background-color: #263238;
    font-size: 20px;
    line-height: 52px;
    text-align: center;
}

#sidebar header a {
    color: #fff;
    display: block;
    text-decoration: none;
}

#sidebar header a:hover {
    color: #fff;
}

#sidebar .nav a {
    border-bottom: 1px solid #455A64;
    color: #CFD8DC;
    font-size: 18px;
    padding: 16px 24px;
    display: flex;
    align-items: center;
}

#sidebar .nav a:hover {
    color: #ECEFF1;
}

#sidebar .nav a i {
    margin-right: 16px;
}
</style>
