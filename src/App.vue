<template>
    <div id="app" class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <router-link class="navbar-brand" to="/">upffice</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/bbs">board</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/customer">customer</router-link>
                    </li>
                    <li class="nav-item">
                         <router-link class="nav-link" to="/jun">JunBoard</router-link>
                     </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/pst">Posts</router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        <br/>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
.btn-primary {
  margin-right: 5px;
}

.container-fluid {
  text-align: center;
}
</style>
