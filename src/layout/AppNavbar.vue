<template>
  <div>
    <!-- Navbar Primary -->
    <navbar
      menu-classes="ml-auto"
      position="fixed"
      type="primary"
      :transparent="transparent"
      :colorOnScroll="colorOnScroll"
    >
      <template slot="default">
        <router-link tag="a" class="nav-brand" to="/"
          >XindiXu.space</router-link
        >
      </template>
      <template slot="navbar-menu">
        <li class="nav-item">
          <router-link
            tag="a"
            class="nav-link"
            active-class="active"
            exact
            to="/"
          >
            <i class="now-ui-icons objects_globe"></i>
            <p>Home</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            tag="a"
            class="nav-link"
            active-class="active"
            to="/about"
          >
            <i class="now-ui-icons users_circle-08"></i>
            <p>About</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            tag="a"
            class="nav-link"
            active-class="active"
            to="/work"
          >
            <i class="now-ui-icons design-2_ruler-pencil"></i>
            <p>Work</p>
          </router-link>
        </li>
        <!--
          <li class="nav-item">
            <router-link
              tag="a"
              class="nav-link"
              active-class="active"
              to="/blog"
            >
              <i class="now-ui-icons education_agenda-bookmark"></i>
              <p>Blog</p>
            </router-link>
          </li>
        -->
        <li class="nav-item">
          <router-link
            tag="a"
            class="nav-link"
            active-class="active"
            to="/casper"
          >
            <Cat />
            <p>Casper</p>
          </router-link>
        </li>
        <p class="copyright">
          Design and Develop by Xindi Xu <i class="fas fa-heart"></i>
        </p>
      </template>
    </navbar>
    <!-- End Navbar Primary -->
  </div>
</template>

<script>
import { Navbar } from '@/components';
import { Cat } from '../assets/svg';

export default {
  name: 'app-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
    toggled: Boolean
  },
  components: {
    Navbar,
    Cat
  }
};
</script>

<style>
.nav-brand:hover {
  text-decoration: none;
}
.copyright {
  padding: 0 14px;
  font-size: 12px;
  color: white;
  position: absolute;
  bottom: 75px;
}
</style>
