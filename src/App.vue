<template>
  <Header />
  <main>
    <Main />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import { useHead, useSeoMeta } from "@unhead/vue";

useHead({
  title: "Restent Ou (@gxres042)",
  meta: [
    {
      name: "description",
      content: "Homepage of Restent Ou a.k.a. SliverRiver",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
  link: [
    /* Canonical - The value is your site url ONLY
    {
      rel: "canonical",
      href: "https://www.gxres.net",
    },
    */
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital@0;1&display=swap",
    },
    {
      rel: "icon",
      href: "https://library.gxres.net/images/icons/favicon.webp",
    },
  ],
});

useSeoMeta({
  title: "Restent Ou (@gxres042)",
  ogTitle: "Restent Ou (@gxres042)",
  description: "Homepage of Restent Ou a.k.a. SliverRiver",
  ogDescription: "Homepage of Restent Ou a.k.a. SliverRiver",
  ogImage: `https://library.gxres.net/images/icons/big-favicon.webp`,
});
</script>
