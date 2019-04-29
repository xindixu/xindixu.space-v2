<template>
    <div>
        <div class="page-header" style="background-image:url('img/bg/bg34.jpg')">
        <div class="content-center">
            <div class="container">
                <h1 class="display-1">404</h1>
                <h1 class="title">Oops, page not found</h1>
                <router-link to="/"> 
                    <n-button type="primary" round>
                        <i class="now-ui-icons travel_istanbul"></i>&nbsp; Home
                    </n-button>
                </router-link>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { Button } from '@/components';
export default {
    name: 'NotFound',
    components:{
        [Button.name]: Button
    }
}
</script>

<style lang="scss">
.page-header {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
