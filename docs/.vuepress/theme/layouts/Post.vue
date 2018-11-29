<template>
  <v-app light>
    <v-container>
      <v-layout row wrap align-center>
        <header>
          {{#if readingTime}}
            Reading time {{ readingTime }} min |
          {{/if}}

          published on the {{ data postDate }}

          {{#if lastUpdated}}
            and last updated on {{ date lastUpdated }}
          {{/if}}
        </header>
        <article>
          <Content :custome="false" />
        </article>
      </v-layout>
    </v-container>
  </v-app>
</template>
