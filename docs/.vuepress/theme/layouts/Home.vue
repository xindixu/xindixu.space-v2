<template>
  <v-app light>
    <v-content>
      <v-container>
        <v-layout row warp align-center>
          <article>
            <p class="post-page-meta">{{ postDate }}</p>
            <hr>
            <Content />
          </article>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
